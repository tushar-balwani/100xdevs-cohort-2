/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const totalSpend = {};
  transactions.forEach((element) => {
    if (element.category in totalSpend) {
      totalSpend[element.category] += element.price;
    } else {
      totalSpend[element.category] = element.price;
    }
  });

  const totalSpendPerCategory = Object.entries(totalSpend).map(
    ([itemKey, itemValue]) => ({
      category: itemKey,
      totalSpent: itemValue,
    })
  );

  return totalSpendPerCategory;
}

module.exports = calculateTotalSpentByCategory;
