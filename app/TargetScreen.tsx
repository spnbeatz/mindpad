import { Container } from "@/components/container";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { TargetProps } from "@/components/TargetListItem";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Loading } from "@/components/Loading";
import { LinearGradient } from "expo-linear-gradient";
import { TargetTasksContainer } from "@/components/TargetTasksContainer";
import { whiteLessTransparent, whiteSemiTransparent } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type RouteParams = {
    params: {
        target: string;
    };
};

const tabsButtons = ['Tasks', 'Habits', 'Notes'];

export default function TargetScreen() {

    const router = useRouter();

    const route = useRoute<RouteProp<RouteParams, 'params'>>();
    const { target } = route.params;

    const [ targetData, setTargetData ] = useState<TargetProps | null>(null)
    const [ activeTab, setActiveTab ] = useState<string>(tabsButtons[0]);

    useEffect(() => {
        if(target) {
            setTargetData(JSON.parse(target))
        }
    },[target]);

    const tabs = [<TargetTasksContainer/>]

    if(!targetData) {
        return (
            <Loading />
        )
    }

    return (
        <Container>
            <View style={styles.header}>
                <View style={styles.topHeader}>
                    <Feather name='chevron-left' size={30} color={whiteLessTransparent} onPress={() => router.back()}/>
                    <Text style={styles.headerTitle}>{targetData.title}</Text>
                </View>
            </View>
{/*             <LinearGradient style={styles.header} colors={targetData.colors}>
                <Image source={targetData.backgroundImage} style={styles.backgroundImage}/>
                <Text style={styles.targetName}>{targetData.title}</Text>
            </LinearGradient> */}
            <View style={styles.tabsContainer}>
                <View style={styles.tabsButtons}>
                    {tabsButtons.map((tab) => {
                        const active = tab === activeTab;
                        return (
                            <Text 
                                onPress={() => setActiveTab(tab)}
                                style={[
                                    styles.tabButtonText, 
                                    { 
                                        transform: [{scale: active ? 1.4 : 1}],
                                        color: active ? 'white' : whiteSemiTransparent
                                    }
                                ]}>{tab}</Text>
                        )
                    })}
                </View>
                <LinearGradient 
                    style={styles.flatListLinear} 
                    colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0)']}
                    
                >
                    <FlatList
                        style={styles.tabsList}

                        horizontal
                        data={tabs}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => item}
                    />
                </LinearGradient>
            </View>


        </Container>
    )
}

const styles = StyleSheet.create({
    header: {
        height: '45%',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 30
    },
    topHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10
    },
    headerTitle: {
        fontSize: 20,
        color: whiteLessTransparent,
        fontWeight: 'bold'
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

    }
})