/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ImageBackground,
  ScrollView,
} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <ImageBackground
        style={styles.imgback}
        source={require('./assets/ruanmei.jpg')}
      />
      <View style={styles.backBawah} />
      <View style={styles.pfptengah}>
        <Image style={styles.pfp} source={require('./assets/picture.jpeg')} />
      </View>
      <Text style={styles.namebio}>Purukan Jeremy</Text>
      <Text style={styles.bio}>+62 859-3164-4355</Text>
      <Text style={styles.bio}>- Aku nganggur plis kasih aku pekerjaan -</Text>
      <View>
        <View style={styles.aboutBox}>
          <Text style={styles.personal}>Personal Information</Text>
          <Text style={styles.about}>
            Full Name : Purukan, Jeremy Sylgwyn Arnold
          </Text>
          <Text style={styles.about}>
            Email : s22210214@student.unklab.ac.id
          </Text>
          <Text style={styles.about}>Date of Birth : 30 February 2005</Text>
          <Text style={styles.about}>Gender : Male</Text>
          <Text style={styles.about}>Religion : Christian</Text>
          <Text style={styles.about}>Address : Tomohon Utara</Text>
        </View>
        <View style={styles.aboutBox}>
          <Text style={styles.bio}>Experiences :</Text>
          <Text style={styles.bio}>None</Text>
        </View>
        <View>
          <View />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imgback: {
    resizeMode: 'cover',
    flex: 0.5,
  },
  personal: {
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'center',
  },
  aboutBox: {
    backgroundColor: 'lightgray',
    margin: 20,
    padding: 20,
    paddingTop: 5,
    paddingBottom: 10,
    borderRadius: 10,
    borderBottomWidth: 6,
    paddingVertical: 12,
    borderBottomColor: 'rgba(0,0,0, 0.50)',
  },
  about: {
    fontWeight: '700',
    fontSize: 15,
    margin: 4,
    padding: 2,
  },
  namebio: {
    marginTop: 65,
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
    position: 'absolute',
  },
});
export default App;
