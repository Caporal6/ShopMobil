import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categorie from './composants/categorie';
import Produit from './composants/produits';

export default function App() {


  const RootStack = createNativeStackNavigator({
    initialRouteName: "Categorie",
    screenOptions: {
      headerStyle: {
      backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff'
      ,
      headerTitleStyle: {
      fontWeight: 'bold'
      ,
      },
      },
      screens: {
        Categorie: {
        screen: Categorie,
        options: {
        title: "Categorie",
        },
        },
        Produit: {
        screen: Produit,
        options: {
        title: "Produit",
        },
        },



      },
    });


  const Navigation = createStaticNavigation(RootStack);


  return (
      <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
