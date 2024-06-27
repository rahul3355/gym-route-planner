# Gym Route Planner
Gym members often struggle to keep track of their workout routines, leading to inconsistent workout sessions and difficulty in monitoring progress. A centralized workout log can help users organize their exercises, track their performance, and stay motivated.

# Tech Stack:

React, Firebase Firestore, JSON, Graph

# Features:

Workout Logging:

Users can input their workout details, including the date and type of workout.
The app logs the workouts in a table format, showing date, workout type, and options to edit or delete each entry.

Workout Calendar:
A custom calendar component highlights days with logged workouts.
Users can navigate between months to view their workout history.
The calendar displays logged workouts with a pixelated, retro game-themed design for a unique visual experience.

UI:
Date selection through a calendar UI for logging workouts.
Dropdown menu to select workout types from predefined categories.
Animated display of workout routes, highlighting equipment used in the gym grid one by one.

Firebase Integration:
Firebase Firestore stores workout logs, ensuring data persistence.
Real-time data fetching to display the latest workout entries.
Secure data management with Firebase authentication (optional for future implementation).

# Steps to Implement:

Setup Firebase:
Create a Firebase project and enable Firestore.
Configure Firestore rules for secure data access.

Frontend Development:
Create React components for workout logging, calendar view, and gym grid.
Style components using CSS for a pixelated, retro game theme.
Implement form handling for adding, editing, and deleting workout logs.

Firebase Integration:
Initialize Firebase in the React project.
Use Firestore to fetch and store workout logs.
Add console logs for debugging to ensure data is correctly handled.

Deployment:
Deployed using Netlify.

By implementing this project, gym members can efficiently log their workouts, visualize their progress over time, and optimize their exercise routines, leading to more productive and enjoyable gym sessions.
