import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets/icon';
import Button from '../../../components/Button/indexbutton';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Money Tracker</Text>
      <Text style={styles.started}>Lets Get Started</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02CF8E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
  started: {
    fontSize: 18,
    marginTop: 60,
    borderWidth: 0.5,
    padding: 12,
    borderRadius: 12.5,
    backgroundColor: 'white',
    borderColor: 'white',
    fontFamily: 'Poppins-Medium',
    elevation: 10,

  }
});