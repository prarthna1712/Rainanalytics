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
project-root/ ├── client/ # React frontend │ ├── src/ │ │ ├── components/ # React components (e.g., form, result display) │ │ ├── App.js # Main app file │ │ └── index.js # Entry point ├── server/ # Flask backend │ ├── app.py # Main backend script │ ├── model/ # Directory for data models and scripts │ └── templates/ # HTML templates (if applicable) ├── README.md # Project documentation └── ...
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
