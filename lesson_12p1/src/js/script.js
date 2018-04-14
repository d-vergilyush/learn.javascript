$(document).ready( function(){
	$('.modal').css("top", "-200px");
	$('.show_modal').on("click", function(){
					$('.overlay').fadeIn();
					$('.modal').animate(
						{
							opacity: 'show',
							top: '0'
						},
						600);
				});

	$('.close').on("click", function(){
				$('.overlay').fadeOut();
				$('.modal').animate(
  {
    opacity: "hide",
    top: "-200px"
  },
1000);
});
	$(document).mouseup(function (e) { // по клику вне попапа
	    var popup = $('.modal');
	    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
	        $('.overlay').fadeOut()
				$('.modal').animate(
  {
    opacity: "hide",
    top: "-200px"
  },
1000);

	    }
	});

  $('.contactform_select').submit(function(event) {
  event.preventDefault();
  $.ajax({
  type: "POST",
  url: "mailer/smart.php",
  data: $(this).serialize()
  }).done(function() {
  $(this).find("input").val("");
  $(".modal, .overlay").fadeOut();
  $(".contactform_select").trigger("reset");
  });
  return false;
  });

});