# Project Overview
EP Quest is an innovative student engagement and motivation app designed to enhance the learning experience for students across various educational levels. With gamification elements, progress tracking features, and interactive functionalities, EP Quest aims to motivate students, foster collaboration, and improve academic performance.

# Project Setup 
Clone the Repository:
- git clone https://github.com/LalaDotExe/AS2-ASG02-MWE.git ep-quest

Navigate to the Project Directory:
  - cd ep-quest
  - afterthat run this command: ionic serve

Access EP Quest:
- Open your web browser and navigate to the specified localhost URL or deployed server URL.

# Usage Instruction
Dashboard:
- users will be redirected to their dashboard, where they can view their ep point, club and events.

Progress Tracking:
- Users can track their ep point and clubs or event attendances, through the dashboard.

Gamification Elements:
- EP Quest incorporates gamification elements such as badge and leaderboards to incentivize engagement and motivate academic achievement.

Join Club or Event:
- Users can join a club or event by just clicking a button on the go from the activity pages.

Profile Checking:
- Users can check their information and profile via profile page.

Feedback Mechanism:
- EP Quest facilitates a feedback loop for the users.

# Contributing Guidelines

1. Fork the repository:
- https://github.com/LalaDotExe/AS2-ASG02-MWE.git

2. Commit Changes:
- Commit your changes with clear and descriptive commit messages `git commit -m "Add new feature"`

3. Push Changes:
- git push origin feature/new-feature

4. Code Review:
- Participate in code reviews and address any feedback or suggestions provided by the maintainers.
- Ensure your code adheres to the project's coding standards and conventions.

5. Contribution Types:
- We welcome contributions in various forms, including bug fixes, feature enhancements, documentation improvements, and more.

We appreciate your interest in contributing to EP Quest! Your contributions help make EP Quest a valuable tool for students worldwide.

# Deployment for android studio step:
1. Open your terminal
2. Navigate to the EPQUEST directory by running: `cd EPQUEST`
3. Add Android platform to your project with Capacitor by running: `ionic capacitor add android`
4. Open your code editor by running: `code .`
5. Inside the opened file, add a capacitor.config.json file with the following content: `{
    "appId": "com.myepquest",
    "appName": "Ep Quest",
    "bundledWebRuntime": false,
    "npmClient": "npm",
    "webDir": "www",
    "cordova": {}
}`
6. Copy your web assets to the Android project by running: `ionic capacitor copy android`
7. Add Android platform to your Capacitor project by running: `ionic cap add android`
8. Copy your web assets and update native projects by running: `ionic cap copy`
9. Sync your Capacitor project with the native Android project by running: `ionic cap sync`
10. Open Android Studio by running: `npx cap open android`
11. In Android Studio, click on the "Run" button to deploy and view your app on a connected device or emulator.

![Screenshot 2024-04-08 231913](https://github.com/LalaDotExe/AS2-ASG02-MWE/assets/157432322/f9d9496c-c840-4b02-81d5-4624161999e4)
