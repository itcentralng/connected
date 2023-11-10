# Project Discription

ConnectED is a platform that aims to address a significant public health issue by providing a centralized digital hub for government agencies and NGOs to upload important health updates and information. The platform would streamline the dissemination of crucial data to populations across wide geographic areas. The SMS functionality would ensure even those in remote, rural localities without consistent internet access could still receive timely advisories on outbreaks, best medical practices, vaccination schedules, and more. By partnering both information providers and citizens on one cohesive platform, ConnectED could virtually extend the reach of institutional messaging far beyond what traditional in-person community outreach allows.

# Backend Repo

https://github.com/itcentralng/connected-vectara-hack.git

# Demo link

https://developers.africastalking.com/simulator

Create an account with AfricasTalking before doing the below in the sandbox simulator
Your must register before you can start sending your query, register using the USSD: *384*212212#
The shortcode you can use to interact with is: 3525

# Vite React TypeScript Redux-Toolkit Material-UI Template

This template provides a starting point for building web applications that leverage the power of React, TypeScript, Redux-Toolkit, and Material-UI. With these technologies combined, you can create feature-rich and maintainable applications.

## Features

- ⚡️ **Fast Development**: Utilize Vite's speed and React's component-based architecture for efficient development.
- 🧩 **React**: Build dynamic user interfaces using the React library.
- 🔗 **TypeScript**: Benefit from TypeScript's strong typing and enhanced developer experience.
- 🔄 **Redux Toolkit**: Manage your application state efficiently with Redux Toolkit, a powerful and opinionated state management library.
- 🎨 **Material-UI**: Design beautiful and responsive user interfaces using Material-UI components and styles.

## Folder Structure

The project's folder structure is designed to promote maintainability, separation of concerns, and reusability.
Here's a breakdown of the key directories and files:

- `src/`: The main source code directory.
  - `main.tsx`: the starting point for the app.
  - `App.tsx`: the top-level React component.
  - `app/`: Houses redux-specific logic.
    - `apiSlice.ts`: Defines Redux Toolkit API slices for handling API requests and state management.
    - `hooks.ts`: redux custom hooks used throughout the application.
    - `store.ts`: creates the Redux store instance.
  - `assets/`: Contains image and SVG assets.
    - `images/`: Image assets.
    - `svg/`: SVG assets.
  - `components/`: Reusable React components.
    - `styled/`: Houses styled-components or emotion-based components.
  - `layout/`: Includes layout components for structuring the application layout.
  - `pages/`: Contains React components representing different application pages/routes.
  - `routers/`: Houses router configuration files (if applicable).
  - `styles/`: Holds global styles, themes, and CSS-in-JS setups.
    - `theme.ts`: Material-UI theme customization.
  - `types/`: Includes TypeScript type definitions and declarations.
    - `svg.d.ts`: Type declaration for SVG assets.
- `README.md`: You're currently reading this file! It provides project information and documentation.
- `package.json`: Contains package configuration and dependencies.
- `tsconfig.json`: TypeScript configuration.

## Getting Started

Follow these steps to kickstart your project:
