define(['knockout'], function(ko) {
	var Data = {
		Projects: {
			categories: [
				{
					id: 1,
					name: "residential"
				},
				{
					id: 2,
					name: "commercial"
				},
				{
					id: 3,
					name: "interiors"
				},
				{
					id: 4,
					name: "other"
				}
			],
			projects: [
				{
					name: "Food",
					description: "",
					caption: "",
					subcaption: "",
					thumbnail: "img/proj_01.jpg",
					categories: ["food"],
					assets: []
				},
				{
					name: "Food",
					description: "",
					caption: "",
					subcaption: "",
					thumbnail: "img/proj_01.jpg",
					categories: [],
					assets: []
				},
				{
					name: "Food",
					description: "",
					caption: "",
					subcaption: "",
					thumbnail: "img/proj_01.jpg",
					categories: ["food"],
					assets: []
				},
				{
					name: "Food",
					description: "",
					caption: "",
					subcaption: "",
					thumbnail: "img/proj_01.jpg",
					categories: [],
					assets: []
				},
				{
					name: "Food",
					description: "",
					caption: "",
					subcaption: "",
					thumbnail: "img/proj_01.jpg",
					categories: [],
					assets: []
				},
				{
					name: "Food",
					description: "",
					caption: "",
					subcaption: "",
					thumbnail: "img/proj_01.jpg",
					categories: ["food"],
					assets: []
				},
				{
					name: "Food",
					description: "",
					caption: "",
					subcaption: "",
					thumbnail: "img/proj_01.jpg",
					categories: [],
					assets: []
				},
				{
					name: "Food",
					description: "",
					caption: "",
					subcaption: "",
					thumbnail: "img/proj_01.jpg",
					categories: [],
					assets: []
				}
			]
		}
	};

    var ctor = function () {
    	var self = this;
        self.displayName = 'Projects';
		self.data = Data.Projects;
		self.categories = Data.Projects.categories;
		self.projectURL = function(id) {
			return '#details/' + id;
		};
        self.filter = ko.observable("all");
        self.filtered = ko.computed(function () {
            if(self.filter() === "all") {
                return Data.Projects.projects;
            } else {
                var projs = [];
                $.each(Data.Projects.projects, function(i, p) {
                    if($.inArray(self.filter(), p.categories) > -1) {
                        projs.push(p);
                    }
                });
                return projs;
            }
        });
    };
    return ctor;
});