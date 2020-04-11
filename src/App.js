import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigation';

const App = () => {
  return (
    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
  );
};

export default App;
