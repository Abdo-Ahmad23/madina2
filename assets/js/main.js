let btnMore=document.querySelector(".btnMore");
/*
function learnMore(){
	let x=
	`<p style="word-spacing: 10px;font-weight: 500;font-size: larger;" class="paragraph">شركة نقل البضائع "المدينة المنورة" هي شركة عالمية رائدة في مجال خدمات النقل والشحن. تأسست الشركة برؤية واضحة لتلبية احتياجات العملاء في مجال نقل البضائع وتوصيلها بسرعة وأمان إلى جميع محافظات مصر.
		تتميز شركة نقل البضائع "المدينة المنورة" بخبرتها الواسعة وتاريخها الممتد في صناعة النقل والشحن. تعتمد الشركة على فريق عمل محترف ومدرب تدريباً عالياً، يتمتع بالمعرفة والمهارات اللازمة لضمان تنفيذ عمليات النقل بكفاءة وفعالية.</p>`;
	
		let y=document.querySelector("paragraph");
	y=x;
}
*/
// btnMore.addEventListener("click",learnMore());

// btnMore.addEventListener("click", function(event){
// 	document.getElementsByClassName("paragraph").innerHTML = 
// 	`<p style="word-spacing: 10px;font-weight: 500;font-size: larger;" class="paragraph">شركة نقل البضائع "المدينة المنورة" هي شركة عالمية رائدة في مجال خدمات النقل والشحن. تأسست الشركة برؤية واضحة لتلبية احتياجات العملاء في مجال نقل البضائع وتوصيلها بسرعة وأمان إلى جميع محافظات مصر.
// 		تتميز شركة نقل البضائع "المدينة المنورة" بخبرتها الواسعة وتاريخها الممتد في صناعة النقل والشحن. تعتمد الشركة على فريق عمل محترف ومدرب تدريباً عالياً، يتمتع بالمعرفة والمهارات اللازمة لضمان تنفيذ عمليات النقل بكفاءة وفعالية.</p>`;

//   });
let textPar=document.querySelector(".paragraph").innerHTML;

  btnMore.addEventListener("click",function(){
	if(document.querySelector(".btnMore").textContent==="Learn More"){
	document.querySelector(".paragraph").innerHTML=`<p style="word-spacing: 10px;font-weight: 500;font-size: larger;" class="paragraph">شركة نقل البضائع "المدينة المنورة" هي شركة عالمية رائدة في مجال خدمات النقل والشحن. تأسست الشركة برؤية واضحة لتلبية احتياجات العملاء في مجال نقل البضائع وتوصيلها بسرعة وأمان إلى جميع محافظات مصر.
		تتميز شركة نقل البضائع "المدينة المنورة" بخبرتها الواسعة وتاريخها الممتد في صناعة النقل والشحن. تعتمد الشركة على فريق عمل محترف ومدرب تدريباً عالياً، يتمتع بالمعرفة والمهارات اللازمة لضمان تنفيذ عمليات النقل بكفاءة وفعالية.</p>`;
		// function to(){
			document.querySelector(".btnMore").innerHTML=`<li class="btnMore"><a class="btn btn-warning">Learn Less</a></li>`;
		// }
		// setTimeout(to,3000);
		// document.querySelector(".btnMore").textContent=="Learn Less";
		console.log(document.querySelector(".btnMore").textContent);
		console.log(1);
	}
	else{
		document.querySelector(".paragraph").innerHTML=`<p style="word-spacing: 10px;font-weight: 500;font-size: larger;" class="paragraph">شركة نقل البضائع "المدينة المنورة" هي شركة عالمية رائدة في مجال خدمات النقل والشحن. تأسست الشركة برؤية واضحة لتلبية احتياجات العملاء في مجال نقل البضائع وتوصيلها بسرعة وأمان إلى جميع محافظات مصر....
		</p>`;
		document.querySelector(".btnMore").innerHTML=`<li class="btnMore"><a class="btn btn-warning">Learn More</a></li>`;
		// document.querySelector(".btnMore").textContent=="Learn More";
		console.log(document.querySelector(".btnMore").textContent);
		console.log(2);
	}
	});
let btnMore2=document.querySelector(".btnMore2");
	btnMore2.addEventListener("click",function(){
		if(document.querySelector(".moreLists").classList.contains("d-none")){
			document.querySelector(".moreLists").classList.remove("d-none");
			document.querySelector(".btnMore2").innerHTML=`<li class="btnMore2"><a main class="btn btn-warning">Learn Less</a></li>`;
		}
		else{
			document.querySelector(".moreLists").classList.add("d-none");
			document.querySelector(".btnMore2").innerHTML=`<li class="btnMore2"><a main class="btn btn-warning">Learn More</a></li>`;
		}
	})
	let btnMore3=document.querySelector(".btnMore3");
	btnMore3.addEventListener("click",function(){
		if(btnMore3.textContent==="Learn More")
		{
			btnMore3.innerHTML=`<li class="btnMore3"><a main class="btn btn-warning">Learn Less</a></li>`;
			document.querySelector(".par2").innerHTML=`<p class="content">شركتنا تتسم بالتميز والابتكار في مجال نقل وتوصيل البضائع، حيث نجمع بين الكفاءة العالية والخدمة الاحترافية. نفتخر بفريق متخصص يعمل بتفانٍ لضمان وصول منتجاتكم بأمان وفي الوقت المحدد.

			نحن لسنا مجرد شركة نقل، بل شريك حقيقي يفهم احتياجات عملائنا ويسعى جاهدًا لتحقيق رضاهم. نضع الجودة في صلب اهتماماتنا، حيث نحرص على الحفاظ على سلامة وجودة المنتجات خلال عملية النقل.
			
			تجربة عملاءنا ليست مجرد توصيل، بل هي رحلة مميزة من الراحة والثقة. نحن هنا لنجعل كل عملية نقل تتسم بالسلاسة والفعالية. اعتمدوا علينا لتحقيق تجربة لا تنسى في عالم النقل والتوصيل.</p>`;
		}
		else{
			btnMore3.innerHTML=`<li class="btnMore3"><a main class="btn btn-warning">Learn More</a></li>`;
			document.querySelector(".par2").innerHTML=`<p class="content par2 ">شركتنا تتسم بالتميز والابتكار في مجال نقل وتوصيل البضائع، حيث نجمع بين الكفاءة العالية والخدمة الاحترافية. نفتخر بفريق متخصص يعمل بتفانٍ لضمان وصول منتجاتكم بأمان وفي الوقت المحدد.

			نحن لسنا مجرد شركة نقل، بل شريك حقيقي يفهم احتياجات عملائنا ويسعى جاهدًا لتحقيق رضاهم. نضع الجودة في صلب اهتماماتنا، حيث نحرص على الحفاظ على سلامة وجودة المنتجات خلال عملية النقل.
			.............</p>`;
		}
	})


















(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav = $('#nav');

		if ($nav.length > 0) {

			// Shrink effect.
				$main
					.scrollex({
						mode: 'top',
						enter: function() {
							$nav.addClass('alt');
						},
						leave: function() {
							$nav.removeClass('alt');
						},
					});

			// Links.
				var $nav_a = $nav.find('a');

				$nav_a
					.scrolly({
						speed: 1000,
						offset: function() { return $nav.height(); }
					})
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$nav_a
								.removeClass('active')
								.removeClass('active-locked');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								initialize: function() {

									// Deactivate section.
										if (browser.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($nav_a.filter('.active-locked').length == 0) {

											$nav_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);