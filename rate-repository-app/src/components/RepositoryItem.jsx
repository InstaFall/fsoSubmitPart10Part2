import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    marginBottom: 5,
  },
  description: {
    color: theme.colors.textSecondary,
    marginBottom: 5,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    borderRadius: 5,
    alignSelf: 'flex-start',
    padding: 5,
    marginBottom: 5,
  },
  countsContainer: {
    flexDirection: 'row',
  },
  count: {
    marginRight: 10,
  },
});

const RepositoryItem = ({ repository }) => {
  const {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
  } = repository;

  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
      <View style={styles.contentContainer}>
        <Text style={styles.title} fontWeight="bold">
          {fullName}
        </Text>
        <Text style={styles.description} color="textSecondary">
          {description}
        </Text>
        <Text style={styles.language} color="primary">
          {language}
        </Text>
        <View style={styles.countsContainer}>
          <Text style={styles.count}>
            {formatCount(stargazersCount)} Stars
          </Text>
          <Text style={styles.count}>
            {formatCount(forksCount)} Forks
          </Text>
          <Text style={styles.count}>
            {formatCount(reviewCount)} Reviews
          </Text>
          <Text style={styles.count}>{ratingAverage} Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;