import { View, StyleSheet, TextInput, Modal, Dimensions, FlatList, TouchableOpacity, Text } from "react-native";
import { Feather, Octicons, Ionicons} from "@expo/vector-icons";
import { useState, useCallback, useRef, useEffect } from "react";
import { whiteSemiTransparent } from "@/constants/Colors";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, withDelay } from 'react-native-reanimated';
import { LinearGradient } from "expo-linear-gradient";
import { Easing } from 'react-native-reanimated';
import { SearchList } from "./SearchList";



const { height, width } = Dimensions.get("window");

export const SearchModal = ({
    closeSearch,
    searchOpen
}:{
    closeSearch: () => void,
    searchOpen: boolean
}) => {

    const [search, setSearch] = useState('');
    const [results, setResults] = useState<string[]>([]);
    const searchInputRef = useRef<TextInput | null>(null);

    const topValue = useSharedValue(130);
    const heightValue = useSharedValue(50);
    const inputWidthValue = useSharedValue(100);
    const iconScaleValue = useSharedValue(0);

    const topStyle = useAnimatedStyle(() => {
        return {
            top: topValue.value
        }
    })

    const heightStyle = useAnimatedStyle(() => {
        return {
            height: heightValue.value
        }
    });

    const inputWidthStyle = useAnimatedStyle(() => {
        return {
            width: `${inputWidthValue.value}%`
        }
    })

    const iconScaleStyle = useAnimatedStyle(()=>{
        return {
            transform: [{scale: iconScaleValue.value}]
        }
    })

    const focus = () => {
        searchInputRef.current?.focus();
    }

    useEffect(() => {

        topValue.value = withDelay(0, withTiming(0, {duration: 200, easing: Easing.inOut(Easing.exp)}));
        heightValue.value = withDelay(0, withTiming(height, { duration: 300 }));
        inputWidthValue.value = withDelay(400, withTiming(80, { duration: 200 }));
        iconScaleValue.value = withDelay(800, withSpring(1, { duration: 200 }))
        setTimeout(() => {
            focus();
        }, 1000)
    },[]);

    useEffect(() => {
        if(search.length < 1){
            setResults([]);
        }
    }, [search])


    const handleSearch = useCallback((text: string) => {
        const dummyResults = ['Item 1', 'Item 2', 'Item 3'].filter(item =>
          item.toLowerCase().includes(text.toLowerCase())
        );
        setResults(dummyResults);
      }, []);

      const clearSearch = () => {
        setSearch('');
        setResults([]);
    }

    const closeModal = useCallback(() => {
        setSearch('');
        setResults([]);
        closeSearch();
    }, []);

    return (
        <Modal
            transparent={true}
            visible={searchOpen}
            animationType="none"
            onRequestClose={closeModal}
            style={{padding: 20}}
        >
            <View style={styles.modalBackground}>


                <Animated.View style={[
                    styles.modalContainer, 
                    searchOpen && {
                        top: 130,
                        paddingHorizontal: 25,
                        paddingVertical: 50
                    },
                    topStyle, 
                    heightStyle]}>
                        <LinearGradient style={styles.linearGradient} colors={['#021026', '#2b0d63']}/>
                        <Animated.View style={[styles.filterIconWrapper, iconScaleStyle]}>
                            <Octicons name="filter" size={20} color={whiteSemiTransparent} style={styles.filterIcon}/>
                        </Animated.View>
                        <View style={styles.inputContainerWrapper}>
                            <Animated.View style={[styles.inputWrapper, inputWidthStyle]}>
                                <Feather name='search' size={20} color={whiteSemiTransparent} style={[styles.iconInsideInput, { left: 10 }]} />
                                <TextInput
                                    style={styles.searchInput}
                                    placeholder="Search..."
                                    value={search}
                                    ref={searchInputRef}
                                    autoFocus={false}
                                    placeholderTextColor={whiteSemiTransparent}
                                    onChangeText={(text) => {
                                        setSearch(text);
                                        handleSearch(text);
                                    }}
                                    onPress={focus}
                                />
                                {search.length > 0 && (
                                    <Ionicons
                                        name='close'
                                        size={15} 
                                        color={whiteSemiTransparent} 
                                        style={[styles.iconInsideInput, { right: 10 }]}
                                        onPress={clearSearch}
                                    />
                                )}

                                
                            </Animated.View>
                        </View>
                        {results.length > 0 && <SearchList results={results} />}
                </Animated.View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 25,
        position: 'absolute',
        top: 150,
        height: 50,
        backgroundColor: '#080724',
        zIndex: 50,
        elevation: 5,
        overflow: 'hidden'

    },
    iconInsideInput: {
        position: 'absolute',
        padding: 10,
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
        height: 50,
        borderRadius: 20,
        paddingHorizontal: 40,
        paddingLeft: 55,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: whiteSemiTransparent,
        position: 'absolute',
        left: 0
        
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
      modalBackground: {
        flex: 1,

        alignItems: 'center'
      },
      inputContainerWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start'
      },
      filterIcon: {

      },
      filterIconWrapper: {
        width: 50,
        height: 50,
        position: 'absolute',

        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        top: 25,
        right: 25,
        zIndex:51,
        backgroundColor: 'rgba(255,255,255,0.1)'
      },
      linearGradient: {
        width: width,
        height: height,
        position: 'absolute',
        top: 0
      },
})