"use client"

import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/components/ui/tooltip"
import { cn } from "../../../@/lib/utils"
import type { ServiceType, ProgressStep, ServiceProgress } from "../../../@/lib/types"
import { dummyProgressData } from "../../../@/lib/dummy-data"
import { Check } from "lucide-react"

interface MultiStepProgressBarProps {
  serviceType: ServiceType
  currentStep?: number
  customSteps?: ProgressStep[]
  className?: string
}

export function MultiStepProgressBar({ serviceType, currentStep, customSteps, className }: MultiStepProgressBarProps) {
  const [activeService] = useState<ServiceProgress>(
    customSteps
      ? { type: serviceType, steps: customSteps, currentStep: currentStep || 0 }
      : (dummyProgressData.find((service) => service.type === serviceType) ?? dummyProgressData[0]) as ServiceProgress,
  )

  const steps = customSteps || activeService.steps
  const activeStep = currentStep !== undefined ? currentStep : activeService.currentStep
  const totalSteps = steps.length
  const progressPercentage = Math.round((activeStep / (totalSteps - 1)) * 100)

  return (
    <TooltipProvider delayDuration={300}>
      <div className={cn("w-full space-y-8", className)}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-white">{getServiceTitle(serviceType)}</h3>
          <span className="text-sm text-gray-400">{progressPercentage}% Complete</span>
        </div>

        <div className="relative">
          {/* Step Markers and Progress Line */}
          <div className="flex justify-between items-center relative">
            {/* Progress Track (Background Line) */}
            <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-gray-700" />

            {/* Progress Fill */}
            <div
              className="absolute top-1/2 left-0 h-1 -translate-y-1/2 bg-primary transition-all duration-300 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            />

            {/* Step Circles */}
            {steps.map((step, index) => {
              const isCompleted = index < activeStep
              const isActive = index === activeStep

              return (
                <div key={index} className="z-10">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-col items-center">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                            isCompleted
                              ? "bg-primary border-2 border-primary"
                              : isActive
                                ? "bg-primary border-2 border-primary"
                                : "bg-transparent border-2 border-gray-600",
                          )}
                        >
                          {isCompleted ? (
                            <Check className="h-4 w-4 text-white" />
                          ) : (
                            <div className={cn("w-2 h-2 rounded-full", isActive ? "bg-white" : "bg-gray-500")} />
                          )}
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="max-w-xs bg-gray-800 border-gray-700 text-white">
                      <p className="font-medium">{step.label}</p>
                      <p className="text-xs text-gray-400">{step.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              )
            })}
          </div>

          {/* Step Labels (Below the line) */}
          <div className="flex justify-between mt-4">
            {steps.map((step, index) => {
              const isCompleted = index < activeStep
              const isActive = index === activeStep

              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                  style={{ width: `${100 / (steps.length - 1)}%`, maxWidth: "120px" }}
                >
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors duration-300 mb-1",
                      isCompleted || isActive ? "text-primary" : "text-gray-400",
                    )}
                  >
                    {step.label}
                  </span>
                  {step.date && <p className="text-xs text-gray-500">{step.date}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}

function getServiceTitle(serviceType: ServiceType): string {
  switch (serviceType) {
    case "bugFixing":
      return "Bug Fixing Progress"
    case "softwareDeployment":
      return "Software Deployment Progress"
    case "featureDevelopment":
      return "Feature Development Progress"
    case "databaseMigration":
      return "Database Migration Progress"
    default:
      return "Progress"
  }
}

