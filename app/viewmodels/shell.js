define(['plugins/router', 'durandal/app', 'knockout', 'dataservice', 'module'], function (router, app, ko, dataservice, module) {
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
                    { route: 'about', title: 'ABOUT', moduleId: 'viewmodels/about', nav: true },
                    { route: 'blog', title: 'BLOG', moduleId: 'viewmodels/blog', nav: true },
                    { route: 'contact', title: 'CONTACT', moduleId: 'viewmodels/contact', nav: true },
                    { route: 'details/:id(/:slideid)', moduleId: 'viewmodels/details' }
                    //get types from data file
                    //{ route: 'projects/', title: 'RESIDENTIAL', moduleId: 'viewmodels/projects', type: 'residential', nav: true },
                    //{ route: 'projects/', title: 'COMMERCIAL', moduleId: 'viewmodels/projects', type: 'commercial', nav: true },
                    //{ route: 'projects/', title: 'INTERIORS', moduleId: 'viewmodels/projects', type: 'interiors', nav: true },
                    //{ route: 'projects/', title: 'OTHER', moduleId: 'viewmodels/projects', type: 'other', nav: true }
                ]],
                categories = [];

            $.each(dataservice.categories, function(){
                var cat = this,
                    name = cat.name.toString();
                categories.push({ route: 'projects/', title: name.toString().toUpperCase(), moduleId: 'viewmodels/projects', type: name, nav: true })
            });

            routes = routes.concat(categories);
            router.map(routes).buildNavigationModel();

            return router.activate();
        }
    };
});