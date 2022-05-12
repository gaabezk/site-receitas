var app;
$(function () {
    app = {
        init: function () {
            app.setEvents();
        },
        setEvents: function () {
            app.loadElements();

            //- disable link with #
            $('a[href="#"]').click(function (e){
                e.preventDefault();
            });
            //- --------------------------------------------------------------------------------------------------------

            //- load pages
            // $('.loadPage').click(function (e) {
            //     e.preventDefault();
            //     $('.main').load($(this).data('page'));
            // });
            //- --------------------------------------------------------------------------------------------------------
        },
        loadElements: function () {
            $('#navbar').load($('#navbar').data('element'));
            $('#footer').load($('#footer').data('element'));
            $('#header').load($('#header').data('element'));
        },
        pageLoading : function (show){
            if (show) {
                $('#preloaderPage').removeClass('hide');
            } else {
                $('#preloaderPage').addClass('hide');
            }
        },
    };
    app.init();
});