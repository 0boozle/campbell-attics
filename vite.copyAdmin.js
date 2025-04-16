// vite.copyAdmin.js
import { copyFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

export default function copyAdminFolder() {
  return {
    name: 'copy-admin',
    closeBundle: () => {
      const from = resolve('public/admin/index.html');
      const toDir = resolve('dist/admin');
      const toFile = resolve('dist/admin/index.html');

      mkdirSync(toDir, { recursive: true });
      copyFileSync(from, toFile);
    }
  };
}
