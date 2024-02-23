function myFunction() {
    // Your onclick function logic here
    alert("Clicked!");
  }
  let totalGrid1 = 0; // Variable to store the total of grid 1
  let totalGrid2 = 0; 
  let count = 0;
  
  function increment() {
    count++;
    document.getElementById('number').innerText = count;
  }
  
  function decrement() {
    if (count > 0) {
      count--;
      document.getElementById('number').innerText = count;
    }
  }
  let count1 = 0;
  
  function incrementGrid1() {
    count1++;
    document.getElementById('number1').innerText = count1;
  }
  
  function decrementGrid1() {
    if (count1 > 0) {
      count1--;
      document.getElementById('number1').innerText = count1;
    }
  }
  // Get the number grid item and total element
const numberElement = document.getElementById("number");
const totalElement = document.getElementById("total");

// Add event listeners to the minus and plus buttons
document.querySelector(".minus").addEventListener("click", decrement);
document.querySelector(".plus").addEventListener("click", increment);

// Function to decrement the number
function decrement() {
  let number = parseInt(numberElement.textContent);
  if (number > 0) {
    number--;
    numberElement.textContent = number;
    updateTotal(number);
  }
}

// Function to increment the number
function increment() {
  let number = parseInt(numberElement.textContent);
  number++;
  numberElement.textContent = number;
  updateTotal(number);
}

// Function to update the total based on the number
function updateTotal(number) {
  const price = 359;
  const totalPrice = number * price;
  totalElement.textContent = `Total: ₹${totalPrice}`;
}
// Function to update the total based on the number
function updateTotal(number) {
    const price = 359;
    const totalPrice = number * price;
    const totalElement = document.querySelector(".cart-total h3");
    
    totalElement.textContent = `Total : ₹${totalPrice}`;
    totalGrid2 = totalPrice;
    updateSubtotal();
  }
 // Get the number grid item and total element
 
// Get the number grid item and total element for the second grid
const numberElement1 = document.getElementById("number1");
const totalElement1 = document.getElementById("total1");

// Add event listeners to the minus and plus buttons for the second grid
document.querySelector(".minus").addEventListener("click", decrementGrid1);
document.querySelector(".plus").addEventListener("click", incrementGrid1);

// Function to decrement the number
function decrementGrid1() {
    let numberElement1 = document.getElementById("number1");
    let number1 = parseInt(numberElement1.textContent);
    if (number1 > 0) {
        number1--;
        numberElement1.textContent = number1;
        updateTotal1(number1);
    }
}

// Function to increment the number
function incrementGrid1() {
    let numberElement1 = document.getElementById("number1");
    let number1 = parseInt(numberElement1.textContent);
    number1++;
    numberElement1.textContent = number1;
    updateTotal1(number1);
}

  // Function to update the total based on the number
  function updateTotal1(number1) {
    const price1 = 7459;
    const totalPrice1 = number1 * price1;
    totalElement1.textContent = `Total: ₹${totalPrice1}`;
  }
  // Function to update the total based on the number
  function updateTotal1(number1) {
      const price1 = 7459;
      const totalPrice1 = number1 * price1;

      const totalElement1 = document.querySelector(".cart-total1 h3");
      
      totalElement1.textContent = `Total : ₹${totalPrice1}`;
      totalGrid1 = totalPrice1;
      updateSubtotal();
    }
   

// Function to update the total based on the number for the second grid

// Function to update the total based on the number for the second grid
function updateSubtotal() {
    const combinedTotal = totalGrid1 + totalGrid2; // Calculate the combined total
    const subtotalElement = document.querySelector(".subtotal h2");
    const formattedCombinedTotal = formatCurrency(combinedTotal);
    subtotalElement.textContent = `Subtotal: ${formattedCombinedTotal}`;
}
function formatCurrency(amount) {
    return amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
}
