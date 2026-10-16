// Callback Hell


function placeOrder() {
  setTimeout(function () {
    console.log("Order placed successfully!");

    setTimeout(function () {
      // Simulate payment after 2 seconds
      if (Math.random() < 0.2) {
        console.log("Payment failed! Order canceled.");
        return;
      }

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
