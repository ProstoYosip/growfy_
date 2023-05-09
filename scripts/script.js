// if($(".list__item").css("display") === "none"){
// $("i").on("click", function(){
// 		$(".list__item").fadeToggle();
// });
// } else{}
$("i").click(function(){
	if($(".list__item").css("display") === "none"){
		$(".list__item").fadeIn();
	} else{
		$(".list__item").fadeOut();
	}
})








