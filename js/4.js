let price = prompt('Введіть суму покупки');  
price = Number(price);

let discount = prompt('Введіть відсоток знижки');  
discount = Number(discount);

if (!isNaN(price) && !isNaN(discount) && price > 0 && discount >= 0) {
    let discountedPrice = price - (price * (discount / 100));  
    console.log(`Ціна після знижки: ${discountedPrice}`);
} else {
    console.log('Будь ласка, введіть коректні значення.');
}
