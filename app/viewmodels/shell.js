define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', moduleId: 'viewmodels/home' },
                { route: 'projects', title: 'PROJECTS', moduleId: 'viewmodels/projects', nav: true },
                { route: 'about', title: 'ABOUT', moduleId: 'viewmodels/about', nav: true },
                { route: 'blog', title: 'BLOG', moduleId: 'viewmodels/blog', nav: true },
                { route: 'contact', title: 'CONTACT', moduleId: 'viewmodels/contact', nav: true },
                { route: 'details/:id', moduleId: 'viewmodels/details' }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});