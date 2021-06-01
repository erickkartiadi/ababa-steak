const reserveForm = document.getElementById("reserveForm");
reserveForm.addEventListener("submit", validateForm);

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phone_number");
const personInput = document.getElementById("number_person");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const couponInput = document.getElementById("coupon");

function createErrorNode(errorMessage) {
  let small = document.createElement("small");
  let text = document.createTextNode(errorMessage);
  small.appendChild(text);

  return small;
}

function removeAllErrorNode() {
  let nodes = document.querySelectorAll("small");
  nodes.forEach((node) => node.parentNode.removeChild(node));

  let inputNodes = document.querySelectorAll("input");
  inputNodes.forEach((nodes) => nodes.classList.remove("error"));
}

function showError(node, msg) {
  node.classList.add("error");
  node.insertAdjacentElement("afterend", createErrorNode(msg));
}

function validateForm(e) {
  let isSuccess = true;

  e.preventDefault();
  let name = nameInput.value;
  let email = emailInput.value;
  let phone_number = phoneNumberInput.value;
  let person = personInput.value;
  let date = dateInput.value;
  let time = timeInput.value;
  let coupon = couponInput.value;
  removeAllErrorNode();

  if (name === "") {
    showError(nameInput, "Name field is required");
    isSuccess = false;
  }

  if (email === "") {
    showError(emailInput, "Email field is required");
    isSuccess = false;
  } else if (!isValidEmail(email)) {
    showError(emailInput, "Please enter a valid email address");
    isSuccess = false;
  }

  if (phone_number === "") {
    showError(phoneNumberInput, "Phone number field is required");
    isSuccess = false;
  } else if (!isNumeric(phone_number)) {
    showError(phoneNumberInput, "Phone number can only contain number");
    isSuccess = false;
  } else if (!(phone_number.length >= 10 && phone_number.length <= 12)) {
    showError(phoneNumberInput, "Phone number must between 10 to 12 digit");
    isSuccess = false;
  }

  if (person === "") {
    showError(personInput, "Number of person field is required");
    isSuccess = false;
  } else if (!isNumeric(person)) {
    showError(personInput, "Number of person can only contain number");
    isSuccess = false;
  } else if (!(+person >= 1 && +person <= 12)) {
    showError(personInput, "Number of person must between 1 to 12");
    isSuccess = false;
  }

  if (date === "") {
    showError(dateInput, "Date field is required");
    isSuccess = false;
  } else if (!isValidDate(date)) {
    showError(dateInput, "Date is at least 7 to 30 days more after today");
    isSuccess = false;
  }

  if (time === "") {
    showError(timeInput, "Time field is required");
    isSuccess = false;
  } else if (!isValidTime(time)) {
    showError(timeInput, "You can only booked between 10:00 AM to 09:00 PM");
    isSuccess = false;
  }

  if (coupon !== "" && coupon.length !== 8) {
    showError(couponInput, "Coupon consist of 8 digits");
    isSuccess = false;
  }
  console.log($("#reserveForm"), reserveForm);

  if (isSuccess) {
    alert("Success !");
    reserveForm.reset();
  }
}

// waktu booking harus sesuai dengan waktu restaurant dibuka yaitu 10:00 AM - 09:00 PM
function isValidTime(time) {
  const OPEN_TIME = "10:00";
  const CLOSE_TIME = "21:00";

  let parsedOpenTime = Date.parse(`01/01/1970 ${OPEN_TIME}:00`);
  let parsedCloseTime = Date.parse(`01/01/1970 ${CLOSE_TIME}:00`);
  let parsedTime = Date.parse(`01/01/1970 ${time}:00`);

  if (parsedTime < parsedOpenTime || parsedTime > parsedCloseTime) {
    return false;
  }

  return true;
}

/*
  waktu booking harus 7 hari sampai 30 hari setelah hari pemesanan
*/
function isValidDate(date) {
  let inputDate = new Date(date);
  inputDate = new Date(inputDate.toLocaleDateString());
  let today = new Date();

  let oneWeekAfterToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 7
  );

  let oneMonthAfterToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  if (!(inputDate >= oneWeekAfterToday)) {
    return false;
  }

  if (inputDate > oneMonthAfterToday) {
    return false;
  }

  return true;
}

function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function isValidEmail(email) {
  var atSymbol = email.indexOf("@");
  if (atSymbol < 1) return false;

  var dot = email.indexOf(".");
  if (dot <= atSymbol + 2) return false;

  if (dot === email.length - 1) return false;

  return true;
}
