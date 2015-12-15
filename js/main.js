$(".navElements").on("click", function() 
{
	if ($(this).hasClass("active"))
	{
		$(this).removeClass("active");
		$("#menu").removeClass("active");
		$("#content").removeClass("active");
	}
	else 
	{
		$(this).addClass("active");
		$("#menu").addClass("active");
		$("#content").addClass("active");
	}
});