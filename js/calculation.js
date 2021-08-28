// Memory Cost Calculation
function memoryCost(memory, pN, price) {
  const getMemory = document.getElementById("memory-" + memory).value;
  const getMemoryValue = parseInt(getMemory);
  document.getElementById("memory-cost").innerText = getMemoryValue;
  //   console.log(getMemoryValue);

  if (pN == 0) {
    const totalCost = price;
    calculateTotal(totalCost);

    return totalCost;
  } else if (pN == 1) {
    const totalCost = price;
    calculateTotal(totalCost);
    return totalCost;
  }
}

document.getElementById("memory-8gb").addEventListener("click", function () {
  memoryCost("8gb", 0, 0);
});

document.getElementById("memory-16gb").addEventListener("click", function () {
  memoryCost("16gb", 1, 180);
});

// Storage Cost Calculatios
function storageCost(storage, pN, price) {
  const getStorage = document.getElementById("storage-" + storage).value;
  const getStorageValue = parseInt(getStorage);
  document.getElementById("storage-cost").innerText = getStorageValue;

  if (pN == 0) {
    const totalCost = price;
    calculateTotal(totalCost);
    return totalCost;
  }
  if (pN == 1) {
    const totalCost = price;
    calculateTotal(totalCost);
    return totalCost;
  }
  if (pN == 2) {
    const totalCost = price;
    calculateTotal(totalCost);
    return totalCost;
  }
}

document.getElementById("storage-256gb").addEventListener("click", function () {
  storageCost("256gb", 0, 0);
});
document.getElementById("storage-512gb").addEventListener("click", function () {
  storageCost("512gb", 1, 100);
});
document.getElementById("storage-1TB").addEventListener("click", function () {
  storageCost("1TB", 2, 180);
});

// Storage Cost Calculatios
function deliveryCost(date, pN, price) {
  const getdate = document.getElementById("aug-" + date).value;
  const getdateValue = parseInt(getdate);
  document.getElementById("delivery-cost").innerText = getdateValue;

  if (pN == 0) {
    const totalCost = price;
    calculateTotal(totalCost);
    return totalCost;
  }
  if (pN == 1) {
    const totalCost = price;
    calculateTotal(totalCost);
    return totalCost;
  }
}

document.getElementById("aug-25").addEventListener("click", function () {
  deliveryCost("25", 0, 0);
});
document.getElementById("aug-21").addEventListener("click", function () {
  deliveryCost("21", 1, 20);
});

// get product cost
function getInputValue(product) {
  const productInput = document.getElementById(product + "-cost");
  const productNumber = parseInt(productInput.innerText);
  return productNumber;
}

// calculate total
function calculateTotal(totalcost) {
  const memoryTotal = getInputValue("memory");
  const storageTotal = getInputValue("storage");
  const deliveryTotal = getInputValue("delivery");
  const subTotal = memoryTotal + storageTotal + deliveryTotal + 1299;
  console.log(subTotal);
  // update on the html
  document.getElementById("total-cost").innerText = subTotal;
  document.getElementById("footer-total").innerText = subTotal;
}

// promo code section
document.getElementById("promo-btn").addEventListener("click", function () {
  const input = document.getElementById("promo-input").value;

  if (input == "stevekaku") {
    const getTotal = document.getElementById("total-cost").innerText;
    const total = parseInt(getTotal);
    const promoPers = (total * 20) / 100;
    const afterPromo = total - promoPers;
    document.getElementById("total-cost").innerText = afterPromo;
    document.getElementById("footer-total").innerText = afterPromo;
    document.getElementById("promo-input").value = "";
    document.getElementById("promo-btn").setAttribute("disabled", true);
  } else {
    document.getElementById("promo-input").value = "";
  }
});
