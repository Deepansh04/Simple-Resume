import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 

import {legacy_createStore as createStore , applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducers/rootReducer';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import thunk from 'redux-thunk';
import { reduxFirestore,getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider,getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAwpOlN1qnho5HbRLt4PoHqOiej7jU3sN4",
  authDomain: "resume-builder-4d556.firebaseapp.com",
  projectId: "resume-builder-4d556",
  storageBucket: "resume-builder-4d556.appspot.com",
  messagingSenderId: "911197941153",
  appId: "1:911197941153:web:f2980995d1e06f9ec32fe0"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
const reduxStore = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)));

ReactDOM.render(

    <BrowserRouter>
      <Provider store={reduxStore}>
        <ReactReduxFirebaseProvider
          firebase={firebase}
          config={firebaseConfig}
          dispatch ={reduxStore.dispatch}
          createFirestoreInstance={createFirestoreInstance}
          
        >
          <App/>
        

        </ReactReduxFirebaseProvider>
      </Provider> 
    </BrowserRouter>
,
  document.getElementById('root')
);