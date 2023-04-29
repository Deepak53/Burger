// Get the menu items
function getMenu() {
  fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
    .then(response => response.json())
    .then(data => {
      // Display menu items on screen
      console.log('Menu Items:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Take user's order
function takeOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      // Choose 3 random burgers and add them to the order object
      const order = {
        burgers: [
          { name: 'Classic Burger' },
          { name: 'Bacon Burger' },
          { name: 'Cheeseburger' },
        ],
      };
      resolve(order);
    }, 2500);
  });
}

// Prepare the order
function orderPrep() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ order_status: true, paid: false });
    }, 1500);
  });
}

// Pay for the order
function payOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ order_status: true, paid: true });
    }, 1000);
  });
}

// Display thank you message
function thankyouFnc() {
  alert('Thank you for eating with us today!');
}

// Call the functions in sequence using async/await
async function run() {
  try {
    // Get the menu
    getMenu();

    // Take the order
    const order = await takeOrder();
    console.log('Order:', order);

    // Prepare the order
    const orderStatus = await orderPrep();
    console.log('Order Status:', orderStatus);


    const payment = await payOrder();
    console.log('Payment:', payment);

    // Display thank you message
    thankyouFnc();
  } catch (error) {
    console.error('Error:', error);
  }
}


run();
