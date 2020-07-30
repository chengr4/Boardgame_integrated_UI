import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import {Card} from './Card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import data from './test_data.json';

// watch https://www.youtube.com/watch?v=LdKtugH-sb8 
export function YTChannel() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Youtube</Text>
          <TouchableOpacity style={styles.icon}>
            <Icon name="search" size={32}/>
          </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <FlatList
           data = {data.items}
           renderItem = {({item})=><Card currentVideo={item} />}
         />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    marginTop: 50,
    height: 60,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // space between yt and search icon
  },
  headerText:{
    fontSize: 30,
    textAlign: 'center',
  },
  icon: {
    padding: 15,
  }
});