# Web Accessibility Workshop for Frontend Developers

## Learning objectives

This workshop is designed to help frontend developers understand and experience web accessibility challenges firsthand. Instead of relying on screen readers, the workshop creates visual simulations of accessibility issues, making it easier for visual learners to understand the impact of poor accessibility practices.

## What to do?

1. Clone the repo, install the dependencies, and run `npm run dev`
2. Run Google Lighthouse at the start and after every fix and bring the Lighthouse score to 100%
3. Tackle accessibility issues ONE BY ONE and learn more about each from the supplied link
4. Note that every time you correct an issue and save changes, the impact is visually presented on screen
5. Inspect the Accessibility tree in the developer tools
6. Inspect the Accessibility tab for specific element - look at the information (role, name, other)

## How?

### Semantic HTML & Keyboard

Automatic tests

1. aria-hidden
2. lang attribute
3. alt attribute
4. label for input
5. video error
6. positive tabindex

Lighthouse score is 100%!
But we are not done yet... More checks to do both on dynamic content and keyboard interactions

Click "Present a11y issues" button
7. button label in the modal
8. blockquote
9. tabindex="0" on a non interactive element
10. focus indicator
11. focus management (document.activeElement)

## Learning Objectives

Through this workshop, you'll experience how users with disabilities might interact with inaccessible websites. The exercises simulate various accessibility issues:

1. Hidden Content
2. Language Settings
3. Image Accessibility
4. Form Accessibility
5. Button Accessibility
6. Status Updates

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd a11y-for-feds-new
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
a11y-for-feds-new
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── Rive_File_Integration_Instructions.csv
│   ├── a11y.html
│   ├── assets
│   │   ├── 3172307-hd_1920_1080_30fps.mp4
│   │   ├── a11y-favicon.ico
│   │   ├── aria.jpeg
│   │   ├── bear.riv
│   │   ├── blueberry-chihuahua copy.jpeg
│   │   └── wix.svg
│   ├── index.html
│   ├── js
│   │   ├── main.js
│   │   ├── modal.js
│   │   ├── navigation.js
│   │   └── theme.js
│   └── styles
│       ├── colors.css
│       ├── reset.css
│       └── style.css
├── scripts
├── src
│   ├── constants
│   │   └── errorMessages.js
│   ├── core
│   │   ├── accessibilityTester.js
│   │   └── issueManager.js
│   ├── tests
│   │   ├── accessibility
│   │   │   ├── altTextTest.js
│   │   │   ├── ariaHiddenTest.js
│   │   │   ├── buttonLabelTest.js
│   │   │   ├── labelTest.js
│   │   │   ├── langTest.js
│   │   │   └── motionTest.js
│   │   └── index.js
│   └── utils
│       ├── domUtils.js
│       └── testUtils.js
└── vite.config.js
```

## Workshop Tasks

### 1. Semantic HTML Issues

Each task in this section demonstrates common semantic HTML accessibility problems:

1. **Hidden Content**: Fix improper use of `aria-hidden` on the `<body>`
2. **Language Settings**: Implement correct language attributes
3. **Image Accessibility**: Add proper `alt` attributes to images
4. **Form Accessibility**: Connect labels with form inputs
5. **Button Accessibility**: Add accessible names to icon buttons
6. **Status Updates**: Implement proper status notifications for form submissions

### 2. Keyboard Navigation

These tasks focus on making the application keyboard-accessible:

1. **Focus Visibility**: Implement visible focus indicators
2. **Focus Management**: Create proper focus order and management

## Development

The project uses Vite as the build tool. Available commands:

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Contributing

Feel free to submit issues and enhancement requests. Follow these steps:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

[Add License Information]
