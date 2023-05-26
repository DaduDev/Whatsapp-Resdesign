/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const contacts = [
  {
    uid: 1,
    name: 'Dadapeer Shaik',
    status: 'Not a Competitive Programmer',
    imageUrl: 'https://avatars.githubusercontent.com/u/69897636?v=4',
  },
  {
    uid: 2,
    name: 'Gouse',
    status: 'An civil engineer trying be a software engineer',
    imageUrl: 'https://avatars.githubusercontent.com/u/126395690?v=4',
  },
  {
    uid: 5,
    name: 'Hitesh Choudhary',
    status: 'Just an extra ordinary teacher',
    imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
  },
  {
    uid: 3,
    name: 'Kunal Kushwaha',
    status: 'Empowering communities via open-source and education.',
    imageUrl: 'https://avatars.githubusercontent.com/u/42698533?v=4',
  },
  {
    uid: 4,
    name: 'William',
    status: '101010',
    imageUrl: 'https://avatars.githubusercontent.com/u/651833?v=4',
  },
];

const Chat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pinned}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/vector-push-pin-icon-pushpin-illustration-graphic-design-isolated-eps-symbol-195159342.jpg',
          }}
          style={styles.pin}
        />
        <Text style={styles.pinText}>Pinned</Text>
      </View>
      <ScrollView style={styles.container1} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text numberOfLines={2} style={styles.userStatus}>
                {status}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  pin: {
    height: 20,
    width: 20,
  },
  pinned: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    paddingLeft: 30,
  },
  pinText: {
    paddingLeft: 10,
    color: '#5A5A5A',
  },
  container1: {
    paddingHorizontal: 25,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 8,
  },
  userImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  userStatus: {
    fontSize: 12,
    color: '#000000',
  },
});
