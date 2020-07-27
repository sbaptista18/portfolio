/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var routes = []

function lazyLoad(view) {
    return () => import(`@/components/${view}.vue`)
}

function FadeIn() {
    var allMods = $(".movement, .cover");
    var lateralMods = $(".lateral, .lateralR");
    var svg = $("#svg");

    (function ($) {
        $.fn.visible = function (partial, adjust) {
            if (adjust === undefined) {
                adjust = 0;
            }
            var elem = $(this),
                wind = $(window),
                viewTop = wind.scrollTop(),
                viewBottom = viewTop + wind.height(),
                elem_top = elem.offset().top + adjust,
                elem_bottom = elem_top + elem.height() - adjust,
                compareTop = partial === true ? elem_bottom : elem_top,
                compareBottom = partial === true ? elem_top : elem_bottom;

            return compareBottom <= viewBottom && compareTop >= viewTop;
        };
    })(jQuery);

    var win = $(window);

    var xmlTeste = true;

    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("placed");
        }
    });
    svg.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            xmlTeste &&
                el.append(
                    "<img src='assets/img/elemento_animated.svg' alt=''></img>"
                );
            xmlTeste = false;
        }
    });
    lateralMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true, 100)) {
            el.addClass("placed");
        }
    });

    win.scroll(function (event) {
        allMods.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("placed");
            }
        });
        lateralMods.each(function (i, el) {
            var el = $(el);
            if (el.visible(true, 100)) {
                el.addClass("placed");
            }
        });
        svg.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                xmlTeste &&
                    el.append(
                        "<img src='assets/img/elemento_animated.svg' alt=''></img>"
                    );
                xmlTeste = false;
            }
        });
    });
}

routes = [
    {
        path: '*',
        //component: NotFoundComponent
    },
    {
        path: '/',
        name: 'index',
        component: lazyLoad('index')
    },
    {
        path: '/project/:name',
        name: 'project',
        component: lazyLoad('includes/project')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior: function (to) {
        if (to.hash) {
            return $('html,body').stop().animate({ scrollTop: $(to.hash).offset().top - $(to.hash).height() }, 1000)
        }
    }
})

router.afterEach((to, from, next) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0
    FadeIn();
})

export default router;
