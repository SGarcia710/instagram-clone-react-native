import 'react-native-gesture-handler';
import React from 'react';
import {View, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../screens/Home';
import Search from '../screens/Search';
import NewPost from '../screens/NewPost';
import Direct from '../screens/Direct';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            switch (route.name) {
              case 'Home':
                return (
                  <MaterialCommunityIcons
                    name={focused ? 'home-variant' : 'home-variant-outline'}
                    size={size}
                    color={color}
                  />
                );
              case 'Search':
                return <FeatherIcons name="search" size={size} color={color} />;
              case 'NewPost':
                return (
                  <FeatherIcons name="plus-square" size={size} color={color} />
                );
              case 'Direct':
                return <FeatherIcons name="send" size={size} color={color} />;

              case 'Profile':
                // return focused ? (
                //   <MaterialIcons name="person" size={size} color={color} />
                // ) : (
                //   <MaterialIcons
                //     name="person-outline"
                //     size={size}
                //     color={color}
                //   />
                // );
                return (
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 30,
                      borderWidth: focused ? 1 : 0,
                      borderColor: 'black',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{
                        uri:
                          'https://firebasestorage.googleapis.com/v0/b/ig-clone-rn.appspot.com/o/profile-pictures%2FProfilePic%20(1).jpg?alt=media&token=3697f1f2-9257-49ea-9fad-d2804a5132f5',
                      }}
                      style={{
                        height: 25,
                        width: 25,
                        borderRadius: 30,
                      }}
                    />
                  </View>
                );
            }
          },
        })}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: 'black',
          inactiveTintColor: 'black',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="NewPost" component={NewPost} />
        <Tab.Screen name="Direct" component={Direct} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
