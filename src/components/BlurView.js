import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BlurView = ({ children, ...props }) => {
    return (
        <View>
            {children}
            {props.visible &&
                <View style={{ position: 'absolute', height: '100%', width: '100%', backgroundColor: '#FFFFFFA1', alignItems: "center", justifyContent: "center" }}>
                    <Text>This is lOCked</Text>
                </View>
            }
        </View >
    )
}

export default BlurView

const styles = StyleSheet.create({})