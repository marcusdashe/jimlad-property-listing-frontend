# EstateFind - Next.js Frontend

This is the frontend for EstateFind, a modern real estate property listing application. It is built with Next.js, React, and Tailwind CSS for a fast, responsive, and beautiful user experience. This frontend is designed to work with the [Jimlad Real Estate Property Listing API](https://github.com/marcusdashe/jimlad-property-listing-backend).

## Tech Stack

- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN/UI
- **Language**: TypeScript
- **Form Management**: React Hook Form with Zod for validation
- **Icons**: Lucide React

## Features

- ✅ **Modern Tech Stack**: Built with Next.js App Router for optimal performance.
- ✅ **Component-Based UI**: Scalable and maintainable with React and ShadCN components.
- ✅ **Fully Responsive Design**: Looks great on all devices, from mobile to desktop.
- ✅ **Property Listings**: View all properties in a clean, grid-based layout.
- ✅ **Search and Filtering**: Easily find properties by location and price range.
- ✅ **Detailed Property Pages**: Each property has a dedicated, well-designed details page.
- ✅ **List a Property**: A user-friendly form to add new properties, including image uploads.
- ✅ **Proxy to Backend**: Seamlessly communicates with the backend API to avoid CORS issues.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- The [backend server](https://github.com/marcusdashe/jimlad-property-listing-backend) must be running.

## Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/marcusdashe/jimlad-property-listing-frontend.git
    cd jimlad-property-listing-frontend
    ```

2.  **Install dependencies:**
    This command will download and install all the necessary libraries for the project.
    ```bash
    npm install
    ```

3.  **Run the development server:**
    This will start the Next.js application in development mode.
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Open your browser and navigate to **http://localhost:9002** to see the application running.

## Project Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Creates a production-ready build of the application.
- `npm run start`: Starts the production server (requires a build first).
- `npm run lint`: Lints the codebase for errors and style issues.
- `npm run typecheck`: Runs the TypeScript compiler to check for type errors.
