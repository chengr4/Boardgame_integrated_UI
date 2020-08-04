import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import {Card} from './Card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import data from './test_data.json';
import { set } from 'react-native-reanimated';

/**
 * Youtube channel
 */
export function YTChannel() {
  const [DATA, setData] = useState([]);
  const [value, setValue] = useState('%E5%9C%8D%E6%A3%8B');
  const key =  `GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video`
  +'key=AIzaSyBDUTYk0pd5-0Iq0Lma52qmOfVVgtraO38';

  // must have don't know why
  Icon.loadFont();

  const onPress = () => {
    fetch(key)
      .then((response) => response.json())
      .then(json=>setData(json))
      .catch((error) => console.error(error));
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Youtube</Text>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={()=>{
            setValue('%E5%9C%8D%E6%A3%8B');
            onPress();
          } }
        >
          <Text>Go</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={()=> {
            setValue('象棋');
            onPress();
          }}
        >
          <Text>Chinese chess</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={()=> {
            setValue('西洋棋');
            onPress();
          }}
        >
          <Text>Chess</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <FlatList
           data = {DATA.items}
           keyExtractor={item => item.id.videoId}
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
  header: {
    marginTop: 50,
    height: 60,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // space between yt and search icon
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
  },
  headerButton: {
    alignItems: "center",
    backgroundColor: 'pink',
    borderRadius: 15,
    padding: 15,
  },
  icon: {
    padding: 15,
  }
});