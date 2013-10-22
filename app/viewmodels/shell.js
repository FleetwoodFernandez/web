﻿define(['plugins/router', 'durandal/app', 'knockout', 'dataservice', 'module'], function (router, app, ko, dataservice, module) {
    return {
        router: router,
        mainNavigation: ko.computed(function() {
            return ko.utils.arrayFilter(router.navigationModel(), function(route) {
                return route.settings === undefined;
            });
        }),
        subNavigation: function(filter) {
            return ko.utils.arrayFilter(router.navigationModel(), function(route) {
                return route.settings ? route.settings.type === filter : null;
            });
        },
        getCurrentRoute: function() {
            var route = router.activeInstruction() ? router.activeInstruction().fragment : null;
            if(route) {
                route = route.split("/")[0];
            } else {
                route = null;
            }
            return route;
        },
        displayProjectFilters: ko.computed(function(){
            var route = router.activeItem() ? router.activeItem().__moduleId__ : null;
            return route && (route === 'viewmodels/projects' || route === 'viewmodels/details');
        }),
        getBackground: ko.computed(function(){
            var route = router.activeItem() ? router.activeItem().__moduleId__ : null,
                css = '';
            switch(route) {
                case 'viewmodels/projects':
                    css = 'projects';
                    break;
                case 'viewmodels/details':
                    css = 'details';
                    break;
                case 'viewmodels/about':
                    css = 'about';
                    break;
                case 'viewmodels/contact':
                    css = 'contact';
                    break;
                case 'viewmodels/blog':
                    css = 'blog';
                    break;
            }
            return 'wrap backsplash ' + css;
        }),
        activate: function () {
            var routes = [[
                    { route: '', moduleId: 'viewmodels/home' },
                    { route: 'projects(/:type)', hash:'#projects', title: 'PROJECTS', moduleId: 'viewmodels/projects', nav: true },
                    { route: 'about', hash:'#about', title: 'ABOUT', moduleId: 'viewmodels/about', nav: true },
                    { route: 'blog', title: 'BLOG', moduleId: 'viewmodels/blog', nav: true },
                    { route: 'contact', title: 'CONTACT', moduleId: 'viewmodels/contact', nav: true },
                    { route: 'details/:id(/:slideid)', moduleId: 'viewmodels/details' },
                    //get types from data file
                    { route: 'about/fleetwood', title: 'HUNTER FLEETWOOD', moduleId: 'viewmodels/fleetwood', settings: { type: 'about', id: 'fleetwood' }, nav: true },
                    { route: 'about/fernandez', title: 'MARIAPAZ FERNANDEZ', moduleId: 'viewmodels/fernandez', settings: { type: 'about', id: 'fernandez' }, nav: true },
                    { route: 'about/process', title: 'PROCESS', moduleId: 'viewmodels/process', settings: { type: 'about', id: 'process' }, nav: true }
                ]],
                categories = [];

            $.each(dataservice.categories, function(){
                var cat = this,
                    name = cat.name.toString();
                categories.push({ route: 'projects/', title: name.toString().toUpperCase(), moduleId: 'viewmodels/projects', settings: { type: 'categories', id: name }, nav: true })
            });

            routes = routes.concat(categories);
            router.map(routes).buildNavigationModel();

            return router.activate();
        }
    };
});