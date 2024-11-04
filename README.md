# Rainfall Prediction Application

This project is a rainfall prediction web application built with a modern tech stack, integrating React for the frontend and Flask for the backend. The app allows users to input environmental parameters like temperature, humidity, and wind speed to predict the likelihood of rainfall.

## Key Technologies

- **Frontend**: React, CSS (for styling)
- **Backend**: Flask (Python-based web framework)
- **Libraries**: Axios for HTTP requests, Pandas and Scikit-learn for data processing and model development

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Getting Started

To set up this rainfall prediction application, follow the steps below for the frontend and backend configuration.

## Project Structure

```
## Project Structure

project-root/
├── client/                    # React frontend
│   ├── public/                # Static assets
│   ├── src/                   # Source files
│   │   ├── components/        # React components (e.g., form, result display)
│   │   ├── App.js             # Main app file
│   │   ├── index.js           # Entry point
│   │   └── ...                # Other frontend files
│   └── package.json           # Frontend dependencies
│
├── server/                    # Flask backend
│   ├── model/                 # Data models and scripts
│   ├── app.py                 # Main backend script
│   ├── requirements.txt       # Python dependencies
│   └── templates/             # HTML templates (if applicable)
│
├── .gitignore                 # Git ignore file
├── README.md                  # Project documentation
└── ...
```

## Prerequisites

Ensure the following tools are installed on your system:

- **Node.js** (v14 or later) and npm
- **Python** (v3.7 or later) with pip
- **Git**: For cloning the repository

## Installation

### 1. Clone the Repository

Clone the project repository and navigate into it:

```bash
git clone https://github.com/prarthna1712/RainfallPrediction.git
cd RainfallPrediction

```

### 2. Install Frontend Dependencies

Navigate to the client directory and install the required React dependencies:

```bash
cd client
npm install

```

### 3. Install Backend Dependencies

Navigate to the server directory and install Python dependencies:

```bash
cd ../server
pip install -r requirements.txt
```

## Environment Setup

Create a .env file in the server directory to store environment variables for the Flask application, such as:

```makefile
FLASK_APP=app.py
FLASK_ENV=development
```

## Running the Application

### 1. Start the Backend

Navigate to the server directory and run:

```bash
flask run
```

The backend will be available at http://localhost:5000.

### 2. Start the Frontend

Navigate to the client directory and run:

```bash
npm start
```

The frontend will be available at http://localhost:3000.

## API Endpoints

### Prediction API

- POST /predict: Receives JSON input (temperature, humidity, wind speed) and returns the prediction result.

### Example API Usage

Example POST request to the prediction endpoint:

```javascript
axios
  .post("/predict", {
    temperature: 25,
    humidity: 80,
    windSpeed: 10,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Features

-User Input Form: Users can input temperature, humidity, and wind speed for prediction.
-Real-time Results: Displays whether rainfall is likely or not based on the model's output.
-Backend Integration: Communicates with the Flask API for predictions.
-Responsive Design: User-friendly interface for desktop and mobile use.

## Screenshots

Here are some screenshots showcasing different parts of the application:
