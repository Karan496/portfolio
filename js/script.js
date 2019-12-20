(function() {

	var parent = document.querySelector("#rangeSlider");
	if(!parent) return;

	var
	rangeS = parent.querySelectorAll("input[type=range]"),
		numberS = parent.querySelectorAll("input[type=number]");

	rangeS.forEach(function(el) {
		el.oninput = function() {
			var slide1 = parseFloat(rangeS[0].value),
				slide2 = parseFloat(rangeS[1].value);



			numberS[0].value = slide1;

		}
	});

	numberS.forEach(function(el) {
		el.oninput = function() {
			var number1 = parseFloat(numberS[0].value);



			rangeS[0].value = number1;


		}
	});

})();



(function() {

	var parent = document.querySelector("#rangeSlider2");
	if(!parent) return;

	var
	rangeS = parent.querySelectorAll("input[type=range]"),
		numberS = parent.querySelectorAll("input[type=number]");

	rangeS.forEach(function(el) {
		el.oninput = function() {
			var slide1 = parseFloat(rangeS[0].value),
				slide2 = parseFloat(rangeS[1].value);



			numberS[0].value = slide1;

		}
	});

	numberS.forEach(function(el) {
		el.oninput = function() {
			var number1 = parseFloat(numberS[0].value);



			rangeS[0].value = number1;


		}
	});

})();

(function() {

	var parent = document.querySelector("#rangeSlider3");
	if(!parent) return;

	var
	rangeS = parent.querySelectorAll("input[type=range]"),
		numberS = parent.querySelectorAll("input[type=number]");

	rangeS.forEach(function(el) {
		el.oninput = function() {
			var slide1 = parseFloat(rangeS[0].value),
				slide2 = parseFloat(rangeS[1].value);



			numberS[0].value = slide1;

		}
	});

	numberS.forEach(function(el) {
		el.oninput = function() {
			var number1 = parseFloat(numberS[0].value);



			rangeS[0].value = number1;


		}
	});

})();

(function() {

	var parent = document.querySelector("#rangeSlider4");
	if(!parent) return;

	var
	rangeS = parent.querySelectorAll("input[type=range]"),
		numberS = parent.querySelectorAll("input[type=number]");

	rangeS.forEach(function(el) {
		el.oninput = function() {
			var slide1 = parseFloat(rangeS[0].value),
				slide2 = parseFloat(rangeS[1].value);



			numberS[0].value = slide1;

		}
	});

	numberS.forEach(function(el) {
		el.oninput = function() {
			var number1 = parseFloat(numberS[0].value);



			rangeS[0].value = number1;


		}
	});

})();

(function() {

	var parent = document.querySelector("#rangeSlider5");
	if(!parent) return;

	var
	rangeS = parent.querySelectorAll("input[type=range]"),
		numberS = parent.querySelectorAll("input[type=number]");

	rangeS.forEach(function(el) {
		el.oninput = function() {
			var slide1 = parseFloat(rangeS[0].value),
				slide2 = parseFloat(rangeS[1].value);



			numberS[0].value = slide1;

		}
	});

	numberS.forEach(function(el) {
		el.oninput = function() {
			var number1 = parseFloat(numberS[0].value);



			rangeS[0].value = number1;


		}
	});

})();

(function() {

	var parent = document.querySelector("#rangeSlider6");
	if(!parent) return;

	var
	rangeS = parent.querySelectorAll("input[type=range]"),
		numberS = parent.querySelectorAll("input[type=number]");

	rangeS.forEach(function(el) {
		el.oninput = function() {
			var slide1 = parseFloat(rangeS[0].value),
				slide2 = parseFloat(rangeS[1].value);



			numberS[0].value = slide1;

		}
	});

	numberS.forEach(function(el) {
		el.oninput = function() {
			var number1 = parseFloat(numberS[0].value);



			rangeS[0].value = number1;


		}
	});

})();

(function() {

	var parent = document.querySelector("#rangeSlider7");
	if(!parent) return;

	var
	rangeS = parent.querySelectorAll("input[type=range]"),
		numberS = parent.querySelectorAll("input[type=number]");

	rangeS.forEach(function(el) {
		el.oninput = function() {
			var slide1 = parseFloat(rangeS[0].value),
				slide2 = parseFloat(rangeS[1].value);



			numberS[0].value = slide1;

		}
	});

	numberS.forEach(function(el) {
		el.oninput = function() {
			var number1 = parseFloat(numberS[0].value);



			rangeS[0].value = number1;


		}
	});

})();



 $(document).ready(function() {
            $(".Menu").click(function() {
                $('nav').slideToggle('fast');
            });
        });

      

        $(window).on('load', function() {
                $('#loading').fadeOut();
                $('#Load').delay(100).fadeOut('slow');
                $('body').delay(100).css({
                    'overflow': 'visible'
                });
            })

      

            $(document).ready(function() {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 100) {
                        $('#scroll').fadeIn();
                    } else {
                        $('#scroll').fadeOut();
                    }
                });
                $('#scroll').click(function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);
                    return false;
                });
            });

        

        $(document).ready(function() {
            $('ul li').click(function() {
                $('li').removeClass("active");
                $(this).addClass("active");
            });
            
            $("header nav .grid").click(function(){
                $(".col-md-6.col-lg-6.col-xl-8.MainCenter").toggleClass("HideBG");
                
                
            });
        });
function alertFilename() {
  var thefile = document.getElementById('thefile');
  document.getElementById('fileName').innerHTML =  thefile.value; }