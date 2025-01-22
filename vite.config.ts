import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: (format) => `index.${format}.js`,
      formats: ['cjs', 'es'],
    },
  },
  plugins: [ dts({ include: 'src/**/*', insertTypesEntry: true, rollupTypes: true }), tsconfigPaths()],
});
