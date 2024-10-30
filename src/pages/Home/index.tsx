import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import React from 'react';
import {NullPhoto} from '../../assets/icon';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        type="sideProfile"
        text="Money Tracker"
        subText="Track your money"
      />
      <View style={styles.contentWrapper}>
        <Gap height={15} />
        <Text style={styles.yourMoney}>Your Balance</Text>
        <Gap height={5} />
        <Text style={styles.money}>Rp. 10.000.000</Text>
        <Gap height={2} />
        <View style={styles.linewrapper}>
          <View style={styles.line} />
        </View>
        <View style={styles.cashSection}>
          <Gap height={10} />
          <Text style={styles.cash}>Cash on Hand</Text>
          <Text style={styles.sumCash}>Rp. 4.000.000</Text>
        </View>
        <Gap height={10} />
        <View style={styles.cashSection}>
          <Text style={styles.cash}>Cash on Bank</Text>
          <Text style={styles.sumCash}>Rp. 6.000.000</Text>
        </View>
        <Gap height={20} />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.transaction}>Add Transaction</Text>
        <Button
          text="Cash on Hand"
          onPress={() => navigation.navigate('CashOnHand')}
        />
        <Gap height={20} />
        <Button
          text="Cash on Bank"
          onPress={() => navigation.navigate('CashOnBank')}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cash: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: 'black',
    marginRight: 70,
  },
  sumCash: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: 'black',
  },
  contentWrapper: {
    marginTop: 24,
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  yourMoney: {
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    fontSize: 20,
  },
  money: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
  },
  line: {
    width: 341,
    paddingLeft: 24,
    height: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  linewrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 18,
    paddingBottom: 20,
  },
  cashSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  transaction: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: 'black',
    marginVertical: 10,
  },
});
