import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "50%": {
            width: "100%"
          },
          "51%": {
            width: "fit-content",
          },
          "100%": {
            width: "fit-content"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
          }
        }
      },
      animation: {
        typing: "typing 3s steps(200) alternate",
        "typing-infinite": "typing 3s steps(200) infinite alternate",
        "typing-blink": "typing 3s steps(200) alternate, blink .7s infinite",
        "typing-tb-infinite": "typing 3s steps(200) infinite alternate, blink .7s infinite"
      }
    },
  },
  plugins: [],
}
export default config
