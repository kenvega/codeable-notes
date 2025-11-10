/// <reference types="vitest/config" />
// above line is needed to avoid issue with typescript on 'test.globals'. source: https://stackoverflow.com/a/72149404
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // esta es la configuracion para que la funcion de cleanup de testing-library se ejecute automaticamente
  test: {
    globals: true,
  },
});
