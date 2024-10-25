import React, { useState, useRef, useCallback } from 'react';
import { View, Modal, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, withDelay } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';

// Komponent dla ikony wyszukiwania
const SearchIcon = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity style={styles.searchIcon} onPress={onPress}>
    <Icon name="search" />
  </TouchableOpacity>
);

// Komponent dla pola wyszukiwania
const SearchInput = ({
  search,
  onChangeText,
  clearSearch
}: {
  search: string;
  onChangeText: (text: string) => void;
  clearSearch: () => void;
}) => {
  return (
    <View style={styles.inputWrapper}>
      <AntDesign name='search1' size={20} color={'black'} style={[styles.iconInsideInput, { left: 0 }]} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={search}
        onChangeText={onChangeText}
      />
      {search.length > 0 && (
        <AntDesign 
          name='close' 
          size={15} 
          color={'black'} 
          style={[styles.iconInsideInput, { right: 0 }]}
          onPress={clearSearch}
        />
      )}
    </View>
  );
};

// Komponent dla listy wyników wyszukiwania
const ResultsList = ({ results, onItemPress }: { results: string[], onItemPress: () => void }) => (
  <>
    {results.length < 1 ? (
      <Text>No results...</Text>
    ) : (
      <FlatList
        data={results}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={onItemPress}>
            <Text style={styles.resultItem}>{item}</Text>
          </TouchableOpacity>
        )}
        style={styles.resultsList}
      />
    )}
  </>
);

const SearchComponent = () => {
  const [search, setSearch] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const searchInputRef = useRef<TextInput | null>(null);

  const modalTransform = useSharedValue(-100);

  const modalStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: modalTransform.value }],
    };
  });

  // Funkcja wyszukiwania
  const handleSearch = useCallback((text: string) => {
    const dummyResults = ['Item 1', 'Item 2', 'Item 3'].filter(item =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setResults(dummyResults);
  }, []);

  // Zamknięcie modalnego
  const closeModal = useCallback(() => {
    setSearch('');
    setResults([]);
    searchInputRef.current?.blur();
    modalTransform.value = withSpring(-100);
    setTimeout(() => setIsSearchOpen(false), 100);
  }, []);

  // Otwarcie modalnego
  const openModal = useCallback(() => {
    setIsSearchOpen(true);
    setTimeout(() => searchInputRef.current?.focus(), 200);
    modalTransform.value = withDelay(0, withTiming(0, { duration: 150 }));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <SearchIcon onPress={openModal} />
      </View>

      <Modal
        transparent={true}
        visible={isSearchOpen}
        animationType="none"
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <Animated.View style={[styles.modalContainer, modalStyle]}>
            <SearchInput 
              search={search}
              onChangeText={(text) => {
                setSearch(text);
                handleSearch(text);
              }}
              clearSearch={() => {
                setSearch('');
                setResults([]);
              }}
            />
            <ResultsList results={results} onItemPress={closeModal} />
          </Animated.View>
          <TouchableOpacity onPress={closeModal} style={styles.closeBackground} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    height: '100%',
    position: 'relative'
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 20,
  },
  modalContainer: {
    position: 'absolute',
    width: '100%',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
    top: 0,
    zIndex: 10,
    gap: 15,
    paddingTop: 25,
  },
  textInputContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 50,
    position: 'absolute',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 40,
    width: '100%',
  },
  inputWrapper: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    padding: 10,
    position: 'absolute',
    right: 0,
  },
  resultsList: {
    maxHeight: 200,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  iconInsideInput: {
    position: 'absolute',
    padding: 10,
  },
  closeBackground: {
    top: 60,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    zIndex: 1,
  },
});

export default SearchComponent;


