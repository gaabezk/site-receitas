var app;
$(function () {
    app = {
        init: function () {
            app.loadElements();
            app.loadPage();
            app.setEvents();
        },
        setEvents: function () {
            //- disable link with #
            $('body').on('click','a[href="#"]',function (e) {
                e.preventDefault();
            });
            //- --------------------------------------------------------------------------------------------------------

            //- load pages
            $('body').on('click', '.loadPage', function (e) {
                e.preventDefault();
                let page = $(this).data('page');
                app.setPage(page);
                $('#main').load('./pages/' + page + '.html');
            });
            //- --------------------------------------------------------------------------------------------------------
        },
        loadElements: function () {
            $('#navbar').load($('#navbar').data('element'));
            $('#footer').load($('#footer').data('element'));
            $('#header').load($('#header').data('element'));
        },
        pageLoading: function (show) {
            if (show) {
                $('#preloaderPage').removeClass('hide');
            } else {
                $('#preloaderPage').addClass('hide');
            }
        },
        loadPage: function () {
            let getPage = app.getPage('page');
            let page = (getPage) ? './pages/' + getPage + '.html' : $('#main').data('page');
            $('#main').load(page);
        },
        getPage: function getUrlParameter(sParam) {
            let searchParams = new URLSearchParams(window.location.search)
            if (searchParams.has(sParam)) {
                return searchParams.get(sParam)
            }
            return false;
        },
        setPage: function (page) {
            if(!(document.location.href.indexOf('page='+page) > -1)){
                let queryParams = new URLSearchParams(window.location.search);
                queryParams.set("page", page);
                history.replaceState(null, null, "?"+queryParams.toString());
            }

        }
    };
    app.init();
});