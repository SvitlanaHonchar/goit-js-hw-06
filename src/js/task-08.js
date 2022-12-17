// знаходимо форму
// const emailInputEl = document.querySelector("input[type = 'email']");
// const passwordInputEl = document.querySelector("input[type = 'password']");
// const loginBtn = document.querySelector("button");
const formEl = document.querySelector(".login-form");

// об'єкт для зберігання даних

const userLoginInfo = {
  email: "",
  password: "",
};

// подія
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  // console.log("submit event");

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Alert! All fields should be filled in!");
    return;
  }

  userLoginInfo.email = email.value;
  userLoginInfo.password = password.value;
  console.log(userLoginInfo);

  // очищення форми
  email.value = "";
  password.value = "";
}
