# Interactive English Grammar Quiz

## Quick Navigation
- [Project Overview](#project-overview)
- [User Goals](#user-goals)
- [Target Audience](#target-audience)
- [Site Owner Goals](#site-owner-goals)
- [Features](#features-assessment-breakdown)
- [Technologies Used](#technologies-used)
- [Accessibility Considerations](#accessibility-considerations)
- [Testing](#testing)
- [Challenges Faced & Solutions](#challenges-faced--solutions)
- [Deployment](#deployment)
- [UX & Design Reflection](#ux--design-reflection)
- [Why This Project Works](#why-this-project-works-assessment-summary)
- [Credits](#credits)
...


## Project Overview
The Interactive English Grammar Quiz is a browser-based quiz application designed for intermediate-level English learners. Users answer multiple-choice grammar questions, receive immediate feedback, and track their score throughout the quiz.

This project focuses on **JavaScript interactivity, DOM manipulation, and user experience**, aligning with the requirements of **Milestone Project 2 (MS2)**.

---

## User Goals
- Answer intermediate-level English grammar questions  
- Receive immediate feedback on selected answers  
- Track progress and score throughout the quiz  
- View a final result summary upon completion  

---

## Target Audience
- Adult learners of English  
- Intermediate-level English speakers  
- Users looking to refresh or test grammar knowledge  
- Students seeking a simple, interactive learning tool  

---

## Site Owner Goals
- Deliver an engaging and educational quiz experience  
- Demonstrate effective use of JavaScript logic and DOM manipulation  
- Provide a clear, accessible, and responsive user interface  
- Fulfil the **MS2 assessment criteria**  

---

## Features (Assessment Breakdown)

### Must Have
- Start quiz functionality  
- Multiple-choice grammar questions  
- One answer selection per question  
- Immediate visual feedback for correct and incorrect answers  
- Score tracking throughout the quiz  
- Final results screen displaying total score  
- Restart quiz functionality  

### Should Have
- Grammar explanations displayed after each answer  
- Clear question progression (e.g. question order awareness)  
- Disabled answer buttons after selection to prevent multiple inputs  
- Responsive layout for different screen sizes  

### Could Have
- Difficulty level selection  
- Question randomisation  
- Timed questions  
- Expanded question bank  

---

## Technologies Used
- **HTML5** – semantic structure and content  
- **CSS3** – styling, layout, and responsive design  
- **JavaScript (Vanilla JS)** – quiz logic, state management, and interactivity  
- **Git & GitHub** – version control  
- **GitHub Pages** – deployment  

---

## Accessibility Considerations
- Adequate colour contrast for readability  
- Clear visual indicators for correct and incorrect answers  
- Large, clickable buttons suitable for touch devices  
- Semantic HTML to support screen readers  
- Logical focus order and keyboard accessibility where applicable  

---

## Testing
Testing was carried out continuously throughout development to ensure functionality and usability.

This included:
- Verifying correct answer selection and score updates  
- Ensuring only one answer can be selected per question  
- Confirming feedback messages and explanations display correctly  
- Testing quiz flow from start to completion  
- Checking responsiveness across different screen sizes  

Any issues identified were resolved and retested.

---
## Challenges Faced & Solutions

### Managing Quiz Flow and State
One of the main challenges was managing the quiz flow, particularly ensuring that users could select only one answer per question and move smoothly to the next question. Initially, users were able to interact with multiple answers, which caused inconsistent behaviour. This was resolved by disabling the answer buttons after a selection and controlling screen visibility using JavaScript logic.

### Answer Randomisation
Randomising answer options initially caused issues with checking the correct answer, as relying on fixed indexes was no longer reliable. This was solved by comparing the selected button text with the correct answer string, ensuring accurate validation regardless of the answer order.

### Feedback Display Issues
At an early stage, feedback messages were not displaying correctly and sometimes returned undefined values. This was resolved by ensuring that every question included an explanation property and by maintaining consistent data structure across all questions.

### Styling and Responsiveness
Ensuring the quiz remained clean, readable, and usable on smaller screens required adjustments to spacing, font sizes, and button layout. Media queries and flexible container widths were used to improve responsiveness and provide a consistent experience across devices.

## Deployment
The project is deployed using **GitHub Pages**.


### Deployment Steps
1. Push the project to a GitHub repository  
2. Navigate to **Settings → Pages**  
3. Select the main branch as the source  
4. Save to generate the live deployment link  

---

## UX & Design Reflection
The user interface is designed to be clean, minimal, and intuitive, with a strong focus on usability rather than visual complexity. Clear typography, consistent spacing, and large buttons were chosen to ensure ease of use across different devices.

Immediate feedback and short grammar explanations were included to help users understand *why* an answer is correct or incorrect, rather than simply showing the result. This supports learning and encourages users to reflect on their mistakes.

I chose a linear quiz flow to reduce cognitive load and keep users focused on one task at a time. A simple, high-contrast, letter-based favicon was also included to improve tab recognition and maintain visual consistency with my previous projects.

Overall, my design decisions prioritise clarity, readability, and ease of use, ensuring the quiz remains accessible and engaging without unnecessary distraction.

---

## Why This Project Works (Assessment Summary)
This project successfully meets the MS2 requirements by combining structured JavaScript logic with meaningful user interaction. The application manages state effectively, restricts user input appropriately, and provides immediate feedback to enhance learning. Clear UX decisions, accessibility considerations, and a responsive layout ensure the quiz is usable and engaging. Overall, the project demonstrates a solid understanding of front-end development fundamentals and practical JavaScript implementation.

---

## Credits
- Code Institute course materials  
- Mentor and facilitator guidance
