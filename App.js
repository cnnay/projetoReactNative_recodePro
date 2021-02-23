
import React from 'react';
import { View, Text, StatusBar } from 'react-native';


import Routes from './src/routes';

// import Atividade from './src/screens/Atividade';
// import Login from './src/screens/Login';

function App() {
  return (
    <View>
      <StatusBar />

      <Routes />
    </View>
  )
}

export default App;
