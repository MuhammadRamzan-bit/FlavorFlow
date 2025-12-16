import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function AddRecipeScreen({ onNavigate }) {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeCategory, setRecipeCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSaveRecipe = () => {
    if (!recipeTitle || !recipeCategory || !ingredients || !instructions) {
      Alert.alert('Error', 'Please fill all fields!');
      return;
    }

    Alert.alert('Success', 'Recipe saved successfully! ✅');

    // Reset form
    setRecipeTitle('');
    setRecipeCategory('');
    setIngredients('');
    setInstructions('');

    // Go back to Home (static navigation)
    onNavigate('Home');
  };

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backBtn}
          onPress={() => onNavigate('Home')}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Add Recipe</Text>

        <TouchableOpacity onPress={handleSaveRecipe}>
          <Text style={styles.saveBtn}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Form */}
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        
        {/* Upload Image */}
        <TouchableOpacity style={styles.uploadBox}>
          <Text style={styles.uploadIcon}>⬆️</Text>
          <Text style={styles.uploadText}>Upload Image</Text>
        </TouchableOpacity>

        {/* Title */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Recipe name"
            placeholderTextColor="#999"
            value={recipeTitle}
            onChangeText={setRecipeTitle}
          />
        </View>

        {/* Category Picker */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Category</Text>
          <View style={styles.pickerContainer}>
            <TouchableOpacity 
              style={styles.picker}
              onPress={() => {
                Alert.alert('Category', 'Select: Breakfast, Lunch, Dinner, Dessert, Snacks');
              }}
            >
              <Text style={styles.pickerText}>
                {recipeCategory || 'Select category'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Ingredients */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Ingredients</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="List ingredients..."
            placeholderTextColor="#999"
            value={ingredients}
            onChangeText={setIngredients}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        {/* Instructions */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Instructions</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Cooking steps..."
            placeholderTextColor="#999"
            value={instructions}
            onChangeText={setInstructions}
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 50, paddingBottom: 15, backgroundColor: '#FFF', borderBottomWidth: 1, borderBottomColor: '#EEE' },
  backBtn: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  backIcon: { fontSize: 24, color: '#333' },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#333' },
  saveBtn: { fontSize: 16, fontWeight: '600', color: '#FF6B4A' },
  scroll: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
  uploadBox: { height: 160, backgroundColor: '#F9F9F9', borderWidth: 2, borderStyle: 'dashed', borderColor: '#DDD', borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  uploadIcon: { fontSize: 40, marginBottom: 8 },
  uploadText: { fontSize: 14, color: '#999' },
  formGroup: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '500', color: '#333', marginBottom: 8 },
  input: { backgroundColor: '#F9F9F9', borderWidth: 1, borderColor: '#EEE', borderRadius: 12, paddingHorizontal: 15, paddingVertical: 12, fontSize: 14, color: '#333' },
  textarea: { height: 100, paddingTop: 12 },
  pickerContainer: { position: 'relative' },
  picker: { backgroundColor: '#F9F9F9', borderWidth: 1, borderColor: '#EEE', borderRadius: 12, paddingHorizontal: 15, paddingVertical: 12 },
  pickerText: { fontSize: 14, color: '#666' },
});
