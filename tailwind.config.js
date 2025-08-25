module.exports = {
    theme: {
      extend: {
        keyframes: {
          marquee: {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" }, // move half the width
          },
          "marquee-reverse": {
            "0%": { transform: "translateX(-50%)" },
            "100%": { transform: "translateX(0)" },
          },
        },
        animation: {
          marquee: "marquee 30s linear infinite",
          "marquee-reverse": "marquee-reverse 30s linear infinite",
        },
      },
    },
  };
  