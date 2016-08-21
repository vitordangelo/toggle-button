// Atualiza o status do botão no Banco de Dados
$('#ckbox').click(function() {
    if ($("#ckbox:checked").length == 0) {
    var a = "off";
    } else {
    var a = "on";
    }

    $.ajax({
        type: "POST",
        url: "update.php",
        data: "value="+a,
        success: function(html) {
            $("#display").html(html).show();    
        }
    });
});

// Verifica o status atual do botão no Banco de Dados
var update = function() {
   $.getJSON("verificaStatusInicial.php",
    function(result){
        var status = result.status.choice;
        
        if (status == "on") {
            var check = function() {
                $('input[name=ckbox]').prop('checked', true);
            };
            $(check);
            console.log("Ligado");
        };
        if (status == "off") {
            var uncheck = function() {
                $('input[name=ckbox]').prop('checked', false);
            };
            $(uncheck);
            console.log("Off");
        };
    });
};

$(update)
setInterval(function() { 
    $(update); 
}, 3000);