const form = document.getElementById("mobForm");
const tableBody = document.getElementById("boadTa");

form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nameInput = form.elements.useName.value;
    const phoneTypeInput = form.elements.typeNameD.value;
    const price = Math.floor(Math.random() * 451) + 50; // Random price between 50 and 500
  
    const condition = price > 100 ? "New Device" : "Used";
  
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
      <td>${nameInput}</td>
      <td>${phoneTypeInput}</td>
      <td>${price}</td>
      <td>${condition}</td>
    `;
  
    saveDataToLocalStorage(nameInput, phoneTypeInput, price, condition);
    form.reset();
  });

  function saveDataToLocalStorage(name, phoneType, price, condition) {
    let storedData = JSON.parse(localStorage.getItem("mobileStoreData")) || [];
    storedData.push({ name, phoneType, price, condition });
    localStorage.setItem("mobileStoreData", JSON.stringify(storedData));
  }

  window.addEventListener("DOMContentLoaded", function () {
    const storedData = JSON.parse(localStorage.getItem("mobileStoreData")) || [];
  
    for (const data of storedData) {
      const newRow = tableBody.insertRow();
      newRow.innerHTML = `
        <td>${data.name}</td>
        <td>${data.phoneType}</td>
        <td>${data.price}</td>
        <td>${data.condition}</td>
      `;
    }
  });