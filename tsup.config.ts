
import { defineConfig } from 'tsup';
export default defineConfig({
    entry: ['main.ts'],
    splitting: false,
    sourcemap: true,
    clean: true,
})