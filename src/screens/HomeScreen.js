import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, LogBox, FlatList, StatusBar, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import StoriesCard from '../components/StoriesCard'
import FeedCard from '../components/FeedCard';
import feedData from '../Json/Feed.json'
import storyData from '../Json/Stories.json'
import StoryModal from '../components/StoryModal';

const HomeScreen = () => {

    const [visible, setvisible] = useState(false)
    const [visibleStoryIndex, setvisibleStoryIndex] = useState()

    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    }, [])

    const StoryPressHandler = (index) => {
        setvisibleStoryIndex(index)
        setvisible(true)
    }

    const ITEM_HEIGHT = 65; // fixed height of item component
    const getItemLayout = (data, index) => {
        return {
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * data.length,
            index,
        };
    };

    return (
        <View style={styles.contaier}>
            {visible &&
                <StoryModal visible={visible} data={storyData} index={visibleStoryIndex} onSwipeDown={() => setvisible(false)} />
            }
            {/* Header  */}
            <View style={styles.header}>
                <Image
                    source={require('../assets/Images/igText.png')}
                    style={styles.IgImage}
                    resizeMode='contain'
                />
                <View style={styles.HeaderIcons}>
                    <TouchableOpacity style={{ marginEnd: 20 }}>
                        <FontAwesome5
                            name={'plus-square'}
                            size={26}
                            color={'#000000'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome5
                            name={'comment'}
                            size={26}
                            color={'#000000'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Stories  */}
                <View style={{ borderBottomWidth: 1, borderColor: 'lightgrey' }}>
                    <FlatList
                        data={storyData}
                        renderItem={(items) => {
                            return <StoriesCard data={items} onPress={() => StoryPressHandler(items?.index)} />
                        }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        getItemLayout={getItemLayout}
                        initialNumToRender={6}
                        maxToRenderPerBatch={2}
                        onEndReachedThreshold={0.1}
                        bounces={false}
                    />

                </View>
                {/* Feed  */}
                <FlatList
                    data={feedData}
                    renderItem={(items) => {
                        return <FeedCard data={items} />
                    }}
                    keyExtractor={(i, inx) => inx.toString()}
                    getItemLayout={getItemLayout}
                    initialNumToRender={2}
                    maxToRenderPerBatch={2}
                    onEndReachedThreshold={0.1}
                    bounces={false}
                />
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    contaier: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 5,
    },
    IgImage: {
        height: 50,
        width: 150
    },
    HeaderIcons: {
        flexDirection: 'row',
        marginEnd: 20
    },
})