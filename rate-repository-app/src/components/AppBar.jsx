import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.appBar,    
  },
  tabText: {
    color: "#fff",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.tab} onPress={() => {}}>
        <Text style={styles.tabText} fontWeight="bold" >Repositories</Text>
      </Pressable>
      {/* Add more tabs as needed */}
    </View>
  );
};

export default AppBar;