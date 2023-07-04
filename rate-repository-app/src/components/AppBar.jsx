import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    
    backgroundColor: theme.colors.appBar,    
    flexDirection: "row", 
  },
  tab: {
    flexGrow: 1,
    flexBasis: 0,
    alignItems: "center",
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: theme.fontSizes.subheading,
    padding: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to="/" component={Pressable} style={styles.tab} onPress={() => {}}>
        <Text style={styles.tabText}>Repositories</Text>
      </Link>
      <Link to="/signin" component={Pressable} style={styles.tab} onPress={() => {}}>
        <Text style={styles.tabText}>Sign in</Text>
      </Link>
    </View>
  );
};

export default AppBar;
