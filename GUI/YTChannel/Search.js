import React, {useState} from 'react';
import { Text, View, TextInput,StyleSheet } from 'react-native';


/*
 NOT USED
 */

export function Search() {
  const [value, setValue] = useState();
  return (
    <View style={styles.search}>
      <View style={styles.top}>
        <Text>123</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text=>setValue(text)} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    flex:1,
  },
  top: {
    padding: 60,
    justifyContent: 'space-around',
    flexDirection:'row' ,
    backgroundColor: 'red',
  },
  textInput: {
    width: '70%',
    backgroundColor: '#e6e6e6',
  },
  
});