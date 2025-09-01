# movie-api-app

# Project: CineInfo - Movie Discovery Web App

A responsive web application that allows users to discover popular movies and search for specific titles. This project was built to demonstrate proficiency in consuming third-party REST APIs, handling asynchronous data, and building dynamic user interfaces with React.js.

## Core Features

-   **Discover Popular Movies:** On initial load, the app displays a list of the currently most popular movies.
-   **Search Functionality:** Users can search for movies by title.
-   **Dynamic UI:** The interface is built with React and updates seamlessly based on API data.
-   **External API Integration:** All movie data is fetched in real-time from [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api).

## Tech Stack

-   **Front-end:** `React.js`
-   **Styling:** `CSS`
-   **API:** `The Movie Database (TMDb) API`

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/seu-usuario/cineinfo-app.git](https://github.com/seu-usuario/cineinfo-app.git)
    cd cineinfo-app
    ```

2.  **Get an API Key:**
    This project requires an API key from The Movie Database. You can get a free one at [https://www.themoviedb.org/signup](https://www.themoviedb.org/signup).

3.  **Create an environment file:**
    Create a `.env` file in the root of the project and add your API key:
    ```
    REACT_APP_TMDB_API_KEY=YOUR_API_KEY_HERE
    ```

4.  **Install dependencies and run:**
    ```bash
    npm install
    npm start
    ```
The application will be available at `http://localhost:3000`.
