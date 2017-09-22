var faker = require ("faker");

for (var i = 0; i < 10; i++) {
  console.log (faker.commerce.productName() + " - £" +
               faker.commerce.price());
}
