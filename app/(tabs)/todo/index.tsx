// app/index.js
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

interface Task {
  id: string;
  title: string;
  time: string;
  category: 'study' | 'exercise' | 'social' | 'chores';
  completed: boolean;
}

const getCategoryIcon = (category: Task['category']) => {
  switch (category) {
    case 'study':
      return <Ionicons name="book-outline" size={24} color="#6B4EAB" />;
    case 'exercise':
      return <Ionicons name="trophy-outline" size={24} color="#6B4EAB" />;
    case 'social':
      return <Ionicons name="calendar-outline" size={24} color="#6B4EAB" />;
    case 'chores':
      return <Ionicons name="list-outline" size={24} color="#6B4EAB" />;
    default:
      return <Ionicons name="document-outline" size={24} color="#6B4EAB" />;
  }
};

const TodoScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Study lesson', time: '', category: 'study', completed: false },
    { id: '2', title: 'Run 5k', time: '4:00pm', category: 'exercise', completed: false },
    { id: '3', title: 'Go to party', time: '10:00pm', category: 'social', completed: false },
    { id: '4', title: 'Game meetup', time: '1:00pm', category: 'social', completed: true },
    { id: '5', title: 'Take out trash', time: '', category: 'chores', completed: true },
  ]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const renderTask = ({ item }: { item: Task }) => (
    <TouchableOpacity 
      style={[styles.taskItem, item.completed && styles.completedTask]}
      onPress={() => toggleTask(item.id)}
    >
      <View style={styles.taskContent}>
        <View style={styles.categoryIcon}>
          {getCategoryIcon(item.category)}
        </View>
        <View>
          <Text style={[styles.taskTitle, item.completed && styles.completedText]}>
            {item.title}
          </Text>
          {item.time && <Text style={styles.taskTime}>{item.time}</Text>}
        </View>
      </View>
      <TouchableOpacity style={styles.checkbox}>
        {item.completed && <Ionicons name="checkmark" size={24} color="#6B4EAB" />}
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.date}>October 20, 2022</Text>
      </View>
      
      <Text style={styles.title}>My Todo List</Text>

      <FlatList
        data={tasks.filter(task => !task.completed)}
        renderItem={renderTask}
        keyExtractor={item => item.id}
        style={styles.list}
      />

      <Text style={styles.sectionTitle}>Completed</Text>
      <FlatList
        data={tasks.filter(task => task.completed)}
        renderItem={renderTask}
        keyExtractor={item => item.id}
        style={styles.list}
      />

      <Link href="/todo/new-task" asChild>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add New Task</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B4EAB',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  date: {
    color: 'white',
    fontSize: 18,
    marginLeft: 20,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 30,
  },
  taskItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  taskTime: {
    color: '#666',
    marginTop: 4,
  },
  completedTask: {
    opacity: 0.7,
  },
  completedText: {
    textDecorationLine: 'line-through',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#6B4EAB',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#5D43A0',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  list: {
    flex: 1,
  },
});

export default TodoScreen;