import * as React from 'react';
import { Text, View, StyleSheet, Button, FlatList, Alert } from 'react-native';
import {Card} from './Card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import data from './test_data.json';

export function YTChannel() {
  Icon.loadFont();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Youtube</Text>
        <Button
        title="Go"
        color="#f194ff"
        onPress={() => Alert.alert('Simple Button pressed')}
        />
        <Button
        title="Chinese Chess"
        color="#f194ff"
        onPress={() => Alert.alert('Simple Button pressed')}
        />
        <Button
        title="Chess"
        color="#f194ff"
        onPress={() => Alert.alert('Simple Button pressed')}
        />
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