const productprices = new Map()
productprices.set("bread", 1.50);
productprices.set("milk", 2.00);
productprices.set("shaurma", 16.00);
productprices.set("chocolate", 5.00);

for (const [product, price] of productprices) {
    const increaseprice  = price * 1.20;
    console.log(product,":",increaseprice)
}




