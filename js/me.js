$( document ).on( "pageinit", ".swipeEffect", function() {

    $( document ).on( "swipeleft swiperight", ".swipeEffect", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#right-panel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#left-panel" ).panel( "open" );
            }
        }
    });
});

$("body").on("pageinit", "#offroad", function(evt, ui) {
    $("#dataList").lazyloader();

    $.mobile.lazyloader.prototype.timeoutOptions.mousewheel = 300;
    $.mobile.lazyloader.prototype.timeoutOptions.scrollstart = 700;
    $.mobile.lazyloader.prototype.timeoutOptions.scrollstop = 100;
    $.mobile.lazyloader.prototype.timeoutOptions.showprogress = 100;
});


$(document).ready(function() {

    $.getJSON('dataSources/listData.json', function(data) {
        var items = [];

        //console.log("test");
        //console.log(data);

        $.each(data, function(key, val) {
            items.push('
                <li>
                    <a href="'+val['link']+'" rel="external">
                        <img height="80px" src="'+val['thumbimg']+'">
                        <h2 title="'+val['title']+'" >'+val['title']+'</h2>
                        <p>'+val['description']+'</p>
                    </a>
                </li>');
        });

        $("#dataList").html(items.join(''));

        $('#dataList').listview('option', 'filter', true);
        $('#dataList').trigger("listviewcreate");

        $("#dataList").listview('refresh');

    });
});
    


