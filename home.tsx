import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Title from './components/Title';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Title title="Users List" />
      {users.map(user => {
        return (
          <View key={user.id} style={styles.userContainer}>
            <Text style={styles.text}>{` ${user.name}`}</Text>
            <Text style={styles.text}>{` ${user.email}`}</Text>
            <Text
              style={
                styles.text
              }>{` ${user.address.city}, ${user.address.street}`}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
  },
  userContainer: {
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});
