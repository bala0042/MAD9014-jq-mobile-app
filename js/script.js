$(document).on( "mobileinit", function() {
	var page = localStorage.getItem('page');
	if(page !== "undefined"){
		$.mobile.changePage( page );
	}
});
$(document).on("pagechange", function(toPage) {
	if(typeof(Storage) !== "undefined"){
		localStorage.setItem('page', toPage.currentTarget.URL);
	}
});