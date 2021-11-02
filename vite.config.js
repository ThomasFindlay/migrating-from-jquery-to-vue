const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "vue.html"),
        jquery: resolve(__dirname, "jquery.html"),
      },
    },
  },
});
