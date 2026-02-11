# Horizon Hotel Suite — Professional Hotel Management System

A sophisticated, internal property management system (PMS) designed for boutique hotels and resorts. This application allows hotel staff to manage bookings, cabins, guests, and settings through a high-performance, responsive dashboard.

## 🚀 Evolution: Styled Components → Tailwind CSS

This project has undergone a complete UI architectural migration. To improve performance, maintainability, and developer experience, the entire design system was refactored from **Styled Components** to **Tailwind CSS**.

### Key Refactor Highlights:

- **Utility-First Architecture:** Replaced CSS-in-JS overhead with highly optimized Tailwind utility classes.
- **Custom Design System:** Integrated a specialized color palette and typography scale directly into `tailwind.config.js`.
- **Zero Layout Shifts:** Leveraged Tailwind's spacing scales to ensure perfect alignment across the grid-based dashboard.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **State Management:** TanStack Query (React Query)
- **Backend/Database:** Supabase
- **Form Handling:** React Hook Form
- **Routing:** React Router

## 🏛️ Core UI Library (Migrated)

The following components have been custom-built to match the hotel's brand guidelines:

- **Tables:** Complex compound components with dynamic grid columns.
- **Modals:** Accessible portals for CRUD operations.
- **Forms:** Validation-ready vertical and horizontal layouts.
- **Navigation:** Persistent sidebar with active route tracking.
