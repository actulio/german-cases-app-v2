# German Cases App

## Motivation

I'm relearning German and wanted to refresh what I [previously learned](https://github.com/actulio/german-cases-app/) using React Native. To do so, I decided to build a second version of my old app—this time with the latest technologies and more complex code.

The app features a file-based routing system, animations powered by [React Native Reanimated v3](https://docs.swmansion.com/react-native-reanimated/), stack and bottom tab navigators, [Zustand](https://zustand-demo.pmnd.rs/) for state management, [Appwrite](https://appwrite.io/) and Google OAuth for authentication, [Tailwind CSS](https://tailwindcss.com/) with [NativeWind](https://www.nativewind.dev/) for styling, and much more.

## Screenshots and how to play

The user selects an answer from six available options, while questions are displayed randomly on the main card. A progress bar at the top tracks the current correct streak. On the Profile page, users can switch between light and dark themes and reset their progress.

![Login Screen](demo/login.png)
![Usage](demo/usage.gif)

## Installation

First, you need to have installed [Expo](https://expo.io/) and a package manager such as Yarn or NPM. After downloading the project, install the dependencies with:

`yarn install` or `npm install`

Run the code with:

`yarn start` or `npm start`

Finally you can scan the Qrcode provided by the expo-cli or have an emulator up and running.
