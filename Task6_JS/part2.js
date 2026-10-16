// Promises

function placeOrder() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Order placed successfully!");
      resolve();
    }, 1000);
  });
}

function processPayment() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.2) {
        reject("Payment failed! Order canceled.");
      } else {
        console.log("Payment completed!");
        resolve();
      }
    }, 2000);
  });
}

function packOrder() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Your order has been packed!");
      resolve();
    }, 1000);
  });
}

function shipOrder() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Your order has been shipped!");
      resolve();
    }, 2000);
  });
}

function deliverOrder() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Order delivered successfully!");
      resolve();
    }, 1000);
  });
}

// Run each step after the previous one finishes
placeOrder()
  .then(processPayment)
  .then(packOrder)
  .then(shipOrder)
  .then(deliverOrder)
  .catch(function (error) {
    console.log(error);
  });
