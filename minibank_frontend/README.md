
# MiniBank - Frontend

Welcome to the frontend repository of LittleMoments. This README provides details about the project structure, technologies used, installation instructions, and deployment process.

## Technologies Used

- Next.js (React framework)
- TypeScript
- Tailwind CSS (for styling)
- Axios (for API calls)
- Redux (for global state management)
- Redux Thunk (middleware for asynchronous actions)

## Project Structure

The frontend is built using Next.js and TypeScript, following a modular and reusable component-based approach.

- /app: This folder handles routing and main application setup.
- Components: Reusable UI components are organized here.
- Pages: Each page of the application is defined as a separate file under /pages.
- Redux Store: Global state management is handled using Redux. Actions and reducers are structured in an organized manner.
- API Calls: Axios is used for making API calls, and Redux Thunk middleware is employed for handling asynchronous actions.

## Installation

To run this project locally, follow these steps:

1. Clone the project

```bash
  git clone https://github.com/Nirmalkilari123/minibank.git
  cd minibank_frontend
```

2. Install dependencies:

```bash
  npm install
```

3. Start the server:

```bash
  npm run dev
```

## Hosting

The frontend is hosted on Cloudflare, which is connected to a GitHub repository for automatic deployments.

Deployment Process:

1. GitHub Repository: The frontend code is stored in a GitHub repository.
2. Cloudflare Setup:
   - Cloudflare is configured to connect to the GitHub repository.
   - Changes pushed to the main branch automatically trigger deployments on Cloudflare.
3. Domain Name:
   - The domain minibank.life is connected to Cloudflare's DNS settings.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_BASE_URL`
