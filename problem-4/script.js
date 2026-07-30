function topRatedRestaurant(restaurants) {
  // Write your code here
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return "Invalid";
  }
  let popularRestaurants = restaurants[0];
  for (let i = 1; i < restaurants.length; i++) {
    if (restaurants[i].rating > popularRestaurants.rating) {
      popularRestaurants = restaurants[i];
    }
  }
  return popularRestaurants.name.toUpperCase();
}

console.log(
  topRatedRestaurant([
    { name: "Chillox", rating: 4.5 },
    { name: "Sultan's Dine", rating: 4.8 },
  ]),
);
console.log(
  topRatedRestaurant([
    { name: "KFC", rating: 4.2 },
    { name: "Pizza Hut", rating: 4.6 },
  ]),
);
console.log(topRatedRestaurant([]));
console.log(topRatedRestaurant("restaurants"));
