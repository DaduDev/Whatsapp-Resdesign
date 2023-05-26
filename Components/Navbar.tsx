/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Chat from './Chat';

const Navbar = () => {
  return (
    <View style={styles.c}>
      <View style={styles.container}>
        <Text style={styles.t1}>All</Text>
        <Text style={styles.t2}>Office</Text>
        <Text style={styles.t3}>Family</Text>
        <Text style={styles.t4}>Archive</Text>
      </View>
      <Chat />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 70,
    borderTopEndRadius: 100,
    borderTopStartRadius: 100,
  },
  t1: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  t2: {
    color: '#5A5A5A',
    fontSize: 18,
    fontWeight: 'bold',
  },
  t3: {
    color: '#5A5A5A',
    fontSize: 18,
    fontWeight: 'bold',
  },
  t4: {
    color: '#5A5A5A',
    fontSize: 18,
    fontWeight: 'bold',
  },
  c: {
    backgroundColor: '#F9F9F9',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
});
