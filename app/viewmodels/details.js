define(['plugins/router', 'knockout', 'dataservice'], function(router, ko, dataservice) {
	var ctor = function () {
    	var self = this;
    	self.project = ko.observable();
    	self.slideid = ko.observable();
    	self.slideHeight = ko.observable();
        self.displayInfo = ko.observable(false);
        self.activate = function(id, slideid, info) {
        	self.project(dataservice.getProjectByID(id));
        	self.slideid(slideid);
            self.displayInfo(info !== null);
            console.log(self.displayInfo())
        };
        self.changeSlide = function(elm) {
            console.log(elm)
        };
        self.closeInfo = function() {
            self.displayInfo(false);
        };
    };
    return ctor;
});