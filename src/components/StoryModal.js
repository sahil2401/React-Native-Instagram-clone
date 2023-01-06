import { StyleSheet, Text, View, Modal, Dimensions, Image, StatusBar, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef, useEffect } from 'react'
import Carousel from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const StoryModal = (props) => {

    const carousel = useRef();

    // console.log('index', props.index)

    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                {/* <Text style={styles.title}>{item?.name}</Text> */}
                <View style={{ height: height - 200, width: width, alignItems: "center" }}>
                    <ImageBackground
                        source={{
                            uri: item?.image,
                            cache: FastImage.cacheControl.immutable,
                            // priority: FastImage.priority.low
                        }}
                        style={styles.Image}
                        resizeMode={FastImage.resizeMode.cover}
                    >
                        <View style={styles.storyTitleView}>
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
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <SimpleLineIcons
                                    name='options'
                                    size={20}
                                    color={'#FFFFFF'}
                                />
                                <TouchableOpacity onPress={() => props.onSwipeDown()}>
                                    <SimpleLineIcons
                                        name='close'
                                        size={28}
                                        color={'#FFFFFF'}
                                        style={{ marginStart: 20, marginEnd: 25 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                    {/* Send Text */}
                    <View style={{ width: '100%', flexDirection: "row", alignItems: "center", marginTop: 20 }}>
                        <View style={{ width: '85%' }}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder={'Send Message'}
                                placeholderTextColor={'#FFFFFF'}
                            />
                        </View>
                        <SimpleLineIcons
                            name='heart'
                            size={30}
                            color={'#FFFFFF'}
                        />
                    </View>
                </View>
            </View>
        );
    }

    // useEffect(() => {
    //     if (carousel) {
    //         carousel.current?.scrollToIndex({ animated: true, index: props?.index })
    //     }
    // }, [carousel])


    return (
        <GestureRecognizer onSwipeDown={() => props.onSwipeDown()} style={{ flex: 1 }}>
            <StatusBar barStyle={'light-content'} />
            <Modal
                visible={props?.visible}
                animationType={'fade'}
                hardwareAccelerated
                style={{ height: 50 }}
            >
                {/* {props.index && */}
                <Carousel
                    layout='stack'
                    ref={carousel}
                    data={props?.data}
                    renderItem={_renderItem}
                    sliderWidth={width}
                    itemWidth={width}
                    // onSnapToItem={(index)=> {} }
                    firstItem={props.index}
                />
                {/* } */}
            </Modal>
        </GestureRecognizer>
    )
}

export default StoryModal

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        color: "Black"
    },
    Image: {
        height: height - 220,
        width: width,
    },
    storyTitleView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#00000040',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    nameView: {
        margin: 15,
        flexDirection: "row",
        alignItems: 'center'
    },
    nameText: {
        marginStart: 10,
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 16
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#FFFFFF'
    },
    TextInput: {
        // width: "70%",
        height: 40,
        marginStart: 15,
        marginEnd: 30,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 20
    }
})