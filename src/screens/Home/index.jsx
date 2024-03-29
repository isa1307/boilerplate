import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Title title={"Home"} />

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity 
       style={styles.button}
        onPress={() => navigation.navigate('Category')}>
        <Text>Category</Text>
      </TouchableOpacity>
    </View>
  )
}