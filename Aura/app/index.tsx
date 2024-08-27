import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>Index</Text>
      <Link href="/profile">Go to Profile</Link>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})