import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const NewsListScreen = ({ navigation }) => {

  const newsData = [
    { id: '1', title: 'Что-то произошло в Москве', content: 'Читайте далее', author: 'Джо Байден', date: '2025-04-26' },
    { id: '2', title: 'Новые налоги', content: 'Читайте далее', author: 'Jane Smith', date: '2024-01-14' },
    { id: '3', title: 'Дональд Трамп дал интервью', content: 'Читайте далее', author: 'Mike Johnson', date: '2025-04-25' },
    { id: '4', title: 'Лукашенко красава', content: 'Читайте далее', author: 'Sarah Wilson', date: '2025-03-12' },
    { id: '5', title: 'Илон Маск выпустил смартфон', content: 'Читайте далее', author: 'Alex Brown', date: '2025-02-11' },
  ];

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity
      style={styles.newsItem}
      onPress={() => navigation.navigate('NewsDetail', {
        id: item.id,
        title: item.title,
        content: item.content,
        author: item.author,
        date: item.date
      })}
    >
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsMeta}>{item.author} • {item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Последние новости</Text>
      <FlatList
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  newsItem: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  newsMeta: {
    fontSize: 12,
    color: '#666',
  },
});

export default NewsListScreen;