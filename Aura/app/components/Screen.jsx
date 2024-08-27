import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen = ({ children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
        <View style={[styles.screen, style]}>
            {children}
        </View>
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        height: '100%'
    },
    view: {
        height: '100%'
    }
})