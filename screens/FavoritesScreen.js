import { StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites-context';
import MealsList from '../components/MealsList/MealsList';

function FavoritesScreen() {
  const FavoriteMealsCxt = useContext(FavoritesContext);
  const itemData = MEALS.filter((item) => FavoriteMealsCxt.ids.includes(item.id))


  if (itemData.length == 0) {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>You have no favorite meal.</Text>
      </View>
    )
  }



  return (
    <MealsList items={itemData} />

  )
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    textAlign: 'center'
  },
  view: {

    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})



export default FavoritesScreen;
