import { Users, Building2, UserCheck, Code, GraduationCap } from 'lucide-react'

export default function IconeSection({ id }: { id: string }) {
  switch (id) {
    case 'faculte':
      return <Users className="w-4 h-4 shrink-0" />
    case 'gouvernement':
      return <Building2 className="w-4 h-4 shrink-0" />
    case 'cp_cpa':
      return <UserCheck className="w-4 h-4 shrink-0" />
    case 'developpeurs':
      return <Code className="w-4 h-4 shrink-0" />
    default:
      return <GraduationCap className="w-4 h-4 shrink-0" />
  }
}
