export const DOMAIN = 'bjxb-014.dx.commercecloud.salesforce.com'
export const STOREFRONT_URL =
  'https://bjxb-014.dx.commercecloud.salesforce.com/s/RefArch'
export const WEBCAMTESTS_URL = 'https://webcamtests.com/'
export const SEND_POST_MESSAGE = `
  const headerNav = document.querySelector('.pull-left')
  const button = document.createElement('button');
  button.innerHTML = 'Login'
  headerNav.appendChild(button);
  button.addEventListener('click', (e) => {
    window.ReactNativeWebView.postMessage('navigation:Account');
  });
`
export const STOREFRONT_ORDER_HISTORY =
  'https://bjxb-014.dx.commercecloud.salesforce.com/s/RefArch/orders?lang=en_US'
export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyB9NkLEoYx_Qbh4se67EfcDmuM9XR_y4rM',
  authDomain: 'rnapp-51489.firebaseapp.com',
  projectId: 'rnapp-51489',
  storageBucket: 'rnapp-51489.appspot.com',
  messagingSenderId: '354012701700',
  appId: '1:354012701700:android:353cd627fcf64c93b4c151',
  databaseURL: 'https://rnapp-51489.firebaseio.com'
}
