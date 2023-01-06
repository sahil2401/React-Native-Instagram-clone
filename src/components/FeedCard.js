import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useRef, memo } from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Video from 'react-native-video'
import InView from 'react-native-component-inview'
import FastImage from 'react-native-fast-image'
// import { FlashList } from '@shopify/flash-list';



const hight = Dimensions.get('screen').height;

const FeedCard = (props) => {
    const [isPaused, setisPaused] = useState(false);

    const item = props.data?.item;
    const index = props.data?.index;

    const handleVideo = (isVisible) => {
        isVisible ? setisPaused(false) : setisPaused(true)
    }

    return (
        <View key={index}>
            {/* Header */}
            <View style={styles.postHeader}>
                <View style={styles.nameView}>
                    <Image
                        source={{
                            uri: item?.image,
                            // cache: FastImage.cacheControl.cacheOnly,
                            // priority: FastImage.priority.low

                        }}
                        style={styles.profileImage}

                    />
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
                    <FastImage
                        source={{
                            uri: item?.postUrl,
                            cache: FastImage.cacheControl.immutable,
                            // priority: FastImage.priority.
                        }}
                        style={styles.postImage}
                        resizeMode={'cover'}
                    />
                </View>
                :
                <InView onChange={(isVisible) => handleVideo(isVisible)}>
                    <Video
                        source={{ uri: item?.postUrl }}
                        style={[styles.postImage, {}]}
                        // ref={(ref) => {
                        //     player = ref
                        // }}
                        paused={isPaused}
                        rate={1.0}
                        volume={1.0}
                        muted={false}
                        controls={false}
                        repeat={true}
                        resizeMode={'cover'}
                        playInBackground={false}
                        playWhenInactive={false}
                        ignoreSilentSwitch={'ignore'}
                        onError={(err) => console.error('Video Error', err)}
                    />
                </InView>
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

export default memo(FeedCard)

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