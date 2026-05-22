# Subscription Management SaaS (MVP)

A fullstack SaaS admin panel built with React Admin and Express.  
This project demonstrates how to build a scalable admin interface using a REST API and a clean separation between frontend and backend.

---

## Tech Stack

### Frontend

- React
- React Admin
- Material UI

### Backend

- Express
- Node.js
- REST API

---

## Features

- Users CRUD (Create, Read, Update, Delete)
- React Admin integration with Data Provider
- RESTful API design
- CORS configuration
- Pagination-ready endpoints (`Content-Range`)
- Backend-driven data validation

---

## Architecture

The application follows a simple layered architecture:

```text
React Admin (Frontend)
        ↓
Data Provider (API Adapter)
        ↓
Express.js (Backend API)
        ↓
Supabase (PostgreSQL Database)

```

---

## API Endpoints

### Users

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /users     | Get all users   |
| GET    | /users/:id | Get single user |
| POST   | /users     | Create user     |
| PUT    | /users/:id | Update user     |
| DELETE | /users/:id | Delete user     |

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/lilisepulveda96-svg/subtrack-saas.git
```

### 2. Environment Variables

Create a `.env` file in the backend directory with your Supabase credentials:

\`\`\`env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

_(Note: Never commit your actual `.env` file to version control)._
