// Async/Await

function step(message, delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (message === "Payment completed!" && Math.random() < 0.2) {
        reject("Payment failed! Order canceled.");
      } else {
        console.log(message);
        resolve();
      }
    }, delay);
  });
}

async function placeOrder() {
  try {
    // Wait for each step before starting the next
    await step("Order placed successfully!", 1000);
    await step("Payment completed!", 2000);
    await step("Your order has been packed!", 1000);
    await step("Your order has been shipped!", 2000);
    await step("Order delivered successfully!", 1000);
  } catch (error) {
    console.log(error);
  }
}

placeOrder();
