define(['plugins/router', 'durandal/app', 'knockout', 'dataservice'], function (router, app, ko, dataservice) {
    return {
        router: router,
        mainNavigation: ko.computed(function() {
            return ko.utils.arrayFilter(router.navigationModel(), function(route) {
                return route.type === undefined;
            });
        }),
        projectFilters: ko.computed(function() {
            return ko.utils.arrayFilter(router.navigationModel(), function(route) {
                return route.type !== undefined;
            });
        }),
        activate: function () {    
            router.map([
                { route: '', moduleId: 'viewmodels/home' },
                { route: 'projects(/:type)', hash:'#projects', title: 'PROJECTS', moduleId: 'viewmodels/projects', nav: true },
                { route: 'about', title: 'ABOUT', moduleId: 'viewmodels/about', nav: true },
                { route: 'blog', title: 'BLOG', moduleId: 'viewmodels/blog', nav: true },
                { route: 'contact', title: 'CONTACT', moduleId: 'viewmodels/contact', nav: true },
                { route: 'details/:id', moduleId: 'viewmodels/details' },
                //get types from data file
                { route: 'projects/', title: 'RESIDENTIAL', moduleId: 'viewmodels/projects', type: 'residential', nav: true },
                { route: 'projects/', title: 'COMMERCIAL', moduleId: 'viewmodels/projects', type: 'commercial', nav: true },
                { route: 'projects/', title: 'INTERIORS', moduleId: 'viewmodels/projects', type: 'interiors', nav: true },
                { route: 'projects/', title: 'OTHER', moduleId: 'viewmodels/projects', type: 'other', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});