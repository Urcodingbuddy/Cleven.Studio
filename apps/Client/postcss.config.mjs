const config = {
    plugins: {
      "@tailwindcss/postcss": {
        extends : {
          transition: {
            navBtn : "all 0.3s ease-in-out"
          }
        }
      },
    },
  };
  export default config;