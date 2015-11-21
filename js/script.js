$(document).on( "mobileinit", function() {
	var page = localStorage.getItem('page');
	if(page !== "undefined"){
		$.mobile.pageContainer.pagecontainer( "change", "#"+page );
	}
});
$(document).on("pagechange", function() {
	if(typeof(Storage) !== "undefined"){
		localStorage.setItem('page', $.mobile.activePage.attr('id') );
		console.log($.mobile.activePage.attr('id'));
	}
});