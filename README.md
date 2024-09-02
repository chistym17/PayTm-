# PayLink - Secure Wallet Application

**PayLink** is a secure and user-friendly wallet application designed to facilitate seamless money transfers between a user's bank account and their wallet, as well as within the platform itself. The application is built with a focus on security, scalability, and efficient real-time transaction processing.

## Table of Contents
- [Features](#features)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Usage](#usage)
- [Deployment](#deployment)

## Features

- **Fund Transfers:** Easily transfer funds between your bank account and PayLink wallet.
- **In-Platform Transactions:** Send and receive money within the platform securely.
- **Real-Time Processing:** Transactions are processed in real-time using a dedicated webhook service.
- **User Authentication:** Secure login and authentication using NextAuth.
- **Automated Deployments:** CI/CD pipelines ensure seamless updates and deployments.
- **Scalability:** Deployed on AWS EC2 for handling large-scale transactions.

## Architecture

PayLink follows a 3-tier architecture to ensure secure and efficient transaction processing:

1. **User App:** The front-end interface where users manage their accounts, transfer funds, and perform transactions.
2. **Bank App (Simulated):** A simulated bank application that interfaces with the User App to process fund transfers securely.
3. **Bank Webhook:** A dedicated service for handling real-time transaction notifications and processing them efficiently.

This architecture ensures that transactions are processed securely and that the application can scale as needed to handle a growing user base.

## Technology Stack

- **Frontend:**
  - Next.js
  - Tailwind CSS
  - NextAuth for authentication
- **Backend:**
  - Express.js
  - Prisma ORM for database management
  - PostgreSQL as the primary database
- **DevOps & Deployment:**
  - Docker for containerization
  - AWS EC2 for scalable deployment
  - GitHub Actions for CI/CD pipeline

## Usage

1. **Sign Up / Login:** 
   - Users can sign up or log in using their credentials.

2. **Add Bank Account:** 
   - Link your bank account to your PayLink wallet.

3. **Transfer Funds:** 
   - Easily transfer funds between your bank account and wallet.

4. **Send/Receive Money:** 
   - Use the in-platform feature to securely send or receive money from other users.

## Deployment

To deploy PayLink on AWS EC2:

1. **Dockerize the Application:**
   - Ensure all services are properly containerized using Docker.

2. **Set Up AWS EC2 Instance:**
   - Launch an EC2 instance and configure security groups, SSH access, and other necessary settings.

3. **Deploy Using CI/CD Pipeline:**
   - Use GitHub Actions to automate the build and deployment process to the EC2 instance.

