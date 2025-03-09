npm install --global surge
npm run build
nvm install 18
nvm use 18
surge ./dist your-custom-name.surge.sh
surge teardown to remove


npm install gh-pages --save-dev

add this package.json

{
  "name": "quiz-website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "homepage": "https://Coding2023a.github.io/quiz-page",
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "vite build",
  "deploy": "gh-pages -d dist"
},
