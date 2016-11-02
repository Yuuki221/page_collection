// lightbox plugin 
'use strict'
lightbox.option({
	'resizeDuration': 200,
	'wrapAround': true
});

// dealing with add/minus qauntity 
$('#qauntity-plus').click(function(){
	var curQnty = Number($('.quantity-input').val());
	$('.quantity-input').val(curQnty+1);
});

$('#qauntity-minus').click(function(){
	var curQnty = Number($('.quantity-input').val());
	if(curQnty > 0){
		$('.quantity-input').val(curQnty-1);
	}
});


// use ajax to call images load as user scroll 

$('.items-container').scroll(function(){
	$.ajax({
		type: "GET",
		url: "/get_items",
		complete: function(e, xhr, setting){
			switch(e.status){
				case 500:
					alert('500 internal server error');
					break;
				case 404:
					alert('404 Page not found!');
					break;
				case 401:
					alert('401 unauthorized access');
					break;
			}
		}
	}).done(function(data){
		var obj = JSON.parseJSON(data);
		if(obj.sucess == 1){
			$('.item-container').append();
		}else if(obj.error == 1){
			alert('data error');
		}
	});
});
