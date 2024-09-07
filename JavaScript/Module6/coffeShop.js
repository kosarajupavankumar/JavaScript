function placeOrder(drint) {
  return new Promise((resolve, reject) => {
    if (drint === "coffee") {
      resolve("Order placed successfully");
    } else {
      reject("Order was not placed");
    }
  });
}

function processOrder(orderPlaced) {
  return new Promise((resolve, reject) => {
    resolve(
      `${orderPlaced} and order is being processed and waiting for the bill payment`
    );
  });
}

function generateBill(processedOrder) {
  return new Promise((resolve, reject) => {
    resolve(`${processedOrder} and the bill is being generated for the order`);
  });
}

async function serverOrder() {
  try {
    let orderPlaced = await placeOrder("coffee");
    let processedOrder = await processOrder(orderPlaced);
    let billGenerated = await generateBill(processedOrder);
    return billGenerated;
  } catch (error) {
    return error;
  }
}

serverOrder();
placeOrder("coffee")
  .then((orderStatus) => {
    return processOrder(orderStatus);
  })
  .then((processOrder) => {
    return generateBill(processOrder);
  })
  .then((billGenerated) => {
    console.log(billGenerated);
  });
