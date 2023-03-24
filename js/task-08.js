const formEl = document.querySelector('.login-form');
//console.log(formEl);
formEl.addEventListener('submit', onSumbit);
function onSumbit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
     return alert(` Всі поля повинні бути заповнені!`);
    } else {
        console.log(`Email: ${email.value}\n Password: ${password.value}`);
        event.currentTarget.reset();
    };
};
