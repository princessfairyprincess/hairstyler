$( document ).ready(function() {
 
	//Set up the canvas

	//Option-Colour Toggler
	const optViewer = $('.options');
	const optColToggler = $('#togglerInner');
	const optColState = $('#optColState');
	const optNavBtns = $('.nav_btn');

	optColToggler.click(function(){
		optColState.toggleClass('variants_active colors_active');
		optViewer.toggleClass('variants_active_view colours_active_view');
	});

	if ($(optViewer).hasClass('body')) {
		console.log('this is body');
		if ($(optViewer).hasClass('active')) {
			console.log('body is active');
			optNavBtns.addClass('hide');
		}
	}


	//Change skin tone
	const skinOptsArray = $('.col-skin');
	changeSkinTone = function() {
		let skin = $('.skin');
		let foundInt;
		let x;
		for(x = 0; x <= 11; x++){
			if(skinOptsArray[x] == this){
				foundInt = x;
			}
		}
		
		let i;
		for (i = 0; i <= 11; i++) {
		
			$('.skin').removeClass('skin'+[i]).addClass('skin'+foundInt);
		}

	}

	$('.col-skin').click(changeSkinTone);


 	//change parts

	const partsOptsBody = $('.opt-body');
	changeVariant = function(part,object) {
		let partOpt = '.'+part;
		let foundInt;
		let x;

		for(x = 0; x <= 4; x++){
			if(partsOptsBody[x] == object) {
				foundInt = x;
			}
		}

		let i;
		for (i = 0; i<=4; i++) {
			$(partOpt).removeClass(part+[i]).addClass(part+foundInt);
		}
	}

	$('.opt-body').click(function() {
		changeVariant('body',this);
	});

});

