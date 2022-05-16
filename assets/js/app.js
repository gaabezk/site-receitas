var app;
$(function () {
    app = {
        init: function () {
            app.loadPage();
            app.setEvents();
        },
        setEvents: function () {
            //- disable link with #
            $('body').on('click','a[href="#"]' ,function (e) {
                e.preventDefault();
            });
            //- --------------------------------------------------------------------------------------------------------

            //- load pages
            $('body').on('click', '.loadPage', function (e) {
                e.preventDefault();
                let page = $(this).data('page');
                if(app.validePage(page) && app.getPage('page') !== page){
                    app.pageLoading(true);
                    app.setPage(page);
                    setTimeout(() => {
                        $('.main').load('./pages/' + page + '.html');
                        app.changeNavbar();
                        $("html, body").animate({ scrollTop: 0 }, "slow");
                        app.pageLoading(false);
                    }, 1000)
                }
            });
            //- --------------------------------------------------------------------------------------------------------

            //- Mudar cor do menu
            $(window).on("scroll", function() {
                if(app.getPage('page') === 'index'){
                    if($(window).scrollTop() > 200) {
                        $(".navbar").addClass("navbar-color");
                    } else {
                        $(".navbar").removeClass("navbar-color");
                    }
                }
            });
            //- --------------------------------------------------------------------------------------------------------
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
            let page = (getPage && app.validePage(getPage)) ? './pages/' + getPage + '.html' : $('.main').data('page');
            $('.main').load(page);
            app.changeNavbar();
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

        },
        validePage: function (page) {
            const pages = ["index","bebidas","caipirinha","sobremesas","coquetel","mousse","pave","baklava","suco","macarrao","lasanha","empadao","picanha","frango","tilapia","massas","carnes"];
            return (pages.indexOf(page) > -1);
        },
        changeNavbar: function () {
            if(app.getPage('page') !== 'index'){
                $(".navbar").addClass("navbar-color");
                $(".navbar").css("position", "relative");
            }else{
                $(".navbar").css("position", "fixed");
                $(".navbar").removeClass("navbar-color");
            }
        }
    };
    app.init();
});