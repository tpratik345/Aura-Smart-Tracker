import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Screen from './../components/Screen';
import { Formik } from 'formik';

const LoginScreen = () => {
  return (
      <Screen style={styles.container}>
        {/* <Text>Login Comp</Text> */}
        <Formik 
          onSubmit={() => console.log('')}
        >
          <TextInput 
            placeholder='text'
            />
        </Formik>
      </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    
  }
})