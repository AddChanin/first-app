import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Button } from '@react-navigation/elements'


export default function SecondScreen() {
  return (
    <View style={styles.coontainer}>
      <Text className='justify-center flex-1 p-4'>
        This is third page
      </Text>
      <Link href="/" push asChild>
        <Button>Push to /</Button>
      </Link>
      <Link href="/" push asChild>
        <Button>Dismiss to homepage</Button>
      </Link>
      <Link href="/second" push asChild>
        <Button>Go to second</Button>
      </Link>
    </View>
  )
}


const styles = StyleSheet.create({
  coontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE5B4'
  }
});