define(['plugins/router', 'knockout'], function(router, ko) {
    var ctor = function () {
    	var self = this;
        self.title = ko.observable();
        self.activate = function(options) {
        	self.title(options);
        };
    };
    return ctor;
});