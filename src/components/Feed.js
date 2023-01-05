import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react'
import data from '../Json/Feed.json'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Video from 'react-native-video'
// import { FlashList } from '@shopify/flash-list';



const hight = Dimensions.get('screen').height;

const Feed = () => {
    var player = useRef()

    const renderItem = (item, index) => {
        return (
            <View key={index}>
                {/* Header */}
                <View style={styles.postHeader}>
                    <View style={styles.nameView}>
                        <Image source={{ uri: item?.image }} style={styles.profileImage} />
                        <Text style={styles.nameText}>{item?.name}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5}>
                        <SimpleLineIcons
                            name='options'
                            size={14}
                        />
                    </TouchableOpacity>
                </View>
                {/* Post  */}
                {item?.type === 'image' ?
                    <View style={{ width: '100%' }}>
                        <Image source={{ uri: item?.postUrl }} style={styles.postImage} resizeMode='cover' />
                    </View>
                    :
                    <Video
                        source={{ uri: item?.postUrl }}
                        style={[styles.postImage, {}]}
                        ref={(ref) => {
                            player = ref
                        }}
                        controls={false}
                        repeat={true}
                        resizeMode={'cover'}
                        onError={(err) => console.error('Video Error', err)}
                    />
                }
                {/* FooterView  */}
                <View style={styles.footerView}>
                    <View style={styles.postFooter}>
                        <View style={styles.footerIconsView}>
                            <SimpleLineIcons
                                name='heart'
                                size={24}
                            />
                            <SimpleLineIcons
                                name='bubble'
                                size={24}
                                style={{ marginHorizontal: 15 }}
                            />
                            <SimpleLineIcons
                                name='paper-plane'
                                size={22}
                            />
                        </View>
                        <View>
                            <SimpleLineIcons
                                name='tag'
                                size={22}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.likeText}>{item?.likes} likes</Text>
                        <Text style={styles.commentPlaceholder}>View all 64 comments</Text>
                    </View>
                </View>
            </View>
        )
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
        <FlatList
            data={data}
            renderItem={({ item, index }) => renderItem(item, index)}
            keyExtractor={(i, inx) => inx.toString()}
            getItemLayout={getItemLayout}
            initialNumToRender={10}
        // onViewableItemsChanged
        />
    )
}

export default Feed

const styles = StyleSheet.create({
    postHeader: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    nameView: {
        flexDirection: "row",
        alignItems: 'center'
    },
    nameText: {
        marginStart: 10,
        color: '#000000',
        fontWeight: '500'
    },
    profileImage: {
        height: 30,
        width: 30,
        borderRadius: 50
    },
    postImage: {
        height: hight - 500,
        width: '100%'
    },
    footerView: {
        marginHorizontal: 16,
        marginBottom: 10
    },
    postFooter: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    footerIconsView: {
        flexDirection: "row",
        alignItems: 'center'
    },
    likeText: {
        color: "#000",
        fontWeight: '600'
    },
    commentPlaceholder: {
        marginTop: 5,
        color: 'grey',
        fontSize: 11
    }
})