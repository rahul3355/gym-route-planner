# Gym Route Planner
Gym members often struggle to keep track of their workout routines, leading to inconsistent workout sessions and difficulty in monitoring progress. A centralized workout log can help users organize their exercises, track their performance, and stay motivated.

Live: https://gym-route-planner.netlify.app/

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

# More about Data

```
{
    "equipment": [
      { "id": "1", "name": "Treadmill", "type": "Cardio", "row": 0, "col": 0 },
      { "id": "2", "name": "Bench Press", "type": "Chest", "row": 0, "col": 1 },
      { "id": "3", "name": "Incline Bench Press", "type": "Chest", "row": 0, "col": 2 },
      { "id": "4", "name": "Chest Fly Machine", "type": "Chest", "row": 1, "col": 1 },
      { "id": "5", "name": "Dumbbell Shoulder Press", "type": "Shoulders", "row": 1, "col": 2 },
      { "id": "6", "name": "Lateral Raise Machine", "type": "Shoulders", "row": 2, "col": 2 },
      { "id": "7", "name": "Lat Pulldown", "type": "Back", "row": 3, "col": 2 },
      { "id": "8", "name": "Seated Row Machine", "type": "Back", "row": 4, "col": 2 },
      { "id": "9", "name": "Leg Press", "type": "Legs", "row": 5, "col": 2 },
      { "id": "10", "name": "Leg Curl Machine", "type": "Legs", "row": 5, "col": 1 },
      { "id": "11", "name": "Leg Extension Machine", "type": "Legs", "row": 5, "col": 0 },
      { "id": "12", "name": "Calf Raise Machine", "type": "Legs", "row": 4, "col": 0 },
      { "id": "13", "name": "Bicep Curl Machine", "type": "Biceps", "row": 3, "col": 0 },
      { "id": "14", "name": "Tricep Extension Machine", "type": "Triceps", "row": 2, "col": 0 },
      { "id": "15", "name": "Cable Crossover", "type": ["Chest", "Triceps"], "row": 1, "col": 0 },
      { "id": "16", "name": "Stationary Bike", "type": "Cardio", "row": 4, "col": 1 },
      { "id": "17", "name": "Dumbbell Bench Press", "type": "Chest", "row": 0, "col": 3 },
      { "id": "18", "name": "Smith Machine Squat", "type": "Legs", "row": 5, "col": 3 },
      { "id": "19", "name": "Pull-Up Bar", "type": "Back", "row": 3, "col": 3 },
      { "id": "20", "name": "Preacher Curl Bench", "type": "Biceps", "row": 3, "col": 1 },
      { "id": "21", "name": "Dips Station", "type": "Triceps", "row": 2, "col": 1 },
      { "id": "22", "name": "Rowing Machine", "type": "Cardio", "row": 4, "col": 3 },
      { "id": "23", "name": "Incline Dumbbell Curl", "type": "Biceps", "row": 3, "col": 4 },
      { "id": "24", "name": "Tricep Dip Machine", "type": "Triceps", "row": 2, "col": 4 },
      { "id": "25", "name": "Hammer Strength Chest Press", "type": "Chest", "row": 1, "col": 3 },
      { "id": "26", "name": "Hammer Strength Shoulder Press", "type": "Shoulders", "row": 1, "col": 4 },
      { "id": "27", "name": "Smith Machine Bench Press", "type": "Chest", "row": 0, "col": 4 },
      { "id": "28", "name": "Pec Deck Machine", "type": "Chest", "row": 1, "col": 5 },
      { "id": "29", "name": "T-Bar Row", "type": "Back", "row": 4, "col": 4 },
      { "id": "30", "name": "Hyperextension Bench", "type": "Back", "row": 5, "col": 4 },
      { "id": "31", "name": "Leg Abductor Machine", "type": "Legs", "row": 5, "col": 5 },
      { "id": "32", "name": "Leg Adductor Machine", "type": "Legs", "row": 4, "col": 5 },
      { "id": "33", "name": "Battle Ropes", "type": "Cardio", "row": 3, "col": 5 },
      { "id": "34", "name": "Elliptical", "type": "Cardio", "row": 2, "col": 5 },
      { "id": "35", "name": "Rope Climb", "type": "Back", "row": 1, "col": 2 },
      { "id": "36", "name": "Standing Calf Raise Machine", "type": "Legs", "row": 4, "col": 3 }
    ],
    "workouts": {
      "Chest Day": ["2", "3", "4", "17", "25", "27", "28"],
      "Back Day": ["7", "8", "19", "29", "30", "35"],
      "Push Day": ["2", "3", "5", "6", "14", "15", "21", "25", "26", "27", "28"],
      "Pull Day": ["7", "8", "13", "14", "19", "20", "23", "29", "35"],
      "Leg Day": ["9", "10", "11", "12", "18", "31", "32", "36"],
      "Arm Day": ["13", "14", "15", "20", "21", "23", "24"],
      "Cardio": ["1", "16", "22", "33", "34"],
      "Full Body": ["2", "7", "13", "14", "5", "9", "18", "34"]
    }
  }
  ```

If any questions/help: rahulpatil33553@gmail.com , reach out :)
