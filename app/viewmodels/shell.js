define(['plugins/router', 'durandal/app', 'knockout', 'dataservice', 'module'], function (router, app, ko, dataservice, module) {
    return {
        router: router,
        mainNavigation: ko.computed(function() {
            return ko.utils.arrayFilter(router.navigationModel(), function(route) {
                return route.type === undefined;
            });
        }),
        subNavigation: function(filter) {
            return ko.utils.arrayFilter(router.navigationModel(), function(route) {
                return route.type === filter;
            });
        },
        getCurrentRoute: function() {
            var route = router.activeItem() ? router.activeItem().__moduleId__ : null;
            if(route) {
                route = route.split("/")[1];
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
                    { route: 'about(/:type)', hash:'#about', title: 'ABOUT', moduleId: 'viewmodels/about', nav: true },
                    { route: 'blog', title: 'BLOG', moduleId: 'viewmodels/blog', nav: true },
                    { route: 'contact', title: 'CONTACT', moduleId: 'viewmodels/contact', nav: true },
                    { route: 'details/:id(/:slideid)', moduleId: 'viewmodels/details' },
                    //get types from data file
                    { route: 'about/', title: 'HUNTER FLEETWOOD', moduleId: 'viewmodels/projects', type: 'about', nav: true },
                    { route: 'about/', title: 'MARIAPAZ FERNANDEZ', moduleId: 'viewmodels/projects', type: 'about', nav: true },
                    { route: 'about/', title: 'PROCESS', moduleId: 'viewmodels/projects', type: 'about', nav: true }
                ]],
                categories = [];

            $.each(dataservice.categories, function(){
                var cat = this,
                    name = cat.name.toString();
                categories.push({ route: 'projects/', title: name.toString().toUpperCase(), moduleId: 'viewmodels/projects', type: "categories", nav: true })
            });

            routes = routes.concat(categories);
            router.map(routes).buildNavigationModel();

            return router.activate();
        }
    };
});