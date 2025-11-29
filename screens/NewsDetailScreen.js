import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const NewsDetailScreen = ({ route }) => {
  const { title, content, author, date } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.metaContainer}>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.contentText}>{content}</Text>
        <Text style={styles.contentText}>
          Это демонстрационный текст новости. В реальном приложении здесь будет полное содержание статьи.
          Вы можете добавить изображения, видео и другие медиа элементы для улучшения пользовательского опыта.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    backgroundColor: 'white',
    margin: 16,
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
    lineHeight: 32,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  author: {
    fontSize: 14,
    color: '#0c74bfff',
    fontWeight: '500',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    marginBottom: 16,
  },
});

export default NewsDetailScreen;