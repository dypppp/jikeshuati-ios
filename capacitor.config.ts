import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jikeshuati.app',
  appName: '极客刷题',
  webDir: 'www',
  icon: 'icon.png',
  server: {
    androidScheme: 'https'
  },
  android: {
    allowMixedContent: true
  }
};

export default config;