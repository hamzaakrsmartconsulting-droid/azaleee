module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          background1: "var(--global-bg-1)",
          background2: "var(--global-bg-2)",
          background3: "var(--global-bg-3)",
          background4: "var(--global-bg-4)",
          background5: "var(--global-bg-5)",
          background6: "var(--global-bg-6)",
          background7: "var(--global-bg-7)",
          background8: "var(--global-bg-8)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)",
          text3: "var(--global-text-3)",
          text4: "var(--global-text-4)",
          text5: "var(--global-text-5)",
          text6: "var(--global-text-6)",
          text7: "var(--global-text-7)"
        },
        header: {
          background1: "var(--header-bg-1)",
          text1: "var(--header-text-1)",
          text2: "var(--header-text-2)"
        },
        slider: {
          background1: "var(--slider-bg-1)"
        },
        footer: {
          background1: "var(--footer-bg-1)",
          background2: "var(--footer-bg-2)",
          text1: "var(--footer-text-1)"
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'cairo': ['Cairo', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        'segoe': ['Segoe UI', 'sans-serif'],
        'prompt': ['Prompt', 'sans-serif']
      }
    }
  },
  plugins: []
};