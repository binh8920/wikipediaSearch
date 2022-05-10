import React from 'react';
import MyNavigator from './app/presenatation/navigation';

import {Provider} from 'react-redux';
import {store} from './app/presenatation/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MyNavigator />
      </Provider>
    </>
  );
};

export default App;
