let Container = document.body.querySelector('#productContainer');


let obj1 = {
    itemImage: 'image/dress.jpg',
    companyName: 'KALINI',
    description: 'Anarkali Pure Cotton Kurta Set',
    finalPrice: 1119,
    deliveryDate: `August 2 2024`,
    display: function () {
        return `${this.itemImage}
    ${this.companyName}
    ${this.description}
    ${this.finalPrice} 
    ${this.deliveryDate}`
    }
};

let obj2 = obj1;
obj2.companyName = 'SABYASACHI'

let obj3 = obj1;
obj3.finalPrice = 200000;


Container.innerHTML =
    ` <img class="item-image" src="${obj1.itemImage}" alt="item image" height="60%";>
    <div class="company-name">${obj1.companyName}</div>
    <div class="item-description">${obj1.description}</div>
    <div class="final-Price">Rs ${obj1.finalPrice}</div>
    <div class="delivery-Date">${obj1[deliveryDate]}</div>
    `;

