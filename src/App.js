import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import Header from './components/header/Header'
import Body from './components/body/Body';
import { myStore } from './redux/store';


const App = () => {

    return (
        <div>
        <Provider store={myStore}>
          <BrowserRouter>
              <Header />
              <Body/>
            </BrowserRouter>
         </Provider>
        </div>
    );
  
}



export default App;
