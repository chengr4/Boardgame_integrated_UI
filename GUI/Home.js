import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// server send data list
/*const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '[GO] XXXXXXXXXX',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '[Chinese chess] XXXXXXXX',
  },  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];*/

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

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Details')
  };

  return (
    <TouchableHighlight style={styles.listItem} onPress={onPress}>
      <View style={styles.listItemView}>
        <Text style={styles.item}>{currentItem.title}</Text>
      </View>
    </TouchableHighlight>
  );
  
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}


function ListScreen() {
  const [DATA, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
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
}

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
  
})