import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import { Button } from '@react-navigation/elements'
import { LocalRouteParamsContext } from 'expo-router/build/Route'


export default function SecondScreen() {

  const params = useLocalSearchParams<{name?: string}>();

  return (
    <View style={styles.coontainer}>
      <Text>
        This is second page
      </Text>

      {params.name ? (
        <Text>
          Hello, <Text>{params.name}</Text>
        </Text>
      ):null}

      <Link href="/third" push asChild>
        <Button>Push to third</Button>
      </Link>

    </View>
  )
}

const styles = StyleSheet.create({
  coontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFDD0'
  }
});