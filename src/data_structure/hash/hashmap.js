const fruits = new Map([
    ["apples", 100],
    ["bananas", 200],
    ["oranges", 300]
]);
  
fruits.set("kiwi", 400);
fruits.set("pear", 500);
fruits.set("melon", 600);

fruits.get("apples"); // Returns 100

fruits.delete("apples");
fruits.has("apples"); // return true/false
fruits.clear();

typeof fruits; // Maps are object. It returns object.

fruits.size // return length of fruits map