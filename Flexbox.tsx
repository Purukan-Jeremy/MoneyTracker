import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      <View style={styles.topContainer} />
      <View style={styles.container}>
        <View>
          <View style={styles.redBox} />
          <View style={styles.redBox} />
        </View>
        <View style={styles.greenBox} />
        <View style={styles.blueBox} />
      </View>
      <View style={styles.bottomContainer} />
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: 'purple',
    flex: 1,
  },
  container: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'gray',
  },
  redBox: {
    margin: 5,
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: 'red',
  },
  greenBox: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
  },
  blueBox: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
  },
});
