import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Card} from './Card';
import Icon from 'react-native-vector-icons/Ionicons';


// watch https://www.youtube.com/watch?v=LdKtugH-sb8 
export function YTChannel() {
  // load Icon library
  Icon.loadFont();
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Youtube</Text>
        <Icon name="search" size={32}/>
      </View>
    <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
    marginTop: 50,
    height: 60,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText:{
    fontSize: 30,
    textAlign: 'center',
  },
});