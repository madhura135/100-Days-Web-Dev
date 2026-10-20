// Implementing splice Method:
// Write JavaScript code to remove "Tomatoes" and "Onions" from the grocery items list,
// and add "Cucumbers" and "Bell Peppers" in their place. Log the updated grocery items list before and
// after the splice operation.


let shoppingList = [
  "Milk",
  "Eggs",
  "Bread",
  ["Apples", "Bananas", "Oranges"],
  ["Potatoes", "Tomatoes", "Onions"],
];

console.log("Original list:", shoppingList);

shoppingList[4].splice(1, 2, "Cucumbers", "Bell Peppers");

console.log("Updated list:", shoppingList);

