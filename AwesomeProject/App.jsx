import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { Provider } from 'react-redux';
import CartContext from './src/Context/CartContext';
import SavedContext from './src/Context/SavedCart';
import AccountScreen from './src/screen/AccountScreen';
import AddressScreen from './src/screen/AddressScreen';
import CartScreen from './src/screen/CartScreen';
import CheckOutScreen from './src/screen/CheckOutScreen';
import DigitScreen from './src/screen/DigitScreen';
import FAQs from './src/screen/FAQs';
import ForgotPasswordScreen from './src/screen/ForgotPasswordScreen';
import HelpScreen from './src/screen/HelpScreen';
import HomeScreen from './src/screen/HomeScreen';
import LogIn from './src/screen/LogIn';
import MyDetails from './src/screen/MyDetails';
import MyOrders from './src/screen/MyOrders';
import PaymentMethodScreen from './src/screen/PaymentMethodScreen';
import ProductDetalsScreens from './src/screen/ProductDetalsScreens';
import ResetPaaword from './src/screen/ResetPaaword';
import SavedScreen from './src/screen/SavedScreen';
import SearchScreen from './src/screen/SearchScreen';
import SignUp from './src/screen/SignUp';
import store from './src/store/myStore';
import MyHomeComponent from './src/StackScreens/MyHomeComponent';
// import { FetchUserProfile } from './src/store/slices/LoginCredentials';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
// const MyHomeComponent = () => {
 
//   return (
//     <Stack.Navigator
//       screenOptions={{ headerShown: false }}
//     // initialRouteName="ProductDetails"
//     >
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="ProductDetails" component={ProductDetalsScreens} />
//     </Stack.Navigator>
//   );
// };
const MyCartComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Cart">
      <Stack.Screen name="Cart" component={CartScreen} />

      <Stack.Screen name="CheckOut" component={CheckOutScreen} />
      <Stack.Screen name="AddressScreen" component={AddressScreen} />
      <Stack.Screen name="Payment" component={PaymentMethodScreen} />
    </Stack.Navigator>
  );
};
const MyAccountComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Account">
      <Stack.Screen name="Account" component={AccountScreen} />

      <Stack.Screen name="MyOrders" component={MyOrders} />
      <Stack.Screen name="AddressScreen" component={AddressScreen} />
      <Stack.Screen name="Payment" component={PaymentMethodScreen} />
      <Stack.Screen name="MyDetails" component={MyDetails} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="FAQs" component={FAQs} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="ForgetPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPaaword} />
      <Stack.Screen name="Otp" component={DigitScreen} />
    </Stack.Navigator>
  );
};
export default function App() {

  const [savedItem, setSavedItem] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const getCartIItem = async () => {
    try {
      const newCart = await AsyncStorage.getItem('cart');
      // console.log('new Cart ' + newCart);
      if (newCart) setCart(JSON.parse(newCart));
    } catch (error) {
      console.log('Cart item fetching error', error);
    }
  };
  const getSavedItems = async () => {
    try {
      const newSavedItems = await AsyncStorage.getItem('saved');
      if (newSavedItems) setSavedItem(JSON.parse(newSavedItems));
      // console.log('saved ' + newSavedItems);
    } catch (error) {
      console.log('saved item fetching error', error);
    }
  };

  const putSavedItem = async () => {
    try {
      if (!savedItem) return;
      await AsyncStorage.setItem('saved', JSON.stringify(savedItem));
    } catch (error) {
      console.log('saved storing error ' + error);
    }
  };

  const setCartItem = async () => {
    try {
      if (!cart) return;
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.log('cart storing error ' + error);
    }
  };

  React.useEffect(() => {
    getSavedItems();
    getCartIItem();
  }, []);
  React.useEffect(() => {
    putSavedItem();
    setCartItem();
  }, [savedItem, cart]);
  return (
    <Provider store={store}>
      <CartContext.Provider value={{ cart, setCart }}>
        <SavedContext.Provider value={{ savedItem, setSavedItem }}>

          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#1A1A1A',
                tabBarInactiveTintColor: '#999999',
                tabBarShowLabel: false,
              }}
              initialRouteName="HomeScreen">
              <Tab.Screen
                name="HomeScreen"
                component={MyHomeComponent}
                options={{
                  tabBarIcon: ({ color, focused, size }) => {
                    return (
                      <Octicons
                        name={'home'}
                        size={size * 1.3}
                        style={{ color: color }}
                      />
                    );
                  },
                }}
              />

              <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                  tabBarIcon: ({ color, focused, size }) => {
                    return (
                      <Feather
                        name={'search'}
                        size={size * 1.3}
                        style={{ color: color }}
                      />
                    );
                  },
                }}
              />
              <Tab.Screen
                name="Saved"
                component={SavedScreen}
                options={{
                  tabBarIcon: ({ color, focused, size }) => {
                    return (
                      <Octicons
                        name={'heart'}
                        size={size * 1.3}
                        style={{ color: color }}
                      />
                    );
                  },
                }}
              />
              <Tab.Screen
                name="CartScreen"
                component={MyCartComponent}
                options={{
                  tabBarIcon: ({ color, focused, size }) => {
                    return (
                      <AntDesign
                        name={'shoppingcart'}
                        size={size * 1.3}
                        style={{ color: color }}
                      />
                    );
                  },
                }}
              />
              <Tab.Screen
                name="AccountScreen"
                component={MyAccountComponent}
                options={{
                  tabBarIcon: ({ color, focused, size }) => {
                    return (
                      <MaterialCommunityIcons
                        name={'account-circle-outline'}
                        size={size * 1.3}
                        style={{ color: color }}
                      />
                    );
                  },
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>

        </SavedContext.Provider>
      </CartContext.Provider>
    </Provider>
  );
}
