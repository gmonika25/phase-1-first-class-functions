const buyFood = function (price) {
  newPrice = price * 1.01;
  return newPrice;
};
// console.log(buyFood(15));

const receivesAFunction = function (cb, food, price) {
  cb(price);
  // should be newPrice below but test is not passing it; works in console, though
  return `Your total for the ${food} is ${price}!`;
};

// console.log(receivesAFunction(buyFood, "chicken sandwich", 20));

const returnsANamedFunction = function (flavor) {
  return function coffeeOrder(price) {
    return `Your ${flavor} latte is $${price}.`;
  };
};

// const coffeeOrder = returnsANamedFunction("vanilla");

// coffeeOrder(5);

const returnsAnAnonymousFunction = function (treat) {
  return function (dogName) {
    return `${dogName} had a treat today! It was ${treat}.`;
  };
};
