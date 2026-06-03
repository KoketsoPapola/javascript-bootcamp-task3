let resendBtn = document.getElementById("resendBtn");
let seconds = 10;

let timer = setInterval(function () {
    resendBtn.textContent = `Resend Verification (${seconds})`;
    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        resendBtn.textContent = "Resend Verification";
        resendBtn.disabled = false;
    }
}, 1000);

const studentDatabase = [
    { id: 1, firstName: "John", lastName: "Smith", email: "john@gmail.com", course: "Computer Science", age: 20 },
    { id: 2, firstName: "Mary", lastName: "Jones", email: "mary@gmail.com", course: "Information Technology", age: 21 },
    { id: 3, firstName: "David", lastName: "Brown", email: "david@gmail.com", course: "Software Engineering", age: 22 },
    { id: 4, firstName: "Sarah", lastName: "Williams", email: "sarah@gmail.com", course: "Data Science", age: 23 },
    { id: 5, firstName: "James", lastName: "Taylor", email: "james@gmail.com", course: "Cyber Security", age: 24 }
];

function synchronousDemo() {
    console.log("Step-1 - The function is starting");
    console.log("Step-2 - The Process is in action");
    console.log("Step-3 - The function reached the final stage");
}

synchronousDemo();

function displayStudents() {
    setTimeout(function () {
        console.log("Student Records:");
        studentDatabase.forEach(student => console.log(student));
    }, 3000);
}

displayStudents();