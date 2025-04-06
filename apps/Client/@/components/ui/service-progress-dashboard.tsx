"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../@/components/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../@/components/components/ui/card"
import { MultiStepProgressBar } from "../../../@/components/ui/multi-step-progress-bar"
import type { ServiceType } from "../../../@/lib/types"

export function ServiceProgressDashboard() {
  const [activeService, setActiveService] = useState<ServiceType>("bugFixing")

  return (
    <Card className="w-full bg-[#1a1a1a] border-gray-800">
      <CardHeader>
        <CardTitle className="text-white">Service Progress Tracker</CardTitle>
        <CardDescription className="text-gray-400">
          Track the progress of various services in your project
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="bugFixing" onValueChange={(value) => setActiveService(value as ServiceType)}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6 bg-gray-800">
            <TabsTrigger value="bugFixing" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Bug Fixing
            </TabsTrigger>
            <TabsTrigger
              value="softwareDeployment"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Deployment
            </TabsTrigger>
            <TabsTrigger
              value="featureDevelopment"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Feature Dev
            </TabsTrigger>
            <TabsTrigger
              value="databaseMigration"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              DB Migration
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bugFixing">
            <MultiStepProgressBar serviceType="bugFixing" />
          </TabsContent>

          <TabsContent value="softwareDeployment">
            <MultiStepProgressBar serviceType="softwareDeployment" />
          </TabsContent>

          <TabsContent value="featureDevelopment">
            <MultiStepProgressBar serviceType="featureDevelopment" />
          </TabsContent>

          <TabsContent value="databaseMigration">
            <MultiStepProgressBar serviceType="databaseMigration" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

