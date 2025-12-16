import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];
  
  const recipes = [
    { 
      emoji: '🍝', 
      name: 'Spaghetti Carbonara', 
      chef: '@chef_mario', 
      time: '30 min', 
      likes: 42,
      bgColor: '#FFE8E0',
      ingredients: [
        '400g spaghetti',
        '200g pancetta',
        '4 large eggs',
        '100g Pecorino Romano',
        'Black pepper to taste'
      ],
      instructions: [
        'Boil pasta in salted water',
        'Fry pancetta until crispy',
        'Mix eggs with cheese',
        'Combine everything while hot',
        'Season with black pepper'
      ]
    },
    {
      emoji: '🍛',
      name: 'Chicken Biryani',
      chef: '@chef_sadia',
      time: '1 hr',
      likes: 120,
      bgColor: '#FFF4D9',
      ingredients: [
        '500g chicken',
        '2 cups basmati rice',
        '2 onions sliced',
        '2 tomatoes chopped',
        '1 cup yogurt',
        'Biryani masala 2 tbsp',
        'Fresh coriander & mint'
      ],
      instructions: [
        'Boil rice until 70% cooked',
        'Fry onions golden brown',
        'Cook chicken with spices & yogurt',
        'Layer rice & chicken alternately',
        'Steam (dum) for 20 minutes'
      ]
    },
    {
      emoji: '🍰',
      name: 'Chocolate Cake',
      chef: '@baker_amal',
      time: '45 min',
      likes: 86,
      bgColor: '#FDEBEE',
      ingredients: [
        '1.5 cups flour',
        '1 cup sugar',
        '1 cup cocoa powder',
        '2 eggs',
        '1 cup milk',
        'Baking powder 1 tsp',
        'Butter 100g'
      ],
      instructions: [
        'Mix dry ingredients',
        'Whisk eggs and milk',
        'Combine all ingredients',
        'Bake at 180°C for 30 mins',
        'Let it cool & add frosting'
      ]
    },
    {
      emoji: '🌯',
      name: 'Chicken Shawarma',
      chef: '@chef_ahmed',
      time: '25 min',
      likes: 58,
      bgColor: '#E8F8FF',
      ingredients: [
        '300g chicken strips',
        'Shawarma spices 1 tbsp',
        'Pita bread',
        'Garlic mayo',
        'Lettuce & tomatoes'
      ],
      instructions: [
        'Marinate chicken with spices',
        'Cook chicken until tender',
        'Warm pita bread',
        'Spread garlic mayo',
        'Add chicken + veggies & wrap'
      ]
    },
    {
      emoji: '🥗',
      name: 'Fresh Veggie Salad',
      chef: '@chef_sara',
      time: '10 min',
      likes: 33,
      bgColor: '#E9FFE2',
      ingredients: [
        'Lettuce leaves',
        'Cucumber sliced',
        'Cherry tomatoes',
        'Olives',
        'Lemon juice & seasoning'
      ],
      instructions: [
        'Wash all vegetables',
        'Cut into bite-sized pieces',
        'Add olives',
        'Season with salt & pepper',
        'Drizzle lemon juice & mix'
      ]
    }
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>FlavorFlow</Text>
          <TouchableOpacity style={styles.profileBtn}>
            <Text style={styles.profileIcon}>👤</Text>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search recipes..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catScroll}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.catPill, activeCategory === cat && styles.catActive]}
              onPress={() => setActiveCategory(cat)}
            >
              <Text style={[styles.catText, activeCategory === cat && styles.catTextActive]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Latest Recipes */}        
        <View style={styles.section}>
          <Text style={styles.title}>Latest Recipes</Text>
          
          {recipes.length === 0 ? (
            <Text style={styles.emptyText}>No recipes found</Text>
          ) : (
            recipes.map((r, i) => (
              <TouchableOpacity 
                key={i} 
                style={styles.recipeCard}
                onPress={() => onNavigate('RecipeDetail', { recipe: r })}
                activeOpacity={0.7}
              >
                {/* Recipe Icon */}
                <View style={[styles.recipeIcon, { backgroundColor: r.bgColor }]}>
                  <Text style={styles.emoji}>{r.emoji}</Text>
                </View>
                
                {/* Recipe Info */}
                <View style={styles.recipeInfo}>
                  <Text style={styles.recipeName} numberOfLines={1}>
                    {r.name}
                  </Text>
                  <Text style={styles.chef} numberOfLines={1}>
                    {r.chef}
                  </Text>
                  <View style={styles.timeBox}>
                    <Text style={styles.clock}>⏱</Text>
                    <Text style={styles.time}>{r.time}</Text>
                  </View>
                </View>
                
                {/* Likes */}
                <View style={styles.likes}>
                  <Text style={styles.heart}>❤️</Text>
                  <Text style={styles.likeCount}>{r.likes}</Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navBtn}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('MyRecipes')} style={styles.navBtn}>
          <Text style={styles.navIcon}>📖</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addBtn} onPress={() => onNavigate('AddRecipe')}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navBtn}
          onPress={() => onNavigate('Explore')}
        >
          <Text style={styles.navIcon}>🧭</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.profileBtn}
          onPress={() => onNavigate('Profile')}
        >
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  scroll: { flex: 1, marginBottom: 70 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 50, paddingBottom: 20 },
  logo: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  profileBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#EEE' },
  profileIcon: { fontSize: 20 },
  searchBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', marginHorizontal: 20, marginBottom: 20, paddingHorizontal: 15, paddingVertical: 12, borderRadius: 12, borderWidth: 1, borderColor: '#EEE' },
  searchIcon: { fontSize: 18, marginRight: 10 },
  searchInput: { flex: 1, fontSize: 15, color: '#333' },
  catScroll: { marginBottom: 20, paddingLeft: 20 },
  catPill: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, backgroundColor: '#FFF', marginRight: 10, borderWidth: 1, borderColor: '#EEE' },
  catActive: { backgroundColor: '#FF6B4A', borderColor: '#FF6B4A' },
  catText: { fontSize: 14, color: '#666', fontWeight: '500' },
  catTextActive: { color: '#FFF', fontWeight: '600' },
  section: { 
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 15 
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 14,
    paddingVertical: 30,
  },
  recipeCard: { 
    flexDirection: 'row', 
    backgroundColor: '#FFF', 
    borderRadius: 16, 
    padding: 15, 
    marginBottom: 15, 
    alignItems: 'center', 
    shadowColor: '#000', 
    shadowOpacity: 0.05, 
    shadowRadius: 8, 
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  recipeIcon: { 
    width: 60, 
    height: 60, 
    borderRadius: 12, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 15 
  },
  emoji: { 
    fontSize: 32 
  },
  recipeInfo: { 
    flex: 1,
    justifyContent: 'center',
  },
  recipeName: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#333', 
    marginBottom: 4 
  },
  chef: { 
    fontSize: 13, 
    color: '#999', 
    marginBottom: 6 
  },
  timeBox: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  clock: { 
    fontSize: 14, 
    marginRight: 4 
  },
  time: { 
    fontSize: 13, 
    color: '#666' 
  },
  likes: { 
    alignItems: 'center',
    marginLeft: 10,
  },
  heart: { 
    fontSize: 18, 
    marginBottom: 2 
  },
  likeCount: { 
    fontSize: 13, 
    color: '#666', 
    fontWeight: '500' 
  },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 12, backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#EEE', elevation: 10 },
  navBtn: { padding: 8 },
  navIcon: { fontSize: 24 },
  addBtn: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#FF6B4A', justifyContent: 'center', alignItems: 'center', marginTop: -28, shadowColor: '#FF6B4A', shadowOpacity: 0.3, shadowRadius: 8, elevation: 8 },
  addText: { fontSize: 28, color: '#FFF', fontWeight: '600' },
});