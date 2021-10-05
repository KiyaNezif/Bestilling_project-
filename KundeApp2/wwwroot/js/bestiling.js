function lagreBestiling() {
    const kunde = {
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        adresse: $("#adresse").val(),
        postnr: $("#postnr").val(),
        fra: $("#fra").val(),
        til: $("#til").val(),
        vei: $("#vei").val(),
        Utreise: $("#Utreise").val(),
        Hjemreise: $("#Hjemreise").val(),
        Telefonnr: $("#Telefonnr").val(),
        poststed: $("#poststed").val()
    }
    const url = "Kunde/Lagre";
    $.post(url, kunde, function (OK) {
        if (OK) {
            window.location.href = 'index.html';
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }
    });
};