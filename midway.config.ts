import vue from '@vitejs/plugin-vue';
import { defineConfig } from '@midwayjs/hooks-kit';

export default defineConfig({
  vite: {
    resolve: {
      alias:{
        MIDWAY_HOOKS_VIRTUAL_FILE: "@midwayjs/rpc"
      }
    },
    plugins: [vue()],
  },
});
