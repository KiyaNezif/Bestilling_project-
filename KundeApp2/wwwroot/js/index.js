$(function(){
    hentAlleKunder();
});

$(function () {
    $("#Utreise").datepicker();
    $("#Utreise").datepicker();
});


$(function () {
    $("#Hjemreise").datepicker();
    $("#Hjemreise").datepicker();
});


function hentAlleKunder() {
    $.get("kunde/hentAlle", function (kunder) {
        formaterKunder(kunder);
    });
}

function formaterKunder(kunder) {
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Fra</th><th>Til</th><th>vei</th><th>Utreisedato</th><th>Hjemreisedato</th><th>Fornavn</th><th>Etternavn</th><th>Adresse</th><th>Postnr</th><th>Poststed</th><th>Postnr</th><th>Telefonnr</th><th></th>" +
        "</tr>";
    for (let kunde of kunder) {
        ut += "<tr>" +
            "<td>" + kunde.fra + "</td>" +
            "<td>" + kunde.til + "</td>" +
            "<td>" + kunde.vei + "</td>" +
            "<td>" + kunde.utreise + "</td>" +
            "<td>" + kunde.hjemreise + "</td>" +
            "<td>" + kunde.poststed + "</td>" +
            "<td>" + kunde.fornavn + "</td>" +
            "<td>" + kunde.etternavn + "</td>" +
            "<td>" + kunde.adresse + "</td>" +
            "<td>" + kunde.postnr + "</td>" +
            "<td>" + kunde.poststed + "</td>" +
            "<td>" + kunde.telefonnr + "</td>" +
            "</tr>";
    }
    ut += "</table>";
    $("#kundene").html(ut);
}
   
function slettKunde(id) {
    const url = "Kunde/Slett?id="+id;
    $.get(url, function (OK) {
        if (OK) {
            window.location.href = 'index.html';
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }

    });
}

$('#btnShowNew').click(function () {
    var str = [];
    $.each($('#place li.' + settings.selectingSeatCss + ' a'), function (index, value) {
        str.push($(this).attr('title'));
    });
    if (str.length > 0) {
        $('#<%=txtAmount.ClientID %>').val(str.length * chargePerSeat);
        $('#<%=txtSeatNo.ClientID %>').val(str.join(','));
        ShowPopup();
    }
    else {
        alert('Select atleast one seat');
    }
})

function ShowPopup() {
    $('#mask').show();
    $('#<%=PanelPop.ClientID %>').show();
}
function HidePopup() {
    $('#mask').hide();
    $('#<%=PanelPop.ClientID %>').hide();
}