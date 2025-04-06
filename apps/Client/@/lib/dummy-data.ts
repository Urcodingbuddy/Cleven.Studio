import type { ServiceProgress } from "./types"

export const dummyProgressData: ServiceProgress[] = [
  {
    type: "bugFixing",
    currentStep: 3,
    steps: [
      {
        label: "Issue Reported",
        description: "A bug report has been submitted.",
        date: "12 Mar, 24",
      },
      {
        label: "File Fetched",
        description: "Relevant files and logs are retrieved.",
        date: "13 Mar, 24",
      },
      {
        label: "Developer Assigned",
        description: "A developer is assigned to fix the issue.",
        date: "14 Mar, 24",
      },
      {
        label: "Fix in Progress",
        description: "The developer is actively working on the fix.",
        date: "15 Mar, 24",
      },
      {
        label: "Testing Phase",
        description: "The fix is being tested for stability.",
        date: "Yet to complete",
      },
      {
        label: "Bug Fixed",
        description: "The issue is resolved.",
        date: "Yet to complete",
      },
      {
        label: "File Ready",
        description: "The fixed version is available for deployment.",
        date: "Yet to complete",
      },
    ],
  },
  {
    type: "softwareDeployment",
    currentStep: 4,
    steps: [
      {
        label: "Code Pushed",
        description: "The latest version of the code is pushed to the repository.",
        date: "10 Mar, 24",
      },
      {
        label: "Building Artifacts",
        description: "The application is being compiled and built.",
        date: "11 Mar, 24",
      },
      {
        label: "Running Tests",
        description: "Automated tests are executed.",
        date: "12 Mar, 24",
      },
      {
        label: "Creating Package",
        description: "The application is packed for deployment.",
        date: "13 Mar, 24",
      },
      {
        label: "Deploying to Server",
        description: "The application is being installed on the server.",
        date: "14 Mar, 24",
      },
      {
        label: "Finalizing",
        description: "Last-minute configurations are applied.",
        date: "Yet to complete",
      },
      {
        label: "Deployment Successful",
        description: "The service is live.",
        date: "Yet to complete",
      },
    ],
  },
  {
    type: "featureDevelopment",
    currentStep: 2,
    steps: [
      {
        label: "Idea Proposed",
        description: "A new feature request is documented.",
        date: "05 Mar, 24",
      },
      {
        label: "Planning Phase",
        description: "The development approach is defined.",
        date: "08 Mar, 24",
      },
      {
        label: "Designing UI/UX",
        description: "Wireframes and mockups are created.",
        date: "12 Mar, 24",
      },
      {
        label: "Development",
        description: "The feature is being coded.",
        date: "Yet to start",
      },
      {
        label: "Review & Testing",
        description: "The feature is reviewed and tested.",
        date: "Yet to start",
      },
      {
        label: "Feature Approved",
        description: "The feature passes all checks.",
        date: "Yet to start",
      },
      {
        label: "Feature Released",
        description: "The feature is available for users.",
        date: "Yet to start",
      },
    ],
  },
  {
    type: "databaseMigration",
    currentStep: 3,
    steps: [
      {
        label: "Migration Planned",
        description: "The migration process is planned.",
        date: "01 Mar, 24",
      },
      {
        label: "Backing Up Data",
        description: "A backup of the existing database is created.",
        date: "05 Mar, 24",
      },
      {
        label: "Applying Migrations",
        description: "Changes to the schema are applied.",
        date: "10 Mar, 24",
      },
      {
        label: "Verifying Data",
        description: "Ensuring that all data is intact.",
        date: "15 Mar, 24",
      },
      {
        label: "Testing Queries",
        description: "Testing if queries work correctly.",
        date: "Yet to complete",
      },
      {
        label: "Optimization",
        description: "Removing unnecessary data or indexes.",
        date: "Yet to complete",
      },
      {
        label: "Migration Completed",
        description: "The database migration is successful.",
        date: "Yet to complete",
      },
    ],
  },
]

