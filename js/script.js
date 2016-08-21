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

$(document).ready(function() {
   $.getJSON("verificaStatusInicial.php",
    function(result){
    	var status = result.status.choice;
    	
    	if (status == "on") {
    		var check = function() {
    			$('input[name=ckbox]').prop('checked', true);
    		};
    		$(check);
    		console.log("On");
    	};
    	if (status == "off") {
    		var uncheck = function() {
    			$('input[name=ckbox]').prop('checked', false);
    		};
    		$(uncheck);
    		console.log("Off");
    	};
    });
});