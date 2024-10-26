import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, {useState} from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';

const SignIn = () => {
  // let title = 'Welcome';
  const [title, setTitle] = useState('Registration');
  //baru
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleClick = () => {
    // title = 'Selamat Datang';
    setTitle('Selamat Datang');
    const data = {
      name: name,
      userName: userName,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
    };
    console.log(data);
  };
  const handleName = e => {
    setName(e);
  };
  const handleUserName = e => {
    setUserName(e);
  };
  const handleEmail = e => {
    setEmail(e);
  };
  const handleAddress = e => {
    setAddress(e);
  };
  const handlePhoneNumber = e => {
    setPhoneNumber(e);
  };
  return (
    <View style={styles.container}>
      <Title title={title} />
      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={handleName}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={handleUserName}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={handleEmail}
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={handleAddress}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan nomor telepon anda"
        onChangeText={handlePhoneNumber}
        keyboardType='numeric'
      />
      <Button label="Register" color="purple"  onPress={handleClick}/>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    margin: 20,
  },
});
