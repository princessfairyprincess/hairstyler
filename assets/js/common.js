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


 	//Change parts

	changeVariant = function(partsgroup,part,object) {
		let partsOptsArray = $('.'+partsgroup);
		let partOpt = '.'+part;
		let foundInt;
		let x;

		for(x = 0; x <= 4; x++){
			if(partsOptsArray[x] == object) {
				foundInt = x;
			}
		}

		let i;
		for (i = 0; i<=4; i++) {
			$(partOpt).removeClass(part+[i]).addClass(part+foundInt);

			if ($(object).hasClass('opt-body')) {
				$('.arm').removeClass('arm'+[i]).addClass('arm'+foundInt);
				$('.shirt').removeClass('shirt-body'+[i]+'chest0').addClass('shirt-body'+foundInt+'chest0');
			}
		}

		$(object).siblings().removeClass('active');
		$(object).addClass('active');

	}

	$('.opt-body').click(function() {
		changeVariant('opt-body','body',this);
	});

	$('opt-eyes').click(function() {
		changeVariant('opt-eyes','eyes',this);
	});

});

