import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';
import {NullPhoto} from '../../../assets/icon';

const Header = ({
  text,
  backButton,
  onPress,
  subText,
  textStyle,
  subTextStyle,
  type,
}) => {
  if (type === 'sideProfile') {
    return (
      <View style={styles.containerWithPfp}>
        <View>
          <Text style={[styles.text, textStyle]}> {text}</Text>
          <Text style={[styles.subText, subTextStyle]}> {subText}</Text>
        </View>
        <Image source={NullPhoto} style={styles.pfp}/>
      </View>
    );
  }
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
    marginLeft: 34,
    color: '#8D92A3',
  },
  pfp: {
    height: 50,
    width: 50,
    marginRight: 34,
  },
  containerWithPfp: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
