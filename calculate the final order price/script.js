var price1 = 110,
  price2 = 105,
  price3 = 100,
  qty1 = 1,
  qty2 = 10,
  qty3 = 20;

function conversion(val) {
  var div = document.getElementById("div"),
    price = document.getElementById("price");
  if (isNaN(val)) {
    div.innerHTML = "";
    price.innerHTML = "";
  } else {
    switch (true) {
      case (val <= 0):
        {
          div.innerHTML = "";
          price.innerHTML = "";
          break;
        }
      case (val >= qty1 && val < qty2):
        {
          div.innerHTML = val * price1;
          price.innerHTML = price1;
          break;
        }
      case (val >= qty2 && val < qty3):
        {
          div.innerHTML = val * price2;
          price.innerHTML = price2;
          break;
        }
      case (val >= qty3):
        {
          div.innerHTML = val * price3;
          price.innerHTML = price3;
          break;
        }
    }
  }
}