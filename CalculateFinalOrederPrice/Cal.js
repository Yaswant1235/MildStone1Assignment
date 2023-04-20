let cart = [
    {
    unitPrice: 5000,
    quantity: 2,
    },
    ];
    const calculateTotalCost = (cartArray) => {
    let totalCost = 0;
    for (let item of cartArray) {
    totalCost += item.unitPrice * item.quantity;
    }
    return totalCost;
    };
    console.log(calculateTotalCost(cart));