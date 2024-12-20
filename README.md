# Web Accessibility Workshop for Frontend Developers

## Overview

This workshop is designed to help frontend developers understand and experience web accessibility challenges firsthand. Instead of relying on screen readers, the workshop creates visual simulations of accessibility issues, making it easier for visual learners to understand the impact of poor accessibility practices.

## Learning Objectives

Through this workshop, you'll experience how users with disabilities might interact with inaccessible websites. The exercises simulate various accessibility issues:

- Content hidden from screen readers (`aria-hidden`)
- Language identification problems (scrambled text)
- Missing image descriptions (raw image URLs instead of meaningful descriptions)
- Unlabeled form fields (empty inputs without context)
- Inaccessible buttons (unclear button purposes)
- Keyboard navigation issues (invisible focus indicators)

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