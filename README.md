# 🍽️ Recipe Remix

A full-stack recipe discovery application built with **React, Vite, Node.js, and Express**, powered by [TheMealDB API](https://www.themealdb.com/api.php).

Recipe Remix allows users to search for meals by ingredient or recipe name, discover random dishes, and explore detailed recipes through a clean, interactive interface.

## 📖 Overview

Recipe Remix demonstrates full-stack JavaScript development by connecting a React frontend to an Express backend that retrieves recipe information from an external REST API.

The application focuses on asynchronous API communication, reusable React components, client-side state management, server-side request validation, and error handling.

## 🛠️ Tech Stack

| Category          | Technologies                      |
| ----------------- | --------------------------------- |
| Frontend          | React 19, Vite 8, JavaScript, CSS |
| Backend           | Node.js, Express 5                |
| API Communication | Axios, REST APIs                  |
| External API      | TheMealDB                         |
| Development Tools | Git, GitHub, npm, Nodemon, ESLint |
| Middleware        | CORS, Express JSON middleware     |

## ✨ Features

- **Search by Ingredient:** Find recipes containing a specified ingredient.
- **Search by Recipe Name:** Look up meals by their names.
- **Random Recipe Generator:** Discover a random meal with one click.
- **Recipe Details:** Retrieve individual recipes using their unique meal IDs.
- **Dynamic Recipe Cards:** Display search results using reusable React components.
- **Loading Indicators:** Show feedback while requests are processing.
- **Error Handling:** Display appropriate messages when API requests fail.
- **Empty Search Results:** Inform users when no matching recipes are found.
- **Request Validation:** Reject empty search queries and unsupported search types.
- **Frontend/Backend Separation:** Keep UI logic separate from API communication and server-side processing.

## 📁 Project Structure

```text
my_restaurant/
├── backend/
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── RecipeCard.jsx
│   │   └── RecipeDetail.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js (a version compatible with Vite 8)
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/overkill489/my_restaurant.git
cd my_restaurant
```

### 2. Start the Backend

Open a terminal in the project directory:

```bash
cd backend
npm install
npm run dev
```

The Express server will start at:

```text
http://localhost:3002
```

Nodemon automatically restarts the server whenever backend files change.

### 3. Start the Frontend

Open a second terminal from the project root:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite, typically:

```text
http://localhost:5173
```

**Important:** Both servers must be running for recipe searching and recipe discovery to work.

## 🔌 REST API Endpoints

The Express backend communicates with TheMealDB API and exposes the following endpoints.

| Method | Endpoint              | Description                                |
| ------ | --------------------- | ------------------------------------------ |
| GET    | `/api/recipes/random` | Retrieve a random recipe                   |
| GET    | `/api/recipes/search` | Search recipes by ingredient or name       |
| GET    | `/api/recipes/:id`    | Retrieve detailed information for a recipe |

### Get a Random Recipe

```http
GET http://localhost:3002/api/recipes/random
```

Returns a randomly selected meal.

### Search by Ingredient

```http
GET http://localhost:3002/api/recipes/search?query=chicken&type=ingredient
```

Returns recipes matching the specified ingredient.

### Search by Recipe Name

```http
GET http://localhost:3002/api/recipes/search?query=Arrabiata&type=name
```

Returns recipes matching the provided recipe name.

### Retrieve Recipe Details

```http
GET http://localhost:3002/api/recipes/52771
```

Returns detailed information for the specified meal ID.

### API Error Responses

The backend includes error handling for invalid requests and failed API calls.

| Status | Description                                 |
| ------ | ------------------------------------------- |
| 400    | Missing search query or invalid search type |
| 404    | Requested recipe was not found              |
| 500    | Failed to retrieve recipe information       |

Search requests without matching recipes return an empty array.

## 🏗️ Application Architecture

```text
                USER
                 |
                 v
           React Frontend
             (Vite)
                 |
                 v
          Axios HTTP Requests
                 |
                 v
           Express Backend
           (Port 3002)
                 |
                 v
            TheMealDB API
                 |
                 v
           JSON Response
                 |
                 v
           Express Backend
                 |
                 v
           React State Update
                 |
                 v
       Recipe Cards / Details
```

The frontend manages user interactions, loading indicators, error messages, and rendering.

The backend handles request validation, external API communication, and JSON responses.

## 🧩 React Components

### App.jsx

The main application component manages:

- Recipe search input
- Search type selection
- API requests with Axios
- Recipe search results
- Random recipe generation
- Selected recipe state
- Loading and error states
- Empty result messages

### RecipeCard.jsx

A reusable component used to render individual recipes in search results.

### RecipeDetail.jsx

A dedicated component for displaying selected recipe information and providing navigation back to the results view.

## 🧠 Technical Skills Demonstrated

This project demonstrates practical experience with:

- Full-stack JavaScript development
- React functional components and hooks
- React state management using `useState`
- Controlled form inputs
- Event handling and form submission
- Conditional rendering
- Asynchronous JavaScript with `async/await`
- Axios HTTP requests
- RESTful API development
- Express routing and middleware
- Server-side query parameter validation
- HTTP status codes and error handling
- Third-party API integration
- CORS configuration
- Modular application architecture
- npm package management

## 📦 Available Scripts

### Frontend

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start Vite development server     |
| `npm run build`   | Build the frontend for production |
| `npm run preview` | Preview the production build      |
| `npm run lint`    | Run ESLint checks                 |

### Backend

| Command       | Description                 |
| ------------- | --------------------------- |
| `npm run dev` | Start Express using Nodemon |

## 🔮 Future Improvements

Potential improvements include:

- Save favorite recipes using local storage or a database
- Search by multiple ingredients
- Filter meals by cuisine or category
- Add user authentication
- Improve mobile responsiveness
- Add recipe pagination
- Add automated API tests
- Deploy the frontend and backend to production
- Configure environment variables for production API URLs

## 🌐 External API

Recipe information is provided by [TheMealDB](https://www.themealdb.com/api.php), a public recipe API.

The backend uses TheMealDB endpoints for random recipes, ingredient filtering, name searching, and individual meal lookups.

## 👨‍💻 Developer

**Jeremiah Austin**

Full-Stack Software Developer

Passionate about building modern web applications, integrating APIs, and developing practical solutions using JavaScript, React, Node.js, and Express.

- **GitHub:** [@overkill489](https://github.com/overkill489)
- **Repository:** [Recipe Remix](https://github.com/overkill489/my_restaurant)

---

⭐ If you found this project interesting, consider starring the repository!
