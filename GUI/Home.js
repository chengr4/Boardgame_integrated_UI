import React, { useEffect, useState, useCallback} from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight, Linking} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// data list that server sent (template)
/*const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694da0f-3da1-471f-bd96-145571e29d72",
    title: "Tx Item",
  },
];*/


// must be declared at firt
const Stack = createStackNavigator();

/**
 * Just the header (purple part)
 */
const Header = () => {
  return(
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
    </View>
  );
}

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
 * 
 * @param {*} param0 
 * Article items
 */
const ArticleItem = ({currentItem}) => {

  // temporarily not be used, but maybe be used in the future
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Details', {currentItem})
  };
  

  // content output
  return (
    <TouchableHighlight style={styles.listItem} onPress={onPress}>
      <View style={styles.listItemView}>
        <Text style={styles.item}>{currentItem.article_title}</Text>
      </View>
    </TouchableHighlight>
  );
}

/**
 * Detail Screen
 */
const DetailsScreen = ({route}) => {
  const {currentItem} = route.params;
  return (
    <View style={styles.container}>
    <Text>{currentItem.content}</Text>
    </View>
  );
}




function ListScreen() {
  const [DATA, setData] = useState([]);
  const [Content, setContent] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getData = () => {
    setRefreshing(true);
    fetch('https://boardgame-server.herokuapp.com/e/e')
      .then((response) => response.json())
      .then((json) =>{
        var data = [];
        // concatenate all json crawlers caught
        data = data.concat(json.GoProInfo);
        data = data.concat(json.ChineseChessNews);
        data = data.concat(json.ChessNews);
        // sort data randomly
        data = data.sort(()=>Math.random() - 0.5);
        return data;
      })
      .then(data=>setData(data))
      .catch((error) => console.error(error));
      
      fetch('https://boardgame-server.herokuapp.com/post/new-app')
      .then((response) => response.json())
      .then((json) =>{
         data = json.reverse();
        setContent(data);
      })
      .catch((error) => console.error(error))
      .finally(()=>setRefreshing(false));
  }

  // must use, dont know why
  useEffect(getData, []);
  
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={DATA.concat(Content)}
        keyExtractor={({ id }) => id}
        refreshing={refreshing}
        onRefresh={getData}
        renderItem={({item, index}) => {
            // web crawler collect 12 items, so from 13 is the article
            if(index>=11) {
              return <ArticleItem currentItem={item}/>
            }
            return <ListItem currentItem={item}/>
        }}
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