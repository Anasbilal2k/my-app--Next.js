import { PluginAPI } from "tailwindcss/types/config";
import type { Config } from "tailwindcss";


function addVariableForColors({ addBase, theme }: PluginAPI) {
  const allColors = theme('colors', {}) || {};
  const newVars: Record<string, string> = {};

  Object.entries(allColors).forEach(([key, value]) => {
    if (typeof value === 'string') {
      newVars[`--${key}`] = value;
    } else if (typeof value === 'object' && value !== null) {
      Object.entries(value).forEach(([subKey, subValue]) => {
        if (typeof subValue === 'string') {
          newVars[`--${key}-${subKey}`] = subValue;
        }
      });
    }
  });

  addBase({
    ':root': newVars,
  });
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        spotlight: "spotlight 2s ease 0.75s forwards", // Ensure this is a string
        scroll: "scroll var(--animation-duration) var(--animation-direction) linear infinite", // Removed '40s' to ensure it's a variable
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        }, // Ensure this closing brace is correct
      },
    },
  },
  plugins: [addVariableForColors],
};

export default config;