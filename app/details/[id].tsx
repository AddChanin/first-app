import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const proverbs = [
  { id: "1", proverb: "The best time to plant a tree was 20 years ago. The second best time is now.", source: "Chinese Proverb" },
  { id: "2", proverb: "Fall seven times, stand up eight.", source: "Japanese Proverb" },
  { id: "3", proverb: "A journey of a thousand miles begins with a single step.", source: "Lao Tzu" },
  { id: "4", proverb: "Where there is no struggle, there is no strength.", source: "Oprah Winfrey" },
  { id: "5", proverb: "If you want to go fast, go alone. If you want to go far, go together.", source: "African Proverb" },
  { id: "6", proverb: "Smooth seas do not make skillful sailors.", source: "African Proverb" },
  { id: "7", proverb: "Do not be afraid of growing slowly, be afraid only of standing still.", source: "Chinese Proverb" },
  { id: "8", proverb: "The only limit to our realization of tomorrow is our doubts of today.", source: "Franklin D. Roosevelt" },
  { id: "9", proverb: "He who asks is a fool for five minutes, but he who does not ask remains a fool forever.", source: "Chinese Proverb" },
  { id: "10", proverb: "Little by little, the bird builds its nest.", source: "French" }
];

export default function DetailsScreen() {
  
  const params = useLocalSearchParams<{id?: string}>();
  const proverb = proverbs.find((p) => p.id === params.id)

  if (!proverb) { // In case that cannot found
    return (
      <View style={styles.container}>
        <Text>Not found</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text>"{proverb.proverb}"</Text>
      <Text>- {proverb.source}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
