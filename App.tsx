import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Navbar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D3D3',
  },
});

export default App;
