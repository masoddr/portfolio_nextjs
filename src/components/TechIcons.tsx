import { ComponentType } from 'react'

// Simple SVG icons for technologies
export function DockerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.983 11.278h2.119a.375.375 0 0 0 .375-.375V9.278a.375.375 0 0 0-.375-.375h-2.119a.375.375 0 0 0-.375.375v1.625c0 .207.168.375.375.375zm-3 0h2.119a.375.375 0 0 0 .375-.375V9.278a.375.375 0 0 0-.375-.375h-2.119a.375.375 0 0 0-.375.375v1.625c0 .207.168.375.375.375zm-3 0h2.119a.375.375 0 0 0 .375-.375V9.278a.375.375 0 0 0-.375-.375H8.983a.375.375 0 0 0-.375.375v1.625c0 .207.168.375.375.375z" />
      <path d="M20.25 10.778c-1.24 0-2.25-1.009-2.25-2.25 0-1.24 1.01-2.25 2.25-2.25S22.5 7.288 22.5 8.528s-1.01 2.25-2.25 2.25zm0-3.75c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z" />
      <path d="M3.75 10.778c-1.24 0-2.25-1.009-2.25-2.25 0-1.24 1.01-2.25 2.25-2.25S6 7.288 6 8.528s-1.01 2.25-2.25 2.25zm0-3.75c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z" />
      <path d="M12 2.25C6.615 2.25 2.25 6.615 2.25 12S6.615 21.75 12 21.75 21.75 17.385 21.75 12 17.385 2.25 12 2.25zm0 18c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9z" />
    </svg>
  )
}

export function KubernetesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M10.5 12L6 9.5v5L10.5 12zm3 0L18 9.5v5L13.5 12zM12 6l4.5 2.5L12 11 7.5 8.5 12 6zm0 12l-4.5-2.5L12 13l4.5 2.5L12 18z" />
    </svg>
  )
}

export function AnsibleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4v8.64l-8 4-8-4V8.18l8-4z" />
    </svg>
  )
}

export function GitLabIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4v8.64l-8 4-8-4V8.18l8-4z" />
    </svg>
  )
}

export function PythonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 4.65 3 4.65 5.391v3.95s.146 2.35 2.415 2.35h2.52zm-1.19-6.828c.784 0 1.42-.636 1.42-1.42 0-.784-.636-1.42-1.42-1.42-.784 0-1.42.636-1.42 1.42 0 .784.636 1.42 1.42 1.42z" />
      <path d="M14.415 12.308H10.087s-2.432-.039-2.432 2.35v3.951s-.146 2.35-2.415 2.35H4.72s-2.432.04-2.432-2.35v-3.95S2.286 21 7.064 21c4.574 0 7.286 0 7.286-2.391v-3.95s-.146-2.351-1.935-2.351zm-1.19 6.828c-.784 0-1.42.636-1.42 1.42 0 .784.636 1.42 1.42 1.42.784 0 1.42-.636 1.42-1.42 0-.784-.636-1.42-1.42-1.42z" />
    </svg>
  )
}

export function JavaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.851 18.56s-.849.95.709 1.196c1.715.278 2.466.236 4.232-.157.697-.156 1.415-.332 1.415-.332s-.757.515-1.838.778c-2.126.515-4.517.44-4.517.44zm-.593-2.03s-1.216 1.334.608 1.713c1.992.415 3.616.415 5.818-.157.697-.196 1.256-.313 1.256-.313s-.914.618-2.057.914c-2.409.618-5.625.332-5.625.332zm3.508-3.108s-1.415 1.713.532 2.174c2.126.515 4.232.618 6.78.04.914-.196 1.573-.313 1.573-.313s-1.021.716-2.214 1.021c-2.409.618-6.671.618-6.671.618zm-2.174-2.231s-1.256 1.415.415 1.833c1.715.44 3.431.618 5.625.196.697-.118 1.256-.196 1.256-.196s-.874.618-2.057.874c-2.292.515-5.245.196-5.245.196zm6.348-1.713s-1.256.914.375 1.256c1.256.275 2.174.313 3.431.196.532-.04.914-.078.914-.078s-.532.313-1.256.47c-1.715.44-3.664.313-3.664.313zm-3.508-2.292s-1.021 1.256.375 1.596c1.415.44 2.849.515 4.517.196.697-.118 1.256-.196 1.256-.196s-.874.515-1.992.716c-2.292.44-4.156.196-4.156.196zm-1.833-2.174s-.914 1.021.313 1.334c1.021.275 2.057.313 3.273.118.532-.078.914-.118.914-.118s-.532.313-1.256.47c-1.596.44-3.244.313-3.244.313zm9.564 15.5s.914.757-.313 1.021c-1.573.332-4.517.44-5.625.04-.532-.196-.914-.313-.914-.313s.532-.196 1.415-.313c1.833-.275 3.664-.313 5.437-.436zm-1.021-1.713s1.021.914-.196 1.256c-1.573.44-4.232.515-5.625.196-.532-.118-.914-.196-.914-.196s.532-.196 1.415-.313c1.833-.275 3.664-.313 5.32-.039z" />
    </svg>
  )
}

export function JavaScriptIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.475-2.155-.552-.227-1.17-.378-1.353-.644-.092-.227-.111-.354-.052-.531.131-.39.911-.507 1.498-.39.39.075.748.227.976.39.131.113.227.189.302.302.075.113.15.227.189.302.075.189.075.302.037.453-.037.15-.15.302-.302.416-.15.113-.302.189-.453.227-.302.075-.604.113-.906.15-.302.037-.604.037-.906.037-.302 0-.604-.037-.906-.075-.302-.037-.604-.113-.906-.189-.15-.037-.302-.113-.453-.227-.15-.113-.302-.227-.302-.416 0-.15.037-.302.075-.453.037-.15.113-.302.189-.302.075-.113.15-.227.302-.302.15-.113.302-.189.453-.227.302-.075.604-.113.906-.15.302-.037.604-.037.906-.037.302 0 .604.037.906.075.302.037.604.113.906.189.15.037.302.113.453.227.15.113.302.227.302.416 0 .15-.037.302-.075.453-.037.15-.113.302-.189.302z" />
    </svg>
  )
}

export function PostgreSQLIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.015 9.32c-.119-2.895-2.451-4.05-2.451-4.05C18.795 3.12 12.225 3 12.225 3S5.655 3.12 3.436 5.27c0 0-2.332 1.155-2.451 4.05C.966 9.32.966 12.68.966 12.68s0 3.36.019 3.36c.119 2.895 2.451 4.05 2.451 4.05C5.655 22.88 12.225 23 12.225 23s6.57-.12 8.789-2.27c0 0 2.332-1.155 2.451-4.05.019 0 .019-3.36.019-3.36s0-3.36-.019-3.36zm-6.57 6.75c-1.5 1.5-3.9 1.5-5.4 0s-1.5-3.9 0-5.4 3.9-1.5 5.4 0 1.5 3.9 0 5.4z" />
    </svg>
  )
}

export function BashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
    </svg>
  )
}

export function GitIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

export function TerraformIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4v8.64l-8 4-8-4V8.18l8-4z" />
    </svg>
  )
}

// Generic icons for skills without specific logos
export function DataIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9h6M9 15h6M9 12h6" />
    </svg>
  )
}

export function ModelIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  )
}

export function SimulationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  )
}

export function LinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

export function OrbitIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  )
}

export function QuantumIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="2" />
      <path d="M12 1v6m0 6v6M1 12h6m6 0h6" />
      <path d="M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24" />
    </svg>
  )
}

export function OpticsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v20M2 12h20" />
      <circle cx="12" cy="12" r="3" />
      <path d="M5.64 5.64l12.72 12.72M18.36 5.64L5.64 18.36" />
    </svg>
  )
}

// Icon mapping
export const techIcons: Record<string, ComponentType<{ className?: string }>> = {
  Docker: DockerIcon,
  Kubernetes: KubernetesIcon,
  Ansible: AnsibleIcon,
  'GitLab CI/CD': GitLabIcon,
  'Infrastructure as Code': TerraformIcon,
  Python: PythonIcon,
  Java: JavaIcon,
  'JavaScript/TypeScript': JavaScriptIcon,
  PostgreSQL: PostgreSQLIcon,
  'Shell/Bash': BashIcon,
  Git: GitIcon,
  'Traitement de données': DataIcon,
  Modélisation: ModelIcon,
  Simulation: SimulationIcon,
  'Bilans de liaison': LinkIcon,
  Orbitographie: OrbitIcon,
  'Physique quantique': QuantumIcon,
  Optique: OpticsIcon,
}
