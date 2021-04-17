$( document ).ready(function() {
 
	//Set up the canvas

	//Option-Colour Toggler
	const optViewer = $('.options');
	const optColToggler = $('#togglerInner');
	const optColState = $('#optColState');

	optColToggler.click(function(){
		optColState.toggleClass('variants_active colors_active');
		optViewer.toggleClass('variants_active_view colours_active_view');
	});


	//Change skin tone
	const skinOptsArray = $('.col');
	changeSkinTone = function() {
		var skin = $('.skin');

		console.log(skinOptsArray[5]);
		var foundInt;

		var x;
		for(x = 0; x <= 11; x++){
			if(skinOptsArray[x] == this){
				foundInt = x;
			}
		}
		
		var i;
		for (i = 0; i <= 11; i++) {
		
			$('.skin').removeClass('skin'+[i]).addClass('skin'+foundInt);
		}

	}

	$('.col').click(changeSkinTone);
 
});

