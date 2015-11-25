var page = localStorage.getItem('page');
if(!page){
	page = "win1";
}
console.log(page);
	
$(document).on( "pageshow", function() {
	$("#startTut").off("click").click(function(e){
		e.preventDefault();
		$( ":mobile-pagecontainer" ).pagecontainer( "change", "#"+page );
	});
});

$(document).on("pagechange", function() {
	var pageid = $.mobile.activePage.attr('id');
	if(typeof(Storage) !== "undefined" && pageid != "home" && pageid != "info"){
		localStorage.setItem('page', pageid);
		console.log(pageid);
	}
});