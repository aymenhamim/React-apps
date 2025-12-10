import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      backgroundImage: {
        "auth-dark": 'url("/images/auth-dark.png")',
        "auth-light": 'url("/images/auth-light.png")',
      },
    },
  },
};
