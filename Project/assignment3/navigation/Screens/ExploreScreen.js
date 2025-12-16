import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';

export default function ExploreScreen({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [selectedSort, setSelectedSort] = useState('Newest');

  const recipes = [
    {
      emoji: '🍝',
      name: 'Spaghetti Carbonara',
      author: '@chef_mario',
      likes: 42,
      bgColor: '#FFE8E0'
    },
    {
      emoji: '🍕',
      name: 'Wood-Fired Pizza',
      author: '@italian_kitchen',
      likes: 87,
      bgColor: '#FFE8D5'
    },
    {
      emoji: '🥗',
      name: 'Caesar Salad',
      author: '@healthy_eats',
      likes: 31,
      bgColor: '#E8F5E9'
    },
    {
      emoji: '🍰',
      name: 'Chocolate Cake',
      author: '@sweet_treats',
      likes: 124,
      bgColor: '#FFF3E0'
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search recipes..."
            placeholderTextColor="#999"
          />
        </View>

        {/* Filters */}
        <View style={styles.filtersContainer}>
          {/* Category Dropdown */}
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>{selectedCategory}</Text>
            <Text style={styles.dropdownIcon}>▼</Text>
          </TouchableOpacity>

          {/* Sort Dropdown */}
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>Sort: {selectedSort}</Text>
            <Text style={styles.dropdownIcon}>▼</Text>
          </TouchableOpacity>
        </View>

        {/* Recipe Grid */}
        <View style={styles.recipeGrid}>
          {recipes.map((recipe, index) => (
            <TouchableOpacity
              key={index}
              style={styles.recipeCard}
              activeOpacity={0.7}
            >
              <View style={[styles.recipeImageBox, { backgroundColor: recipe.bgColor }]}>
                <Text style={styles.recipeEmoji}>{recipe.emoji}</Text>
              </View>
              <View style={styles.recipeInfo}>
                <Text style={styles.recipeName}>{recipe.name}</Text>
                <Text style={styles.recipeAuthor}>{recipe.author}</Text>
                <View style={styles.likesContainer}>
                  <Text style={styles.heartIcon}>❤️</Text>
                  <Text style={styles.likesCount}>{recipe.likes}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => onNavigate('Home')}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('MyRecipes')}>
          <Text style={styles.navIcon}>📖</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.addBtn}
          onPress={() => onNavigate('AddRecipe')}
        >
          <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.navIcon, styles.navIconActive]}>🧭</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('Profile')}>
          <Text style={styles.navIcon}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  
  // Header
  header: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#333' },

  scroll: { flex: 1, marginBottom: 70 },

  // Search Bar
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginHorizontal: 20,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  searchIcon: { fontSize: 18, marginRight: 8 },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },

  // Filters
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    flex: 0.48,
  },
  filterText: { fontSize: 14, color: '#333', flex: 1 },
  dropdownIcon: { fontSize: 10, color: '#666', marginLeft: 4 },

  // Recipe Grid
  recipeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  recipeCard: {
    width: '48%',
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: '#FFF',
    overflow: 'hidden',
  },
  recipeImageBox: {
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  recipeEmoji: { fontSize: 70 },
  recipeInfo: {
    paddingVertical: 12,
  },
  recipeName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  recipeAuthor: {
    fontSize: 12,
    color: '#999',
    marginBottom: 6,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIcon: { fontSize: 14, marginRight: 4 },
  likesCount: { fontSize: 13, color: '#666', fontWeight: '500' },

  // Bottom Nav
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    elevation: 10,
  },
  navIcon: { fontSize: 24 },
  navIconActive: { color: '#FF6B4A' },
  addBtn: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FF6B4A',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -28,
    shadowColor: '#FF6B4A',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  addBtnText: { fontSize: 28, color: '#FFF', fontWeight: '600' },
});