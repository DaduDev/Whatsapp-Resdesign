/* eslint-disable prettier/prettier */
import {StyleSheet, View, Image, Text} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/69897636?v=4',
          }}
          style={styles.profile}
        />
        <View style={styles.text}>
          <Text style={styles.headText}>Shaik Dadapeer</Text>
          <Text style={styles.subText}>Open-Source Contributor</Text>
        </View>
        <View style={styles.search}>
          <Image
            source={{
              uri: 'https://assets.stickpng.com/images/585e4ae1cb11b227491c3393.png',
            }}
            style={styles.searchIcon}
          />
        </View>
        <View style={styles.menu}>
          <Image
            source={{
              uri: 'https://static.thenounproject.com/png/3636116-200.png',
            }}
            style={styles.menuIcon}
          />
        </View>
      </View>
      <View style={styles.chatNote}>
        <Text style={styles.chat}>Chat</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  profile: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  container: {
    height: 50,
    paddingTop: 30,
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  main: {
    backgroundColor: '#D3D3D3',
    height: 200,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  text: {
    padding: 13,
    paddingLeft: 30,
  },
  headText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#000000',
  },
  searchIcon: {
    height: 20,
    width: 20,
  },
  menuIcon: {
    height: 20,
    width: 20,
  },
  search: {
    padding: 25,
  },
  subText: {
    color: '#000000',
  },
  menu: {
    paddingTop: 25,
  },
  chat: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 30,
  },
  chatNote: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 30,
  },
});
