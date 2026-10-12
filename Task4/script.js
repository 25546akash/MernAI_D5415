
// function checkNumber(num) {
//     if (num > 0) {
//         return "Positive number.";
//     } else if (num < 0) {
//         return "Negative number.";
//     } else {
//         return "Zero.";
//     }
// }

// function checkInput() {
//     let input = prompt("Enter a number:");

//     if (input === null || input.trim() === "") {
//         return;
//     }

//     let num = Number(input);

//     if (!Number.isFinite(num)) {
//         alert("Please enter a valid number.");
//         return;
//     }

//     alert(checkNumber(num));
// }



const user = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com"
};

const heading = document.createElement("h2");
heading.textContent = "User Information";

const details = document.createElement("section");

const name = document.createElement("p");
name.textContent = "Name: " + user.name;

const age = document.createElement("p");
age.textContent = "Age: " + user.age;

const email = document.createElement("p");
email.textContent = "Email: " + user.email;

details.append(name, age, email);

document.getElementById("userInfo").append(heading, details);
