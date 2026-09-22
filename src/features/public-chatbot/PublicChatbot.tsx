import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react'
import { Bot, LoaderCircle, MessageCircle, Send, X } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {
  getPublicChatbotErrorMessage,
  sendPublicChatbotMessage,
} from '@/features/public-chatbot/api'

type ChatMessage = {
  id: string
  role: 'assistant' | 'visitor'
  content: string
}

const initialMessage: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    'Bonjour ! Je peux vous renseigner à partir des informations officielles publiées par la FSI-UCC.',
}

function newMessage(role: ChatMessage['role'], content: string): ChatMessage {
  return {
    id: `${Date.now()}-${Math.random()}`,
    role,
    content,
  }
}

function ChatMessageContent({ message }: { message: ChatMessage }) {
  const isVisitor = message.role === 'visitor'
  const linkClassName = isVisitor
    ? 'font-medium text-blue-100 underline underline-offset-2 hover:text-white'
    : 'font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900'

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h3 className="mb-2 text-base font-semibold leading-6">{children}</h3>
        ),
        h2: ({ children }) => (
          <h3 className="mb-2 text-sm font-semibold leading-6">{children}</h3>
        ),
        h3: ({ children }) => (
          <h3 className="mb-2 text-sm font-semibold leading-6">{children}</h3>
        ),
        p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
        ul: ({ children }) => (
          <ul className="mb-2 list-disc space-y-1 pl-5 last:mb-0">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-2 list-decimal space-y-1 pl-5 last:mb-0">{children}</ol>
        ),
        strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
        a: ({ href, children }) => {
          const opensNewTab = Boolean(href?.match(/^https?:\/\//i))

          return (
            <a
              href={href}
              target={opensNewTab ? '_blank' : undefined}
              rel={opensNewTab ? 'noopener noreferrer' : undefined}
              className={`${linkClassName} break-all`}
            >
              {children}
            </a>
          )
        },
        code: ({ children }) => (
          <code className="rounded bg-slate-900/10 px-1 py-0.5 font-mono text-[0.85em]">
            {children}
          </code>
        ),
      }}
    >
      {message.content}
    </ReactMarkdown>
  )
}

export default function PublicChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage])
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputReference = useRef<HTMLTextAreaElement>(null)
  const messagesReference = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      inputReference.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  useEffect(() => {
    messagesReference.current?.scrollTo({
      top: messagesReference.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, isSending])

  const sendMessage = async () => {
    const question = input.trim()

    if (question.length < 2 || isSending) return

    setMessages(currentMessages => [
      ...currentMessages,
      newMessage('visitor', question),
    ])
    setInput('')
    setError(null)
    setIsSending(true)

    try {
      const answer = await sendPublicChatbotMessage(question)
      setMessages(currentMessages => [
        ...currentMessages,
        newMessage('assistant', answer),
      ])
    } catch (requestError) {
      setError(getPublicChatbotErrorMessage(requestError))
    } finally {
      setIsSending(false)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void sendMessage()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      void sendMessage()
    }
  }

  return (
    <div className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-3 z-[60] sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          role="dialog"
          aria-modal="true"
          aria-label="Assistant FSI-UCC"
          className="fixed inset-0 flex h-[100dvh] w-full min-h-0 flex-col overflow-hidden bg-white shadow-2xl shadow-slate-900/20 sm:absolute sm:inset-auto sm:bottom-[4.5rem] sm:right-0 sm:h-[min(38rem,calc(100dvh-7rem))] sm:w-[min(24rem,calc(100vw-3rem))] sm:rounded-2xl sm:border sm:border-slate-200"
        >
          <header className="flex shrink-0 items-center gap-3 bg-[#0D3B66] px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] text-white sm:py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
              <Bot className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-sm font-semibold">Assistant FSI-UCC</h2>
              <p className="text-xs text-blue-100">Informations officielles</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer l’assistant FSI-UCC"
              className="ml-auto flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <div
            ref={messagesReference}
            aria-live="polite"
            className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-slate-50 p-3 sm:p-4"
          >
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.role === 'visitor' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`min-w-0 max-w-[90%] [overflow-wrap:anywhere] rounded-2xl px-3 py-2 text-sm leading-6 sm:max-w-[85%] ${
                    message.role === 'visitor'
                      ? 'rounded-br-md bg-[#0D3B66] text-white'
                      : 'rounded-bl-md bg-white text-slate-700 shadow-sm ring-1 ring-slate-200'
                  }`}
                >
                  <ChatMessageContent message={message} />
                </div>
              </div>
            ))}

            {isSending && (
              <div className="flex justify-start" aria-label="Réponse en cours de génération">
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-md bg-white px-3 py-2 text-sm text-slate-500 shadow-sm ring-1 ring-slate-200">
                  <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                  L’assistant répond…
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="shrink-0 border-t border-slate-200 bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:pb-3"
          >
            {error && (
              <p role="alert" className="mb-2 text-xs leading-5 text-red-600">
                {error}
              </p>
            )}
            <label htmlFor="public-chatbot-message" className="sr-only">
              Votre question
            </label>
            <div className="flex items-end gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2 focus-within:border-[#0D3B66] focus-within:ring-2 focus-within:ring-[#0D3B66]/20">
              <textarea
                ref={inputReference}
                id="public-chatbot-message"
                value={input}
                onChange={event => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                maxLength={1000}
                rows={2}
                placeholder="Posez votre question…"
                className="max-h-28 min-h-11 flex-1 resize-none bg-transparent px-1 py-1 text-base text-slate-800 outline-none placeholder:text-slate-400 sm:text-sm"
              />
              <button
                type="submit"
                disabled={isSending || input.trim().length < 2}
                aria-label="Envoyer la question"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0D3B66] text-white transition hover:bg-[#0a2d4a] disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {isSending ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Send className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
            <p className="mt-2 text-[11px] leading-4 text-slate-400">
              Les réponses reposent sur les pages officielles de la FSI-UCC. N’envoyez pas de données personnelles sensibles.
            </p>
          </form>
        </section>
      )}

      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
          aria-label="Ouvrir l’assistant FSI-UCC"
          className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0D3B66] text-white shadow-lg shadow-[#0D3B66]/30 transition hover:scale-105 hover:bg-[#0a2d4a] focus:outline-none focus:ring-4 focus:ring-[#0D3B66]/25"
        >
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
