const form = document.querySelector(`.login-form`);
const formData = {};
// console.log(form);
form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  const emailValue = form.elements[`email`].value.trim();
  const passwordValue = form.elements[`password`].value.trim();
  if (emailValue === `` || passwordValue === ``) {
    alert("All form fields must be filled in");
  } else {
    formData.email = emailValue;
    formData.password = passwordValue;
    console.log(formData);

    form.reset();
  }
});
