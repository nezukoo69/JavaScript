function ageCheck() {
    let currentYear = 2022;
    var birthYear = Number(document.getElementById("ano").value);
    var yearChecked = currentYear - birthYear;

    if (yearChecked > 18) {                                          
        alert('Acesso liberado!');
        window.location.href = "https://www.youtube.com/";
    }
    else {
        alert('Acesso negado, você precisa ter 18 anos!');
    }

}