import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { memo } from 'react'
// import { FlashList } from '@shopify/flash-list';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FastImage from 'react-native-fast-image'

const StoriesCard = (props) => {

    const item = props.data?.item;
    const index = props.data?.index;

    // const renderItem = (item, index) => {
    //     return (

    //     )
    // }

    const listHeaderView = () => {
        return (
            <View style={styles.cardView}>
                <TouchableOpacity style={[styles.roundCard, { borderColor: 'grey' }]} activeOpacity={0.7}>
                    <FontAwesome5
                        name={'plus-square'}
                        size={30}
                        color={'#000000'}
                    />
                </TouchableOpacity>
                <Text style={[styles.name, { color: 'grey' }]} numberOfLines={1} ellipsizeMode='tail'>
                    Your Story
                </Text>
            </View>
        )
    }

    return (
        <>
            {index === 0 && listHeaderView()}
            <View style={styles.cardView} key={index}>
                <TouchableOpacity style={styles.roundCard} activeOpacity={0.7} onPress={props.onPress}>
                    <FastImage
                        source={{
                            uri: item?.image,
                            cache: FastImage.cacheControl.immutable,
                            // priority: FastImage.priority.low
                        }}
                        style={styles.Image}

                    />
                </TouchableOpacity>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode='tail'>
                    {item.name}
                </Text>
            </View>
        </>
    )
}
export default memo(StoriesCard)

const styles = StyleSheet.create({
    cardView: {
        alignItems: 'center',
        marginTop: 10,
    },
    roundCard: {
        height: 70,
        width: 70,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 50,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image: {
        height: 62,
        width: 62,
        borderRadius: 50,
    },
    name: {
        width: 60,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
        fontSize: 12,
        color: '#000010'
    }
})