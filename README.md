# Alpha Active Health Hub Website

This repository contains the source code for the Alpha Active Health Hub website. It is a monorepo-style setup containing two main applications:

*   **`web/`**: The frontend application built with [Next.js](https://nextjs.org/).
*   **`studio/`**: The content management system (CMS) built with [Sanity.io](https://www.sanity.io/).

## Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or later recommended)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js)
*   A Sanity.io account and project (if you are setting this up from scratch, otherwise ask the team for the Project ID).

## Getting Started

Since this is a monorepo without a root workspace manager, you need to install dependencies and run commands in each directory separately.

### 1. Installation

Install dependencies for the Studio:
```bash
cd studio
npm install
```

Install dependencies for the Web frontend:
```bash
cd ../web  # From studio directory
# OR
cd web     # From root directory
npm install
```

### 2. Environment Configuration

You need to set up environment variables for both applications to connect to your Sanity backend.

#### Studio Configuration
Create a `.env.local` file in the `studio/` directory:

```bash
# studio/.env.local
SANITY_STUDIO_PROJECT_ID=your_project_id_here
SANITY_STUDIO_DATASET=production
```

#### Web Configuration
Create a `.env.local` file in the `web/` directory:

```bash
# web/.env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

> **Note:** Ensure both project IDs match.

### 3. Running Locally

To run the full stack locally, you will need two terminal windows.

**Terminal 1: Start the Sanity Studio**
```bash
cd studio
npm run dev
```
The Studio will typically start at `http://localhost:3333`.

**Terminal 2: Start the Next.js Frontend**
```bash
cd web
npm run dev
```
The Website will typically start at `http://localhost:3000`.

## Project Structure

*   **`studio/`**: 
    *   `schemas/`: Defines the data structures for Sanity (e.g., Doctors, Products, Articles).
    *   `sanity.config.ts`: Configuration for the Studio desk and plugins.
*   **`web/`**:
    *   `src/app/`: Next.js App Router pages.
    *   `src/components/`: React UI components.
    *   `src/lib/`: Utility functions, including the Sanity client (`sanity.ts`).

## Testing

The web project includes a test suite.

```bash
cd web
npm test
```

## Deployment

*   **Web**: Designed to be deployed on Vercel.
*   **Studio**: Can be deployed to Sanity or Vercel.

```bash
# Deploy Studio
cd studio
npm run deploy
```
