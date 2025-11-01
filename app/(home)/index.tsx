import { Button } from '@react-navigation/elements';
import { Link } from 'expo-router';
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.coontainer} >

      <Text>Stack Navigater</Text>
      <Link href='/second' push asChild>
        <Button>Push to second page</Button>
      </Link>

      <Link 
        href={{
          pathname: '/second',
          params: {name: "Thomas"}
        }} 
        push asChild>
        <Button>Parameter Buttton</Button>
      </Link>

      <Link href="/details/2" asChild>
      {/* <Link 
        href={{
          pathname: '/details/[id]',
          params: {id: "2"}
        }} push asChild> */}
        <Button>Proverb Button</Button>
      </Link>

    </View>

  );
}

const styles = StyleSheet.create({
  coontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});