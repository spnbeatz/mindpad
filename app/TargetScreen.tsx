import { Container } from "@/components/container";
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { TargetProps } from "@/components/TargetListItem";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useEffect, useState, useRef } from "react";
import { Loading } from "@/components/Loading";
import { LinearGradient } from "expo-linear-gradient";
import { TargetTasksContainer } from "@/components/TargetTasksContainer";
import { whiteLessTransparent, whiteSemiTransparent } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { InitialsBox } from "@/components/InitialsBox";
import { TargetHabitsContainer } from "@/components/TargetHabitsContainer";

type RouteParams = {
    params: {
        target: string;
    };
};

type AnswerProps = {
    importance: string;
    limitations: string;
    outcomes: string;
};

interface InfoType {
    question: string;
    data: keyof AnswerProps; // Użycie klucza z AnswerProps
}

const exampleDate = new Date();

const tabsButtons = ['Tasks', 'Habits', 'Notes'];

const infoQuestions: InfoType[] = [
    { question: "Why is this goal important?", data: 'importance' },
    { question: "What are the limitations of this goal?", data: 'limitations' },
    { question: "What outcomes do you expect?", data: 'outcomes' }
];

const exampleAnswers: AnswerProps = {
    importance: 'This goal is important because I want to become a programmer and be smarter.',
    limitations: 'The main limitation is time.',
    outcomes: 'I expect that my IQ will increase.'
};

export default function TargetScreen() {
    const router = useRouter();
    const route = useRoute<RouteProp<RouteParams, 'params'>>();
    const { target } = route.params;
    const tabsListRef = useRef<FlatList>(null);
    const [targetData, setTargetData] = useState<TargetProps | null>(null);
    const [activeTab, setActiveTab] = useState<string>(tabsButtons[0]);

    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    useEffect(() => {
        if (target) {
            setTargetData(JSON.parse(target));
        }
    }, [target]);

    const tabs = [<TargetTasksContainer key="tasks" />, <TargetHabitsContainer key="habits" />];

    const scrollToTaskGroup = (index: number) => {
        tabsListRef.current?.scrollToIndex({ index, animated: true });
    };

    if (!targetData) {
        return <Loading />;
    }

    return (
        <Container>
            <TouchableOpacity style={styles.addButtonWrapper}>
                <LinearGradient 
                    style={styles.addButton} 
                    colors={targetData.colors} 
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                >
                    <Feather name='plus' size={40} color={'#291559'}/>
                </LinearGradient>
            </TouchableOpacity>

            <View style={styles.header}>
                <View style={styles.topHeader}>
                    <Feather 
                        name='chevron-left' 
                        size={30} 
                        color={whiteLessTransparent} 
                        onPress={() => router.back()}
                        style={{ marginLeft: -5 }}
                    />
                    <View style={styles.titleContainer}>
                        <Text style={styles.headerTitle}>{targetData.title}</Text>
                    </View>
                    <Feather name='more-vertical' size={20} color={whiteLessTransparent} />
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.infoTimeBox}>
                        <Feather name='clock' size={15} color={'#0f173b'} />
                        <Text style={styles.infoTimeText}>{exampleDate.toDateString()}</Text>
                    </View>
                    <View style={styles.categoryBox}>
                        <Text style={styles.categoryText}>Books</Text>
                    </View>
                    <InitialsBox colors={targetData.colors} initials={targetData.initials} />
                </View>

                <View style={styles.descriptionContainer}>
                    {infoQuestions.map((info) => (
                        <View key={info.data} style={styles.questionAnswerBox}>
                            <Text style={styles.descriptionLabel}>{info.question}</Text>
                            <Text style={styles.answerText}>{exampleAnswers[info.data]}</Text>
                        </View>
                    ))}
                </View>
                
            </View>
            
            <View style={styles.tabsContainer}>
                <View style={styles.tabsButtons}>
                    {tabsButtons.map((tab, index) => {
                        const active = index === selectedIndex;
                        return (
                            <Text 
                                key={tab}
                                onPress={() => {
                                    setActiveTab(tab)
                                    setSelectedIndex(index)
                                    scrollToTaskGroup(index);
                                }}
                                style={[
                                    styles.tabButtonText, 
                                    { 
                                        transform: [{ scale: active ? 1.4 : 1 }],
                                        color: active ? 'white' : whiteSemiTransparent
                                    }
                                ]}
                            >
                                {tab}
                            </Text>
                        );
                    })}
                </View>
                <LinearGradient 
                    style={styles.flatListLinear} 
                    colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0)']}
                >
                    <FlatList
                        style={styles.tabsList}
                        ref={tabsListRef}
                        horizontal
                        data={tabs}
                        snapToAlignment="start"
                        pagingEnabled
                        keyExtractor={(item, index) => `tab-${index}`} // Lepsze klucze dla tabów
                        renderItem={({ item }) => item}
                        onScrollToIndexFailed={() => {}}
                        
                        onViewableItemsChanged={({ viewableItems }) => {
                            const visibleItem = viewableItems[0];
                            if (visibleItem) {
                                setSelectedIndex(visibleItem.index ?? 0);
                            }
                        }}
                        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
                    />
                </LinearGradient>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    header: {
        height: '45%',
        justifyContent: 'flex-start',
        width: '100%',
        paddingVertical: 30,

    },
    topHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: whiteSemiTransparent,
        borderBottomWidth: 0.3
    },
    headerTitle: {
        fontSize: 20,
        color: whiteLessTransparent,
        fontWeight: 'bold',
        width: '100%',

    },
    targetName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        width: '100%'
    },
    backgroundImage: {
        position: 'absolute',
        width: '200%',
        height: '400%',
        opacity: 0.4,
        marginLeft: -20,
        marginTop: -20
    },
    tabsList: {
        width: '100%',

    },
    block: {
        height: '45%',

        width: '100%',
        paddingVertical: 20
    },
    flatListLinear: {
        height: '100%',
        width: '100%',
        paddingTop: 30,
        borderTopWidth: 2,
        borderColor: 'rgba(255,255,255,0.1)'
    },
    tabsContainer: {
        width: '120%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabsButtons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    tabButtonText: {
        color: whiteSemiTransparent,
        fontSize: 14,
        paddingVertical: 10,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'

    },
    titleContainer: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,


    },
    infoContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 10,
        gap: 15
    },
    infoTimeBox: {
        height: 25,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: whiteLessTransparent,
        borderRadius: 5,
        gap: 5
    },
    infoTimeText: {
        fontSize: 12,
        color: '#0f173b',
        fontWeight: '600'
    },
    infoBoxRight: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
    },
    categoryBox: {
        height: 25,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: whiteLessTransparent,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    categoryText: {
        color: whiteLessTransparent,
        fontSize: 12
    },
    descriptionContainer: {
        width: '100%',
        borderRadius: 15,
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 15,
        marginTop: 15
    },
    descriptionLabel: {
        fontSize: 15,
        fontWeight: 'bold',
        color: whiteLessTransparent
    },
    questionAnswerBox: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 5,

    },
    answerText: {
        color: whiteSemiTransparent,
         fontSize: 13
    },
    addButton: {
        padding: 10,
        borderRadius: 50,

    },
    addButtonWrapper: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        zIndex: 50,
        elevation: 5
    }
})