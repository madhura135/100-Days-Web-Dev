// Implementing pop Method:

// Write JavaScript code to remove the last item from the grocery items list. Log the updated grocery items list before and after the removal.

let shoppingList = [
  "Milk",
  "Eggs",
  "Bread",
  ["Apples", "Bananas", "Oranges"],
  ["Potatoes", "Tomatoes", "Onions"],
];
console.log(`Original list: ${shoppingList}`);
shoppingList.pop();
console.log(`Updated list after removing last element: ${shoppingList}`);
