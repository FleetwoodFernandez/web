define(['plugins/router', 'knockout', 'dataservice'], function(router, ko, dataservice) {
    var ctor = function () {
    	var self = this;
    	self.project = ko.observable();
    	self.slideid = ko.observable();
    	self.slideHeight = ko.observable();
        self.activate = function(id, slideid) {
        	self.project(dataservice.getProjectByID(id));
        	self.slideid(slideid);
        };
    };
    return ctor;
});