function validerFornavn(fornavn) {
    const regexp = /^[a-zA-ZæøåÆØÅ\.\ \-]{2,20}$/;
    const ok = regexp.test(fornavn);
    if (!ok) {
        $("#feilFornavn").html("Fornavnet må bestå av 2 til 20 bokstaver");
        return false;
    }
    else {
        $("#feilFornavn").html("");
        return true;
    }
} function validerEtternavn(etternavn) {
    const regexp = /^[a-zA-ZæøåÆØÅ\.\ \-]{2,20}$/;
    const ok = regexp.test(etternavn);
    if (!ok) {
        $("#feilEtternavn").html("Etternavnet må bestå av 2 til 20 bokstaver");
        return false;
    }
    else {
        $("#feilEtternavn").html("");
        return true;
    }
} function validerAdresse(adresse) {
    var regexp = /^[0-9a-zA-ZæøåÆØÅ\ \.\-]{2,50}$/;
    var ok = regexp.test(adresse);
    if (!ok) {
        $("#feilAdresse").html("Adressen må bestå av 2 til 50 bokstaver og tall");
        return false;
    }
    else {
        $("#feilAdresse").html("");
        return true;
    }
}
function validerPostnr(postnr) {
    var regexp = /^[0-9]{4}$/;
    var ok = regexp.test(postnr);
    if (!ok) {
        $("#feilPostnr").html("Postnr må bestå av 4 tall");
        return false;
    }
    else {
        $("#feilPostnr").html("");
        return true;
    }
} function validerPoststed(poststed) {
    var regexp = /^[a-zA-ZæøåÆØÅ\ \.\-]{2,20}/;
    var ok = regexp.test(poststed);
    if (!ok) {
        $("#feilPoststed").html("Poststed må bestå av 2 til 20 bokstaver");
        return false;
    }
    else {
        $("#feilPoststed").html("");
        return true;
    }
}


function valideringEpost(epost) {
    var regexp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
    var ok = regexp.test(epost);
    if (!ok) {
        $("#validerEpost").html("E-post er ugyldig");
        return false;
    }
    else {
        $("#feilEpost").html("");
        return true;
    }
}


}



function validerUtreise(Utreise) {
    var regexp = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
    var ok = regexp.test(Utreise);
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    today = mm + '/' + dd + '/' + yyyy;

    if (!ok || (Utreise < today)) {
        $("#feilUtreise").html("tlf må bestå av 2 til 20 bokstaver");
        return false;
    }
    else {
        $("#feilTil").html("");
        return true;
    }
}
function validerHjemmereise(Hjemreise, Utreise) {
    var regexp = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
    var ok = regexp.test(Hjemreise);
    if (!ok || (Hjemreise > today)) {
        $("#feilHjemereise").html("Skriv riktig dato");
        return false;
    }
    else {
        $("#feilHjemereise").html("");
        return true;
    }
}

