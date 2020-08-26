import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Alert } from 'react-native';
import {Card} from './Card';
import Icon from 'react-native-vector-icons/MaterialIcons';


/**
 * Youtube channel
 */
export function YTChannel() {
  const [DATA, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  var now = new Date();
  now_string = now.toISOString();
  //Alert.alert(now_string);
  var now_before7days;

  // must have, don't know why
  Icon.loadFont();

  const onPress = (text) => {
    setLoading(true);
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&publishedAfter=2020-08-01T13%3A49%3A15.522Z&publishedBefore=${now_string}&q=${text}&type=video&`
    +'key=AIzaSyBDUTYk0pd5-0Iq0Lma52qmOfVVgtraO38')
      .then((response) => response.json())
      .then(json=>setData(json))
      .catch((error) => console.error(error));
    setLoading(false);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Youtube</Text>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={()=>{
            text = '圍棋';
            onPress(text);
          }}
        >
          <Text>Go</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={()=>{
            text = '象棋';
            onPress(text);
          }}
        >
          <Text>Chinese chess</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={()=>{
            text = '西洋棋';
            onPress(text);
          }}
        >
          <Text>Chess</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        {Loading ? <ActivityIndicator size="large" color="red" /> : null}
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