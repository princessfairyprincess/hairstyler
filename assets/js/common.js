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

	//Switch between doll customizer and hairstyler

	const dollSwitch = $('.doll_link');
	const hairSwitch = $('.hair_link');
	const controls = $('.controls');

	dollSwitch.click(function() {
		if ($(hairSwitch).hasClass('active') && $(controls).hasClass('hair_active')) {
			controls.removeClass('hair_active').addClass('doll_active');
			dollSwitch.addClass('active');
			hairSwitch.removeClass('active');
		}
	});

	hairSwitch.click(function() {
		if ($(dollSwitch).hasClass('active') && $(controls).hasClass('doll_active')) {
			controls.removeClass('doll_active').addClass('hair_active');
			hairSwitch.addClass('active');
			dollSwitch.removeClass('active');
		}
	});


	//Change colour function

	changeColour = function(colouropts,colourobj,object) {
		let optsArray = $('.'+colouropts);
		let colourObject = '.'+colourobj;
		let foundInt;
		let x;
		for(x = 0; x <= 11; x++) {
			if(optsArray[x] == object) {
				foundInt = x;
			}
		}
		let i;
		for (i = 0; i<=11; i++) {
			$(colourObject).removeClass(colourobj+[i]).addClass(colourobj+foundInt);

			if ($(colourObject).hasClass('skin')) {
				$('.mouthlips').removeClass('lipshade'+[i]).addClass('lipshade'+foundInt);
			}
		}
	}

	$('.col-skin').click(function() {
		changeColour('col-skin','skin',this);
	});

	$('.col-shirt').click(function() {
		changeColour('col-shirt','shirtcol',this);
	});

	$('.col-eyes').click(function() {
		changeColour('col-eyes','eyecol',this);
	});

	$('.col-hairs').click(function() {
		changeColour('col-hairs','haircol',this);
	});



 	//Change parts

	changeVariant = function(partsgroup,part,object) {
		let partsOptsArray = $('.'+partsgroup);
		let partOptsQuant = $(partsOptsArray).length - 1;
		let partOpt = '.'+part;
		let foundInt;
		let x;

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
				$('.shirt').removeClass('shirt-body'+[i]).addClass('shirt-body'+foundInt);
			}

			if ($(object).hasClass('opt-chest')) {
				$('.shirt').removeClass('shirt-chest'+[i]).addClass('shirt-chest'+foundInt);
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

			if ($(object).hasClass('opt-hairbottomside')) {
				$('.headwrap').addClass('hide');
				$('.hairpart').removeClass('hide');
			}

			if ($(object).hasClass('hair-optbtn')) {
				$('.headwrap').addClass('hide');
				$('.hairpart').removeClass('hide');
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

	$('.opt-hairbottomside').click(function() {
		changeVariant('opt-hairbottomside','hairbottomside',this);
	});

	$('.opt-hairtopside').click(function() {
		changeVariant('opt-hairtopside','hairtopside',this);
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

	//Move skin colour palette between categs
	moveSkinColours = function(categ, opttype) {
		
		let skinColPalette = $('.skincols');
		
		let newPalette = $('.'+opttype+' .skincolpalette');

		skinColPalette.appendTo(newPalette);

		if (optViewer.hasClass('colours_active_view')) {
			optViewer.removeClass('colours_active_view').addClass('variants_active_view');
			optColState.removeClass('colors_active').addClass('variants_active');
		}
	}

	$('#categBody').click(function() {
		changeCateg(this,'body');
		moveSkinColours(this, 'body');
	});

	$('#categBrowbone').click(function() {
		changeCateg(this,'browbone');
		moveSkinColours(this,'browbone');
	});

	$('#categBrows').click(function() {
		changeCateg(this,'brows');
	});

	$('#categCheeks').click(function() {
		changeCateg(this,'cheeks');
		moveSkinColours(this,'cheeks');
	});

	$('#categChest').click(function() {
		changeCateg(this,'chest');
		moveSkinColours(this,'chest');
	});

	$('#categEyes').click(function() {
		changeCateg(this,'eyes');
	});

	$('#categHand').click(function() {
		changeCateg(this,'hand');
		moveSkinColours(this,'hand');
	});

	$('#categJawline').click(function() {
		changeCateg(this,'jawline');
		moveSkinColours(this,'jawline');
	});

	$('#categMouth').click(function() {
		changeCateg(this,'mouth');
		moveSkinColours(this,'mouth');
	});

	$('#categNose').click(function() {
		changeCateg(this,'nose');
		moveSkinColours(this,'nose');
	});

	$('#categBackground').click(function() {
		changeCateg(this,'backdrop');
	});

	$('#categFeatures').click(function() {
		changeCateg(this,'features');
		moveSkinColours(this,'features');
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

	$('#categHairBottomSide').click(function() {
		changeCateg(this,'hairbottomside');
	});

	$('#categHairTopSide').click(function() {
		changeCateg(this,'hairtopside');
	});

});

