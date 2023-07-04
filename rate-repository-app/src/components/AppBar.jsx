import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    flexDirection: 'row',
  },
  scrollView: {
    flexGrow: 1,
  },
  tab: {
    flexGrow: 1,
    flexShrink: 1,
    alignItems: "center",
    padding: 10,
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: theme.fontSizes.subheading,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <Link to="/" component={Pressable} style={styles.tab} onPress={() => {}}>
          <Text style={styles.tabText}>Repositories</Text>
        </Link>
        <Link to="/signin" component={Pressable} style={styles.tab} onPress={() => {}}>
          <Text style={styles.tabText}>Sign in</Text>
        </Link>
        {/* Space left for more tabs */}
      </ScrollView>
    </View>
  );
};

export default AppBar;