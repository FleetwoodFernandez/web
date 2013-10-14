define(['plugins/router', 'knockout', 'dataservice'], function(router, ko, dataservice) {
    var ctor = function () {
    	var self = this;
    	self.project = ko.observable();
        self.activate = function(id) {
        	self.project(dataservice.getProjectByID(id));
        };
    };
    return ctor;
});