import { Component, type ErrorInfo, type ReactNode } from 'react'

interface ErrorBoundaryProps { children: ReactNode }
interface ErrorBoundaryState { hasError: boolean }

export default class AppErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {}

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Une erreur est survenue</h1>
            <button className="mt-5 rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white" onClick={() => window.location.reload()}>
              Recharger la page
            </button>
          </div>
        </main>
      )
    }
    return this.props.children
  }
}
