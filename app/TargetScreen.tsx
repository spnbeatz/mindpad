import { Container } from "@/components/container";
import { Text, View, StyleSheet, Image } from "react-native";
import { TargetProps } from "@/components/TargetListItem";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Loading } from "@/components/Loading";
import { LinearGradient } from "expo-linear-gradient";

type RouteParams = {
    params: {
        target: string;
    };
};

export default function TargetScreen() {

    const route = useRoute<RouteProp<RouteParams, 'params'>>();
    const { target } = route.params;

    const [ targetData, setTargetData ] = useState<TargetProps | null>(null)

    useEffect(() => {
        if(target) {
            setTargetData(JSON.parse(target))
        }
    },[target]);

    if(!targetData) {
        return (
            <Loading />
        )
    }

    return (
        <Container>
            <LinearGradient style={styles.header} colors={targetData.colors}>
                <Image source={targetData.backgroundImage} style={styles.backgroundImage}/>
                <Text style={styles.targetName}>{targetData.title}</Text>
            </LinearGradient>
        </Container>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        borderRadius: 15,
        elevation: 5,
        padding: 20,
        marginTop: 50,
        overflow: 'hidden',
        height: 200
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
    }
})