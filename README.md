# WeatherApp

WeatherApp is a cross-platform application built with React Native and Redux for state management. It allows users to search for weather information of various cities and stores the search history using localStorage. The app is designed to work seamlessly on both web and mobile platforms.

## Features

- **Search Weather Information**: Search for current and forecast weather data by city.
- **View Weather Data**: Display current and forecast weather information.
- **Search History**: Store and display previously searched cities using localStorage.
- **Quick Access**: Display buttons for previously searched cities below the input field on initial load for quick access.

## Technologies Used

- **React Native**: Used for building the mobile version of the application.
- **React Native Web**: Extends the same codebase to run seamlessly in web browsers using a custom Webpack configuration.
- **TypeScript**: Ensures type safety across the application, enhancing maintainability and developer productivity.
-  **Redux**: Manages the application's state in a predictable manner across different environments.
-  **Axios**: Handles HTTP requests to the OpenWeatherMap API, ensuring efficient data retrieval.
- **Expo** for running the app on mobile devices

## Getting Started

### Prerequisites

- **Node.js** installed on your machine
- **Expo Go** app installed on your mobile device (available on [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) and [App Store](https://apps.apple.com/us/app/expo-go/id982107779))

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/WeatherApp.git
    cd WeatherApp
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Running the App

#### For Web:
```bash
npx webpack serve
```
#### For Mobile:
```bash
npm start
```
You will see a QR code displayed in the terminal. Open the Expo Go app on your mobile device and scan the QR code to load the app.

## Usage

1.  Open the application on your desired platform (web or mobile).
2.  Use the input field to search for a city's weather information.
3.  Below the input field, buttons representing previously searched cities will appear.
4.  Click on any of these buttons to quickly fetch the weather information for that city.
