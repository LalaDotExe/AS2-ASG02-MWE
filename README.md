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
1. First go to terminal and run cd EPQUEST
2. Afterthat run ng build
3. run ionic capacitor add android
4. run code .
5. inside the file add capacitor.config.json
6. inside the newly created file: {
    "appId": "com.myepquest",
    "appName": "Ep Quest",
    "bundledWebRuntime": false,
    "npmClient": "npm",
    "webDir": "www",
    "cordova": {}
}
7. run ionic capacitor copy android
8. run ionic cap add android
9. run ionic cap copy then ionic cap sync
10. run npx cap open android
11. This will open android studio
12. Click on the run to view the app on phone


