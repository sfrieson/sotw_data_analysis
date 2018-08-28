var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var responseSchema = new Schema({
    // All of the question responses
    browser: String, // 1. Which is your primary browser for development (Select)

    // (Multi-choice)
    technologies: [String], // 2. Which of the following technologies have you made use of?
    appAge: String, // 3. How old are the apps you frequently work on?

    connectionSpeed: Number, // TODO Better type | 4. What is your typical Internet connection speed? (Select)

    // (Answers 1-10)
    webOutpacingNative: Number, // 5. Web innovation is outpacing native
    browserTooling: Number, // 6. I am satisfied with the state of browser tooling for web dev
    webBecomingEasier: Number, // 7. Building for the web is becoming easier over time
    safeWhileBrowser: Number, // 8. I feel safe while browsing the web
    satisfiedWithBrowserStandardsAdoption: Number, // 9. I am satisfied with browser standards adoption
    webImprovingForUsers: Number, // 10. The web is improving for end-users
    communicationWithBusiness: Number, // 11. I am satisfied with the communication between the software side and the business side of my organization
    communicationWithEngineering: Number, // 12. I am satisfied with the communication between the design side and the engineering side of my organization
    satisfiedWithAnalytics: Number, // 13. I am satisfied with the state of analytics tooling for the web
    satisfiedWithAB: Number, // 14. I am satisfied with the state of a/b test tooling for the web
    satisifiedWithUI: Number, // 15. I am satisfied with the current user interface design trends for the web
    gdpr: Number, // 16. I am familiar with the laws associated with GDPR
    desktopIsSlow: Number, // 17. The desktop web is typically slow and sluggish
    a11yImportance: Number, // 18. Accessibility is an important concern in my web development
    mobileIsSlow: Number, // 19. The mobile web is typically slow and sluggish
    dislikeAds, // 20. I dislike ads on the web
    optimisticPWA: Number, // 21. I am optimistic about the future of progressive web apps
    AIImpactsWeb: Number, // 22. Artificial intelligence advancements are having a big impact on the web
    satisifiedWithLibraryChoice: Number, // 23. I am satisfied with the development libraries my team and I use

    // Multi-choice
    roles: [String], // 24. Which software development roles do you assume on a regular basis?
    frameworks: [String], // 25. Which of these front-end JavaScript frameworks do you work currently work with?
    CSSProperties: [String], // 26. When working with CSS, which of the following do you make use of?

    ABTestingStyle: String, // 27. How does your team/project do a/b testing in your projects? (Select)
    devOS: [String], // 28. Which desktop operating system do you use for development? (Select)
    // Yes/No
    IE10: Boolean, // 29. Does your team/project support IE 10 and under?
    disableDisableJavaScript: Boolean, // 30. Should browsers still allow users to disable JavaScript?
    customFonts: Boolean, // 31. Do the apps/sites you work on typically import custom fonts?
    mockups: Boolean, // 32. Does your team create design mockups before coding?
    packageManager: Boolean, // 33. Does your team use a package manager such as npm, yarn, bower, etc.?
    webP: Boolean, // 34. Do your projects currently serve WebP-formatted images to supporting browsers?
    frontEndUnit: Boolean, // 35. Does your team write code tests for front-end code?
    backEndUnit: Boolean, // 36. Does your team write code tests for back-end code?
    TDD: Boolean, // 37. Do you typically practice test-driven-development?

    age: Number, // TODO better type | 38. What is your age? (Range)
    experience: Number, // 39. How long have you been working in software (in years)
    mobileOS: String, // 40. Which mobile device ecosystem you use for personal use?
    gender: String, // 41. What is your gender identity?
    education: [String], // 42. Which of the following educational programs have you made use of?
    animal: [String] // 43. Are you a...
});

module.exports = mongoose.model('Response', responseSchema);