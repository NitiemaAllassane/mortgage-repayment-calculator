# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Mortgage repayment calculator solution](#frontend-mentor---mortgage-repayment-calculator-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
    - [What worked well:](#what-worked-well)
    - [What didn’t:](#what-didnt)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete or invalid
- Select a mortgage type (repayment or interest-only)
- Complete the form using keyboard navigation
- View responsive layouts depending on screen size
- See hover and focus states for interactive elements


## Screenshot

![](./public/screenshots/FireShot%20Capture%20041%20-%20Mortgage%20Repayment%20Calculator_%20-%20[mortgage-repayment-calculator-nu-two.vercel.app].png)
![](./public/screenshots/FireShot%20Capture%20042%20-%20Mortgage%20Repayment%20Calculator_%20-%20[mortgage-repayment-calculator-nu-two.vercel.app].png)
![](./public/screenshots/FireShot%20Capture%20043%20-%20Mortgage%20Repayment%20Calculator_%20-%20[mortgage-repayment-calculator-nu-two.vercel.app].png)
![](./public/screenshots/FireShot%20Capture%20044%20-%20Mortgage%20Repayment%20Calculator_%20-%20[mortgage-repayment-calculator-nu-two.vercel.app].png)
![](./public/screenshots/FireShot%20Capture%20045%20-%20Mortgage%20Repayment%20Calculator_%20-%20[mortgage-repayment-calculator-nu-two.vercel.app].png)
![](./public/screenshots/FireShot%20Capture%20046%20-%20Mortgage%20Repayment%20Calculator_%20-%20[mortgage-repayment-calculator-nu-two.vercel.app].png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [[Add live site URL here](https://mortgage-repayment-calculator-nu-two.vercel.app/)](https://mortgage-repayment-calculator-nu-two.vercel.app/)

## My process

### Built with

- Semantic HTML5
- Tailwind CSS
- Flexbox & CSS Grid
- Mobile-first workflow
- React
- TypeScript
- clsx (for conditional styling)

---

### What I learned

This project helped me better understand how to structure a React application with controlled form inputs and validation logic.

One key takeaway was separating **data (numbers)** from **presentation (formatted strings)** when displaying currency values.

```ts
function formatCurrency(value: number) {
  return value.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP"
  });
}

const [error, setError] = useState({
  amount: "",
  term: "",
  interest: "",
  mortgageType: ""
});

```

Another important concept was managing controlled inputs and keeping the UI in sync with state.

---

## Continued development

In future projects, I want to:

- Improve input formatting (e.g. formatted numbers with preserved cursor position)
- Refactor validation logic into reusable hooks (e.g. `useForm`)
- Handle more mortgage types (like interest-only calculations)
- Improve accessibility (ARIA, screen readers)
- Add unit tests for calculation logic

---

## Useful resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString  
  Helped me understand currency formatting

- https://react.dev/learn  
   Great reference for controlled components and state management

---

## AI Collaboration

I used ChatGPT as a learning assistant during this project.

- Helped me understand mortgage calculation formulas
- Assisted with debugging React state and controlled inputs
- Guided me on best practices (state vs display formatting)
- Helped improve component naming and structure

### What worked well:

- Breaking down complex concepts step-by-step
- Getting explanations instead of full solutions

### What didn’t:

- Some solutions required adjustments to fit my architecture

---

## Author

- Frontend Mentor - [@NitiemaAllassane](https://www.frontendmentor.io/profile/NitiemaAllassane)
- Blog - [@NitiemaAllassane](https://nitiema-allassane.vercel.app/)