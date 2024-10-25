import { StyleSheet, FlatList, View } from 'react-native';
import { ComingEvent } from '@/components/dashboard/comingEvent';
import { YourLists } from '@/components/dashboard/yourLists';
import { DailyMotivation } from '@/components/dashboard/note';
import { Container } from '@/components/container';
import { Header } from '@/components/dashboard/Header';

// Dane dotyczące sekcji, które będą renderowane przez FlatList
const sections = [
  {
    key: 'comingEvent',
    component: <ComingEvent/>, // Komponent do renderowania dla tej sekcji
  },
  {
    key: 'dailyMotivation',
    component: <DailyMotivation/>,
  },
  {
    key: 'yourLists',
    component: <YourLists/>,
  },
  // Dodaj więcej sekcji według potrzeby
];

export default function HomeScreen() {
  return (
    <Container>
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
