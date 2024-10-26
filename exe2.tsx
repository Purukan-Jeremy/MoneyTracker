/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <StatusBar barStyle={'white-content'} backgroundColor="black" />
      <View style={styles.backAtas} />
      <View style={styles.backBawah} />
      <View style={styles.pfptengah}>
        <Image style={styles.pfp} source={require('./assets/picture.jpeg')} />
      </View>
      <Text style={styles.namebio}>Purukan Jeremy</Text>
      <Text style={styles.bio}>+62 859-3164-4355</Text>
      <View style={styles.aboutBox}>
        <Text style={styles.about}>
          Full Name : Purukan, Jeremy Sylgwyn <Arnold />
        </Text>
        <Text style={styles.about}>Email: s22210214@student.unklab.ac.id</Text>
        <Text style={styles.about}>
          Full Name : Purukan, Jeremy Sylgwyn Arnold
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  aboutBox: {
    backgroundColor: 'lightgray',
    margin: 20,
    padding: 20,
    paddingBottom: 250,
  },
  about: {
    fontWeight: 20,
  },
  namebio: {
    marginTop: 7,
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 18,
  },
  bio: {
    marginTop: 3,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  backAtas: {
    backgroundColor: 'black',
    flex: 0.3,
  },
  backBawah: {
    backgroundColor: 'blue',
  },
  pfptengah: {
    justifyContent: 'center',
  },
  pfp: {
    height: 130,
    width: 130,
    borderRadius: 100,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 5,
  },
});
export default App;
