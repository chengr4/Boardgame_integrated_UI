import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export function Card() {
  return (
    <View style={styles.card}>
      <Image 
        source={{uri:'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
        style={{
          width:'100%',
          height:200
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex:1,
  },
  
});