import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import React from 'react';
import {NullPhoto} from '../../assets/icon';

const CashOnHand = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        text="Cash On Hand"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.contentWrapper}>
        <Gap height={16} />
        <TextInput label="Email Addres" placeholder="Type your email address" />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
      </View>
    </View>
  );
};

export default CashOnHand;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: 24,
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
});
