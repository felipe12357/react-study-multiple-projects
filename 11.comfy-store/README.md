## tailwind installation withe vite

https://tailwindcss.com/docs/guides/vite

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

    update tailwind.config.js file: 

    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

    update index.css file or App.css with the following content:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

## DaisyUI installation.
    https://daisyui.com/docs/install/

    npm i -D daisyui@latest
    npm i -D @tailwindcss/typography

    Then add daisyUI to your tailwind.config.js files:

    {
    //...
    plugins: [require("daisyui"),require("@tailwindcss/typography")],
    }

    documentation:
    https://daisyui.com/components/button/

## OTher libraries 

    https://www.npmjs.com/package/react-router-dom
    npm i --save react-router-dom

    npm install --save react-icons
    documentation
    https://react-icons.github.io/react-icons/


    https://axios-http.com/docs/example
    npm install --save axios 