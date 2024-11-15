function cekKhodam() {
    const name = document.getElementById("nameInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (name === "") {
        resultDiv.textContent = "Masukkan nama Anda terlebih dahulu.";
        return;
    }

    // Logika sederhana untuk menentukan jenis khodam
    const khodams = [
        "Babi Hutan",
        "Biawak",
        "Ulat Bulu",
        "Ular Beludak",
        "Ubi Kayu",
        "Kuntilanak",
        "Kuda Liar",
        "Jeruk Purut",
        "Babi Ngepet"
    ];

    const randomIndex = Math.floor(Math.random() * khodams.length);
    const khodam = khodams[randomIndex];

    resultDiv.textContent = `Nama: ${name}\nKhodam Anda: ${khodam}`;
}

function resetForm() {
    document.getElementById("nameInput").value = "";
    document.getElementById("result").textContent = "";
}
