import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';
import DrawerContainer from '@/components/navigation/drawerContainer';
import { ComingEvent } from '@/components/dashboard/comingEvent';
import { Ionicons } from '@expo/vector-icons';
import { YourLists } from '@/components/dashboard/yourLists';
import { DailyMotivation } from '@/components/dashboard/note';
import { Container } from '@/components/container';

export default function HomeScreen() {
  return (
    <Container>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        style={{width: '100%', height: '100%'}}
      >

        <View style={styles.panelTitle}>
          <View style={[styles.between, { width: '100%'}]}>
            <Text style={styles.sectionLabel}>Coming Event</Text>
            <Ionicons name="ellipsis-horizontal" size={18} color={"black"}/>
          </View>
          <View style={styles.orangeLine}/>
          <Text style={styles.info}>Here you can see an upcoming event.</Text>
        </View>

        <ComingEvent />
        <View style={styles.panelTitle}>
          <View style={[styles.between, { width: '100%'}]}>
            <Text style={styles.sectionLabel}>Note</Text>
            <Ionicons name="ellipsis-horizontal" size={18} color={"black"}/>
          </View>
          <View style={styles.orangeLine}/>
          <Text style={styles.info}>You can add here a note, which contains your afirmation or anything you want.</Text>
        </View>

        <DailyMotivation />

        <View style={styles.panelTitle}>
          <View style={[styles.between, { width: '100%'}]}>
            <Text style={styles.sectionLabel}>Your Targets</Text>
            <View style={[styles.between, {gap: 10}]}>
              <Ionicons name="add" size={20} color="black"/>
              <Ionicons name="ellipsis-horizontal" size={18} color={"black"}/>
            </View>
            
          </View>
          <View style={styles.orangeLine}/>
          <Text style={styles.info}>Here is a list of your goals. Click to go to editing.</Text>
        </View>

        <YourLists />

        <View style={styles.panelTitle}>
          <View style={[styles.between, { width: '100%'}]}>
            <Text style={styles.sectionLabel}>Daily</Text>
            <View style={[styles.between, {gap: 10}]}>
              <Ionicons name="add" size={20} color="black"/>
              <Ionicons name="ellipsis-horizontal" size={18} color={"black"}/>
            </View>
            
          </View>
          <View style={styles.orangeLine}/>
          <Text style={styles.info}>Your daily habits.</Text>
        </View>
      </ScrollView>
    </Container>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  scrollContainer: {
    gap: 10
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
    fontWeight: '600',
  },
  between: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  moreText: {
    fontSize: 14
  },
  marginTop: {
    marginTop: 20
  },
  panelTitle: {
    width: '100%',
    display: 'flex',
    marginTop: 20

  },
  info: {
    color: '#888'
  },
  orangeLine: {
    width: '40%',
    borderRadius: 5,
    elevation: 2,
    height: 2,
    backgroundColor: 'darkorange'
  }
});
