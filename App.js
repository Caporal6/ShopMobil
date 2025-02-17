import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categorie from './composants/categorie';
import Produit from './composants/produits';
import { Ionicons } from '@expo/vector-icons';
import Checkout from './composants/checkout';
import store from './store/store';
import { Provider } from 'react-redux';

export default function App() {


  const RootStack = createNativeStackNavigator({
    initialRouteName: "Categorie",
    screenOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => (
        <Ionicons
          name="cart"
          size={25}
          color="white"
          style={{ marginRight: 15 }}
          onPress={() => navigation.navigate('Checkout')}
        />
      ),
    }),
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
      Checkout: {
        screen: Checkout,
        options: {
          title: "Checkout",
        },
      },
    },
  });

  const Navigation = createStaticNavigation(RootStack);


  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
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
