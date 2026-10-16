// Callback Hell


function placeOrder() {
  setTimeout(function () {
    console.log("Order placed successfully!");

    setTimeout(function () {
      console.log("Payment completed!");

      setTimeout(function () {
        console.log("Your order has been packed!");

        setTimeout(function () {
          console.log("Your order has been shipped!");

          setTimeout(function () {
            console.log("Order delivered successfully!");
          }, 1000);

        }, 2000);
      }, 1000);
    }, 2000);
  }, 1000);
}

placeOrder();
