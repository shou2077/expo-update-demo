import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

const NewTaskScreen = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [category, setCategory] = useState('study');

  const handleSave = () => {
    // Add save logic here
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add New Task</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Task Title"
          value={title}
          onChangeText={setTitle}
        />

        <View style={styles.categories}>
          <TouchableOpacity
            style={[styles.category, category === 'study' && styles.selectedCategory]}
            onPress={() => setCategory('study')}>
            <Ionicons name="book" size={24} color={category === 'study' ? '#6B4EAB' : '#666'} />
          </TouchableOpacity>
          {/* Add other category buttons */}
        </View>

        <View style={styles.dateTimeContainer}>
          <View style={styles.dateTime}>
            <Text style={styles.label}>Date</Text>
            <TouchableOpacity style={styles.dateTimeInput}>
              <Text>Select Date</Text>
              <Ionicons name="calendar" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          <View style={styles.dateTime}>
            <Text style={styles.label}>Time</Text>
            <TouchableOpacity style={styles.dateTimeInput}>
              <Text>Select Time</Text>
              <Ionicons name="time" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          style={[styles.input, styles.notesInput]}
          placeholder="Notes"
          value={notes}
          onChangeText={setNotes}
          multiline
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B4EAB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
  },
  form: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  category: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  selectedCategory: {
    backgroundColor: '#EDE9F5',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateTime: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  dateTimeInput: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notesInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#6B4EAB',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 'auto',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default NewTaskScreen;