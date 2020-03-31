import firebase from 'firebase/app'

export default () => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyC3i75aJnM6k0j_2fsPB02LKZa6NgvryOQ',
      authDomain: 'virtual-walk-31373.firebaseapp.com',
      databaseURL: 'https://virtual-walk-31373.firebaseio.com',
      projectId: 'virtual-walk-31373',
      storageBucket: 'virtual-walk-31373.appspot.com',
      messagingSenderId: '159885744891',
      appId: '1:159885744891:web:46201a917b4e36d3622e5e'
    })
  }
}
