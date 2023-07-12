function welcome(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;

    return function displayFullName() {
        alert(`Welcome ${fullName}!`);
    }
    displayFullName();
}
