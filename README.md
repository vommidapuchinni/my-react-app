# Project: React App with Docker, Staging & Production Deployment
## Overview
This project demonstrates a full CI/CD workflow for deploying a React application to staging and production environments on AWS EC2 using Docker and monitoring logs via Amazon CloudWatch.

1. Staging and Production run on separate EC2 instances.
2. CI/CD pipeline is handled using GitHub Actions.
3. Logs are collected in CloudWatch Log Groups.
4. Docker is used to build, deploy, and serve the React application via Nginx.

## Infrastructure Diagram
                  GitHub Repository
                   |
                   | (Push)
                   v
           GitHub Actions CI/CD
          /                       \
         /                         \
  Staging Workflow            Production Workflow
    (staging branch)             (main branch)
        |                              |
        | SSH deploy                    | SSH deploy
        v                              v
  EC2 Staging Instance           EC2 Production Instance
  ┌────────────────┐             ┌────────────────┐
  │Docker Container│             │Docker Container│
  │ React + Nginx  │             │React + Nginx   │
  │ /app/logs      │             │ /app/logs      │
  └────────────────┘             └────────────────┘
        |                              |
        | CloudWatch Agent             | CloudWatch Agent
        v                              v
  CloudWatch Logs Group            CloudWatch Logs Group
  /staging/react-app               /production/react-app

  
## Deployment Flow

### Staging Branch

1. Push code to staging → triggers staging workflow
2. GitHub Actions SSH to staging EC2
3. Pull latest code, build Docker image, run container
4. CloudWatch agent collects logs to /staging/react-app

**Screenshots:**
- Docker container on EC2:  
  ![stagingec2check](screenshots/stagingec2check.png)
- Application running in browser:  
  ![stagingdashboard](screenshots/stagingdashboard.png)
- CloudWatch Logs:  
  ![stagingloggroup](screenshots/stagingloggroup.png)
- CI/CD Workflow:  
  ![stagingworkflow](screenshots/stagingworkflow.png)
- Operation logs (optional):  
  ![stagingop](screenshots/stagingop.png)


### Production Branch

1. Merge PR to main → triggers production workflow
2. GitHub Actions SSH to production EC2
3. Pull latest code, build Docker image, run container
4. CloudWatch agent collects logs to /production/react-app

**Screenshots:**
- Docker container on EC2:  
  ![prodec2check](screenshots/prodec2check.png)
- Application running in browser:  
  ![proddashboard](screenshots/proddashboard.png)
- CloudWatch Logs:  
  ![production loggroup](screenshots/production\ loggroup.png)
- CI/CD Workflow:  
  ![productionworkflow](screenshots/productionworkflow.png)
- Operation logs (optional):  
  ![prodop](screenshots/prodop.png)
