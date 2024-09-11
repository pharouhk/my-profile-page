import { Fade } from 'react-awesome-reveal';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          'from': {  opacity: '0', 
            transform: 'translate3d(0,250px,0)' },
          'to': { opacity: '1',
            transform: 'translate3d(0,0,0)'
           }
        },
        fadeLeft: {
          'from': {  opacity: '0', 
            transform: 'translatex(-50px)' },
          'to': { opacity: '1',
            transform: 'translatex(0)'
           }
        },
        fadeRight: {
          'from': {  opacity: '0', 
            transform: 'translatex(+750px)' },
          'to': { opacity: '1',
            transform: 'translatex(0)'
           }
        },
        blur: {
          'from': {  opacity: '0', 
            transform: 'translatex(-100px)',
            filter: 'blur(2px)',
          },
            
          'to': { opacity: '1',
            transform: 'translatex(0)',
            filter: 'blur(0)',
           }
        },
      },
      animation: {
        fadeUp:'fadeUp ease 2s',
        fadeLeft: 'fadeLeft ease 2s',
        fadeRight: 'fadeRight ease 2s',
        blurChild1: 'blur ease 1s 200ms',
        blurChild2: 'blur ease 1s 400ms',
        blurChild3: 'blur ease 1s 600ms'
      },
    },
  },
  plugins: [],
}

