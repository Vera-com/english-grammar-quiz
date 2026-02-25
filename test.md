# Testing

Testing was carried out manually throughout development to ensure functionality, usability, and responsiveness across different devices and screen sizes.

---

## Manual Testing

### Quiz Functionality

| Feature | Expected Outcome | Result |
|------|------------------|--------|
| Start Quiz button | Quiz begins and first question is displayed | Pass |
| Answer selection | Only one answer can be selected per question | Pass |
| Correct answer feedback | Correct answer is highlighted and explanation is shown | Pass |
| Incorrect answer feedback | Incorrect answer is highlighted and explanation is shown | Pass |
| Next Question button | Advances to the next question | Pass |
| Score tracking | Score updates correctly throughout the quiz | Pass |
| Final results screen | Displays final score after last question | Pass |
| Restart Quiz button | Quiz restarts from the beginning | Pass |

---

### User Interface & UX

| Feature | Expected Outcome | Result |
|------|------------------|--------|
| Button states | Buttons disable after selection | Pass |
| Feedback visibility | Feedback text is clearly readable | Pass |
| Progress indicator | Current question number updates correctly | Pass |
| Colour feedback | Green for correct, orange/red for incorrect | Pass |

---

### Responsiveness

| Device / Screen Size | Expected Outcome | Result |
|---------------------|------------------|--------|
| Desktop | Layout remains centred and readable | Pass |
| Tablet | Buttons resize appropriately | Pass |
| Mobile | Content fits screen without horizontal scrolling | Pass |

---

## Browser Testing

| Browser | Result |
|-------|--------|
| Chrome | Pass |
| Firefox | Pass |
| Safari | Pass |

---

## Bugs & Fixes

### Issue: Multiple answers could be selected
- **Cause:** Answer buttons remained active after selection
- **Fix:** Disabled all answer buttons once an answer is selected
- **Status:** Resolved

---

### Issue: Feedback text returned undefined
- **Cause:** Missing explanation property in some question objects
- **Fix:** Added explanation field to all quiz questions
- **Status:** Resolved

---

### Issue: Layout issues on smaller screens
- **Cause:** Fixed container widths and button sizing
- **Fix:** Added media queries and flexible widths
- **Status:** Resolved

---

## Validation

- HTML validated using W3C Validator
- CSS validated using W3C CSS Validator
- JavaScript tested manually through browser developer tools

