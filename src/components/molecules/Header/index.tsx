import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';
import {NullPhoto} from '../../../assets/icon';

const Header = ({text, backButton, onPress, subText, textStyle, subTextStyle}) => {
  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="arrow-back" onPress={onPress} />
      )}
      <Text style={[styles.text, textStyle]}> {text}</Text>
      <Text style={[styles.subText, subTextStyle]}> {subText}</Text>
    </View>
    
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingVertical: 38,
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    marginLeft: 34,
    color: 'black',
  },
  subText: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    marginLeft: -168,
    marginTop: 15,
    color: '#8D92A3',
  },
  pfp : {
    height: 50,
    width: 50,
    marginLeft: 180,
    marginTop: -10,
  }
});