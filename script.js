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
    
    let encryptedText = jsonString;

    // Encrypt 5 times
    for (let i = 0; i < 5; i++) {
        encryptedText = CryptoJS.AES.encrypt(encryptedText, password).toString();
    }

    document.getElementById("encryptedMessage").value = encryptedText;
}

function copyText() {
    let textArea = document.getElementById("encryptedMessage");
    textArea.select();
    document.execCommand("copy");
    alert("Encrypted message copied!");
}
