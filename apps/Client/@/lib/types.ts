export type ServiceType = "bugFixing" | "softwareDeployment" | "featureDevelopment" | "databaseMigration"

export interface ProgressStep {
  label: string
  description: string
  date?: string
  status?: "completed" | "in-progress" | "incomplete"
}

export interface ServiceProgress {
  type: ServiceType
  steps: ProgressStep[]
  currentStep: number
}

