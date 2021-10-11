function lagreBestilling() {
    const fornavnOk = validerFornavn($("#fornavn").val()),
    const etternavnOK = validerEtternavn($("#etternavn").val()),
    const adresseOK = validerAdresse($("#adresse").val()),
    const postnrOK = validerPostnr($("#postnr").val()),
    const poststedOK = validerPoststed($("#poststed").val()),
    const epostOK = validerEpost($("#epost").val()),
    const telefonnrOK = validerTelefonnr($("#telefonnr").val()),
    if (fornavnOk && etternavnOK && adresseOK && postnrOK && poststedOK && telefonnrOK) {
        lagreKunde();
    }
}


function lagreKunde() {
    const kunde = {
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        adresse: $("#adresse").val(),
        postnr: $("#postnr").val(),
        poststed: $("#poststed").val(),
        
    }
    const url = "Kunde/Lagre";
    $.post(url, kunde, function (OK) {
        if (OK) {
            window.location.href = 'index.html';
        }
        else {
            $("#feil").html("NB:Feil - prøv igjen ");
        }
    });
};