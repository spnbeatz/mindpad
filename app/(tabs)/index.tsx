import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';
import Sidebar from '@/components/navigation/sidebar';
import { ComingEvent } from '@/components/dashboard/comingEvent';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <Sidebar direction='left' title='Dashboard'>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        style={{width: '100%', height: '100%'}}
      >
        <View style={[styles.between, { width: '100%'}]}>
          <Text style={styles.sectionLabel}>Coming Event</Text>
          <Ionicons name="ellipsis-horizontal" size={18} color={"black"}/>
        </View>
        
        <ComingEvent />

        <View style={[styles.between, { width: '100%', marginTop: 15}]}>
          <Text style={styles.sectionLabel}>Your Lists</Text>
          <Ionicons name="ellipsis-horizontal" size={18} color={"black"}/>
        </View>
      </ScrollView>
    </Sidebar>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  scrollContainer: {
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  sectionLabel: {
    paddingVertical: 4,
    fontSize: 18,
    fontWeight: '500'
  },
  between: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
},
moreText: {
  fontSize: 14
}
});
