import React from 'react';
import { Provider } from 'react-redux';
import  {ThemeProvider}  from './src/Context/ThemeContext';
import MainApp from './MainApp';
import store from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  </Provider>
);

export default App;
