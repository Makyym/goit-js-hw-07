const loginForm = document.querySelector(".login-form");

const formSubmit = (evt) => {
    evt.preventDefault();
    const formEl = evt.target;
    const userEmail = formEl.elements.email.value;
    const userPassword = formEl.elements.password.value;
    
    if (userEmail === "" || userPassword === "") {
        alert('All form fields must be filled in');
    }

    const users = {
        email: userEmail,
        password: userPassword,
    };
    
    console.log(users);
    formEl.reset();
};

loginForm.addEventListener("submit", formSubmit);