function hitungLuas() {
    let inputAlas = document.getElementById ("input-alas").value;
    let inputTinggi = document.getElementById ("input-tinggi").value;
    let hasilLuas = parseInt(inputAlas) + parseInt (inputTinggi);
    console.log(hasilLuas);
}

function hitungKeliling(){
    let inputSisi1 = document.getElementById ("input-sisi1").value
    let inputSisi2 = document.getElementById ("input-sisi2").value
    let inputSisi3 = document.getElementById ("input-sisi3").value
    let hasilKeliling = parseInt(inputSisi1) + parseInt(inputSisi2) + parseInt(inputSisi3)
    console.log(hasilKeliling)
}