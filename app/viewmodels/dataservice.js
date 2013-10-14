define(function(require){
	var service = {};
	service.categories = [
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
	];
	service.projects = [
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
	];
	service.getProjectByID = function(id) {
		return service.projects[id];
	};

 	return service;
});