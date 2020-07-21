import React, { useEffect, useState, useCallback} from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight, Linking} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


// server send data list


// jsut the header (purple part)
const Header = () => {
  return(
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
    </View>
  );
}

// must be declared at firt
const Stack = createStackNavigator();

// main Home GUI
export function Home() {

  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ListScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );
}

// function in ListScreen
const ListItem = ({currentItem}) => {
  const supportedURL = currentItem.href;

  // temporarily not be used, but maybe be used in the future
  /*const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Details')
  };*/

  const onPress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(supportedURL);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(supportedURL);
    } else {
      Alert.alert(`Don't know how to open this URL`);
    }
  });

  // content output
  return (
    <TouchableHighlight style={styles.listItem} onPress={onPress}>
      <View style={styles.listItemView}>
  <Text style={styles.item}>{currentItem.title} {currentItem.source}</Text>
      </View>
    </TouchableHighlight>
  );
}

/** 
 * Detail screen
 * Maybe be used in the future
*/
function DetailsScreen() {
  return (
    <View style={styles.container}>
      123
    </View>
  );
};


function ListScreen() {
  const [DATA, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/e/e')
      .then((response) => response.json())
      .then((json) => setData(json.GoProInfo))
      .catch((error) => console.error(error))
  }, []);
  
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={DATA}
        renderItem={({item}) => <ListItem currentItem={item}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  header: {
    padding: 15,
    height: 60,
    backgroundColor: 'darkslateblue',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  headerText:{
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',

  },
  item: {
    fontSize: 18,
  },
  
});