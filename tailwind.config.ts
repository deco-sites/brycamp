import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
        zoomIn: "zoomIn 100ms linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        zoomIn: {
          "0%": { transform: "scale(1, 1)" },
          "100%": { transform: "scale(.8, .8)" },
        },
      },
    },
  },
};
