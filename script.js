function encryptMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let password = document.getElementById("password").value;

    if (!name || !email || !message || !password) {
        alert("All fields are required!");
        return;
    }

    let data = { name, email, message };
    let jsonString = JSON.stringify(data);

    let encrypted = CryptoJS.AES.encrypt(jsonString, password).toString();
    document.getElementById("encryptedMessage").value = encrypted;
}
