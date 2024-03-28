function convertDecimal() {
    var decimal = document.getElementById("decimalInput").value.trim();
    if (decimal === "") return;
    document.getElementById("binaryInput").value = parseInt(decimal, 10).toString(2);
    document.getElementById("octalInput").value = parseInt(decimal, 10).toString(8);
    document.getElementById("hexadecimalInput").value = parseInt(decimal, 10).toString(16).toUpperCase();
}

function convertBinary() {
    var binary = document.getElementById("binaryInput").value.trim();
    if (!/^[01]+$/.test(binary)) return;
    document.getElementById("decimalInput").value = parseInt(binary, 2);
    document.getElementById("octalInput").value = parseInt(binary, 2).toString(8);
    document.getElementById("hexadecimalInput").value = parseInt(binary, 2).toString(16).toUpperCase();
}

function convertOctal() {
    var octal = document.getElementById("octalInput").value.trim();
    if (!/^[0-7]+$/.test(octal)) return;
    document.getElementById("decimalInput").value = parseInt(octal, 8);
    document.getElementById("binaryInput").value = parseInt(octal, 8).toString(2);
    document.getElementById("hexadecimalInput").value = parseInt(octal, 8).toString(16).toUpperCase();
}

function convertHexadecimal() {
    var hexadecimal = document.getElementById("hexadecimalInput").value.trim().toUpperCase();
    if (!/^[0-9A-F]+$/.test(hexadecimal)) return;
    document.getElementById("decimalInput").value = parseInt(hexadecimal, 16);
    document.getElementById("binaryInput").value = parseInt(hexadecimal, 16).toString(2);
    document.getElementById("octalInput").value = parseInt(hexadecimal, 16).toString(8);
}

function clearInputs() {
    document.getElementById("decimalInput").value = "";
    document.getElementById("binaryInput").value = "";
    document.getElementById("octalInput").value = "";
    document.getElementById("hexadecimalInput").value = "";
}