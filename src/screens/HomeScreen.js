import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, LogBox } from 'react-native'
import React, { useEffect } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Stories from '../components/Stories'
import Feed from '../components/Feed';

const HomeScreen = ({ navigaiton }) => {

    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    }, [])


    return (
        <View style={styles.contaier}>
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
                    <Stories />
                </View>

                {/* Feed  */}
                <View>
                    <Feed />
                </View>

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