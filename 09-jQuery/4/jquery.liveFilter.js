(function($){
	$.fn.liveFilter = function (aType) {
		
		//що фільтрувати
		var filterTarget = $(this);
		var child;
		if ($(this).is('ul')) {
			child = 'li';
		} else if ($(this).is('ol')) {
			child = 'li';
		} else if ($(this).is('table')) {
			child = 'tbody tr';
		}

		var hide;
		var show;
		var filter;
		
		// подія для вводу
		$('input.filter').keyup(function() {
			
			// отримуємо значення фільтру
			filter = $(this).val();
			
			// отримуємо, що потрібно заховати, і те, що потрібно показати
			hide = $(filterTarget).find(child + ':not(:Contains("' + filter + '"))');
			show = $(filterTarget).find(child + ':Contains("' + filter + '")')
			
			// Анімуємо пункти, що потрібно показати та сховати
			if ( aType == 'basic' ) {
				hide.hide();
				show.show();
			} else if ( aType == 'slide' ) {
				hide.slideUp(500);
				show.slideDown(500);
			} else if ( aType == 'fade' ) {
				hide.fadeOut(400);
				show.fadeIn(400);
			}
			
		});		
		
		// корист. вираз для невідчутної до регістру тексту функції contains()
		jQuery.expr[':'].Contains = function(a,i,m){
		    return jQuery(a).text().toLowerCase().indexOf(m[3].toLowerCase())>=0;
		}; 

	}

})(jQuery);