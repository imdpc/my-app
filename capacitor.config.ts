import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'my.app',
  appName: 'my-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
