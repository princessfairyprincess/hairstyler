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
		if ($(optViewer).hasClass('active')) {
			optNavBtns.addClass('hide');
		}
	}


	//Change skin tone
	const skinOptsArray = $('.active .col-skin');
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

	//Change base hair colour
	const hairOptsArray = $('.col-hairs');
	changeHairCol = function() {
		let hair = $('.haircol');
		console.log(hair);
		let foundInt;
		let x;
		for(x = 0; x <= 11; x++){
			console.log(hairOptsArray[x]);
			if(hairOptsArray[x] == this){
				foundInt = x;
				console.log(foundInt);
			}
		}
		
		let i;
		for (i = 0; i <= 11; i++) {
		
			$('.haircol').removeClass('haircol'+[i]).addClass('haircol'+foundInt);
		}

	}

	$('.col-hairs').click(changeHairCol);


 	//Change parts

	changeVariant = function(partsgroup,part,object) {
		let partsOptsArray = $('.'+partsgroup);
		let partOptsQuant = $(partsOptsArray).length - 1;
		let partOpt = '.'+part;
		let foundInt;
		let x;

		console.log(partOpt);
		console.log('-------');
		console.log(partsOptsArray);

		for(x = 0; x <= partOptsQuant; x++){
			if(partsOptsArray[x] == object) {
				foundInt = x;
			}
		}

		let i;
		for (i = 0; i<=partOptsQuant; i++) {
			$(partOpt).removeClass(part+[i]).addClass(part+foundInt);

			if ($(object).hasClass('opt-body')) {
				$('.arm').removeClass('arm'+[i]).addClass('arm'+foundInt);
				$('.shirt').removeClass('shirt-body'+[i]+'chest0').addClass('shirt-body'+foundInt+'chest0');
			}

			if ($(object).hasClass('opt-brows')) {
				$('.browhairs').removeClass('browhairs'+[i]).addClass('browhairs'+foundInt);
			}

			if ($(object).hasClass('opt-eyes')) {
				$('.eyeballs').removeClass('eyeballs'+[i]).addClass('eyeballs'+foundInt);
				$('.eyelids').removeClass('eyelids'+[i]).addClass('eyelids'+foundInt);
			}

			if ($(object).hasClass('opt-mouth')) {
				$('.mouthlips').removeClass('mouthlips'+[i]).addClass('mouthlips'+foundInt);
			}
		}

		$(object).siblings().removeClass('active');
		$(object).addClass('active');

	}

	$('.opt-body').click(function() {
		changeVariant('opt-body','body',this);
	});

	$('.opt-browbone').click(function() {
		changeVariant('opt-browbone', 'browbone', this);
	});

	$('.opt-brows').click(function() {
		changeVariant('opt-brows','brows',this);
	});

	$('.opt-cheeks').click(function() {
		changeVariant('opt-cheeks','cheeks',this);
	});

	$('.opt-chest').click(function() {
		changeVariant('opt-chest', 'chest', this);
	});

	$('.opt-eyes').click(function() {
		changeVariant('opt-eyes','eyes',this);
	});

	$('.opt-hands').click(function() {
		changeVariant('opt-hands','hand',this);
	});

	$('.opt-jawline').click(function() {
		changeVariant('opt-jawline', 'jawline', this);
	});

	$('.opt-mouth').click(function() {
		changeVariant('opt-mouth','mouth',this);
	});

	$('.opt-nose').click(function() {
		changeVariant('opt-nose','nose',this);
	});

	$('.opt-background').click(function() {
		changeVariant('opt-background', 'background', this);
	});

	$('.opt-features').click(function() {
		changeVariant('opt-features','features',this);
	});

	$('.opt-eyemakeup').click(function() {
		changeVariant('opt-eyemakeup','eyemakeup',this);
	});

	$('.opt-lipmakeup').click(function() {
		changeVariant('opt-lipmakeup', 'lipmakeup', this);
	});

	$('.opt-shirt').click(function() {
		changeVariant('opt-shirt','shirt',this);
	});


	//Choose Category
	changeCateg = function(categbutton,categoption) {
		if (!$(categbutton).hasClass('active')) {
			$(categbutton).addClass('active');
			$(categbutton).siblings().removeClass('active');
		}

		let theOpts = $('.options.'+categoption);
		$(theOpts).addClass('active variants_active_view').removeClass('hide');
		$(theOpts).siblings().removeClass('active').addClass('hide');

	}

	$('#categBody').click(function() {
		changeCateg(this,'body');
	});

	$('#categBrowbone').click(function() {
		changeCateg(this,'browbone');
	});

	$('#categBrows').click(function() {
		changeCateg(this,'brows');
	});

	$('#categCheeks').click(function() {
		changeCateg(this,'cheeks');
	});

	$('#categChest').click(function() {
		changeCateg(this,'chest');
	});

	$('#categEyes').click(function() {
		changeCateg(this,'eyes');
	});

	$('#categHand').click(function() {
		changeCateg(this,'hand');
	});

	$('#categJawline').click(function() {
		changeCateg(this,'jawline');
	});

	$('#categMouth').click(function() {
		changeCateg(this,'mouth');
	});

	$('#categNose').click(function() {
		changeCateg(this,'nose');
	});

	$('#categBackground').click(function() {
		changeCateg(this,'background');
	});

	$('#categFeatures').click(function() {
		changeCateg(this,'features');
	});

	$('#categEyeMakeup').click(function() {
		changeCateg(this,'eyemakeup');
	});

	$('#categLipMakeup').click(function() {
		changeCateg(this,'lipmakeup');
	});

	$('#categShirt').click(function() {
		changeCateg(this,'shirt');
	});

});

