// @flow
const isDev = process.env.NODE_ENV === 'development';

export const GDevelopGamePreviews = {
  baseUrl: `https://game-previews.gdevelop-app.com/`,
};

export const GDevelopBuildApi = {
  baseUrl: isDev
    ? 'https://69p4m07edd.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://api.gdevelop-app.com/build',
};

export const GDevelopFirebaseConfig = {
  apiKey: 'AIzaSyAatNpogvEGg7E-n3dA6s2rMevkCtS5nj0',
  authDomain: 'kairogameengine.firebaseapp.com',
  databaseURL: 'https://kairogameengine-default-rtdb.firebaseio.com/',
  projectId: 'kairogameengine',
  storageBucket: 'kairogameengine.appspot.com',
  messagingSenderId: '616343261434',
};

export const GDevelopUsageApi = {
  baseUrl: isDev
    ? 'https://dwjjhr5k76.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://api.gdevelop-app.com/usage',
};

export const GDevelopReleaseApi = {
  baseUrl: isDev
    ? 'https://c8cldf4iqh.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://api.gdevelop-app.com/release',
};

export const GDevelopExtensionApi = {
  baseUrl: isDev
    ? 'https://raw.githubusercontent.com/4ian/GDevelop-extensions/master'
    : 'https://raw.githubusercontent.com/4ian/GDevelop-extensions/master',
};

export const GDevelopAssetApi = {
  baseUrl: isDev
    ? 'https://57l4cj31aj.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://api.gdevelop-app.com/asset',
};

export const GDevelopAnalyticsApi = {
  baseUrl: isDev
    ? 'https://fixpe96o0h.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://api.gdevelop-app.com/analytics',
};

export const GDevelopGameApi = {
  baseUrl: isDev
    ? 'https://we7eqjifc2.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://api.gdevelop-app.com/game',
};
