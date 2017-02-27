requirejs.config({
    paths: {
        'text': 'require/text',
        'durandal':'durandal/js',
        'plugins' : 'durandal/js/plugins',
        'transitions' : 'durandal/js/transitions',
        'knockout': 'knockout/knockout-2.3.0',
        'bootstrap': 'bootstrap/js/bootstrap',
        'jquery': 'jquery/jquery-1.9.1',
        'dataservice': 'viewmodels/dataservice',
        'bindings': 'durandal/js/plugins/bindings',
        'imageLoader': 'jquery/imagesloaded.pkgd.min',
        'cbpBGSlideshow': 'jquery/cbpBGSlideshow',
        'modernizr': 'jquery/modernizr.custom'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
       }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bindings', 'jquery'],  function (system, app, viewLocator, bindings, $) {
    //>>excludeStart("build", true);
    //system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Fleetwood / Fernandez';

    app.configurePlugins({
        router: true
    });

    app.start().then(function() {
        viewLocator.useConvention();
        app.setRoot('viewmodels/shell', 'entrance');
    });

    document.onmousedown = disableRightClk;

    function disableRightClk(e) {
        if(e.button === 2) {
            return false;
        }
    }
});