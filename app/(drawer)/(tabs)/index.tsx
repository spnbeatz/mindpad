import { StyleSheet, FlatList, View } from 'react-native';
import { ComingEvent } from '@/components/dashboard/comingEvent';
import { YourLists } from '@/components/dashboard/yourLists';
import { DailyMotivation } from '@/components/dashboard/note';
import { Container } from '@/components/container';
import { Header } from '@/components/dashboard/Header';
import { SearchButton } from '@/components/SearchButton';
import { SearchModal } from '@/components/SearchModal';
import { useState } from 'react';
import { YourTargetsList } from '@/components/dashboard/YourTargetsList';

export default function HomeScreen() {

  const [ searchOpen, setSearchOpen ] = useState<boolean>(false);

  return (
    <Container>
      {!searchOpen && <SearchButton openSearch={() => setSearchOpen(true)} />}
      {searchOpen && <SearchModal closeSearch={() => setSearchOpen(false)} searchOpen={searchOpen}/>}
{/*       <FlatList
        data={sections} // Przekazywanie sekcji do FlatList
        contentContainerStyle={styles.scrollContainer}
        keyExtractor={(item) => item.key} // Używamy unikalnego klucza sekcji jako key
        renderItem={({ item }) => (
          <View style={styles.sectionContainer}>
            {item.component}
          </View>
        )}
      /> */}
      <Header />
      <YourTargetsList />
    </Container>
  );
}

// Style
const styles = StyleSheet.create({
  scrollContainer: {
    gap: 10,
  },
  sectionContainer: {
  },
});
