let users = [
    { id: "01", balance: 5000 },
    { id: "02", balance: 5000 },
    { id: "03", balance: 5000 },
    { id: "04", balance: 5000 },
    ];
    function deposit(id, ammount) {
    for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
    users[i].balance += ammount;
    }
    }
    return users;
    }
    function withDraw(id, ammount) {
    for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
    users[i].balance -= ammount;
    }
    }
    return users;
    }
    console.log(deposit("01", 1000));
    console.log(withDraw("03", 1000));