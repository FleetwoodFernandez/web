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
			description: "Quisque ultrices ut elit eget dapibus. Duis suscipit erat vel iaculis faucibus. Nullam eu justo urna. Maecenas sit amet risus ut nulla pulvinar vehicula. Ut id eros eu lorem fringilla vulputate non nec odio. In varius congue lectus sit amet aliquam. Donec volutpat orci nec convallis lobortis. Proin a nisl eu velit ullamcorper auctor. Vestibulum venenatis ac lacus quis ullamcorper. Curabitur mollis risus ligula, sit amet faucibus nibh tincidunt a. Cras et justo magna. Aenean feugiat libero ut mauris laoreet feugiat. Duis sed turpis non ligula dictum tristique id non lorem. Nulla facilisi. Mauris pretium sed nisl ut convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ipsum nunc, et vulputate ipsum imperdiet in. Donec tincidunt scelerisque ante, et dictum metus scelerisque vitae. Aliquam id ante dapibus, porttitor nibh quis, adipiscing mauris. Praesent id cursus erat. Vestibulum congue orci non nulla sagittis molestie. Duis in neque arcu. Pellentesque sit amet enim viverra, feugiat odio vel, congue purus. Maecenas auctor dui eget arcu sodales accumsan. Pellentesque placerat mollis condimentum. Nulla consectetur at neque ullamcorper egestas.",
			caption: "",
			subcaption: "",
			thumbnail: "img/proj_01.jpg",
			categories: ["residential"],
			assets: [
				{
					path: "img/projects/fpo/fpo_01.jpg"
				},
				{
					path: "img/projects/fpo/fpo_02.png"
				},
				{
					path: "img/projects/fpo/fpo_03.jpg"
				}
			]
		},
		{
			name: "Food",
			description: "Quisque ultrices ut elit eget dapibus. Duis suscipit erat vel iaculis faucibus. Nullam eu justo urna. Maecenas sit amet risus ut nulla pulvinar vehicula. Ut id eros eu lorem fringilla vulputate non nec odio. In varius congue lectus sit amet aliquam. Donec volutpat orci nec convallis lobortis. Proin a nisl eu velit ullamcorper auctor. Vestibulum venenatis ac lacus quis ullamcorper. Curabitur mollis risus ligula, sit amet faucibus nibh tincidunt a. Cras et justo magna. Aenean feugiat libero ut mauris laoreet feugiat. Duis sed turpis non ligula dictum tristique id non lorem. Nulla facilisi. Mauris pretium sed nisl ut convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ipsum nunc, et vulputate ipsum imperdiet in. Donec tincidunt scelerisque ante, et dictum metus scelerisque vitae. Aliquam id ante dapibus, porttitor nibh quis, adipiscing mauris. Praesent id cursus erat. Vestibulum congue orci non nulla sagittis molestie. Duis in neque arcu. Pellentesque sit amet enim viverra, feugiat odio vel, congue purus. Maecenas auctor dui eget arcu sodales accumsan. Pellentesque placerat mollis condimentum. Nulla consectetur at neque ullamcorper egestas.",
			caption: "",
			subcaption: "",
			thumbnail: "img/proj_01.jpg",
			categories: [],
			assets: []
		},
		{
			name: "Food",
			description: "Quisque ultrices ut elit eget dapibus. Duis suscipit erat vel iaculis faucibus. Nullam eu justo urna. Maecenas sit amet risus ut nulla pulvinar vehicula. Ut id eros eu lorem fringilla vulputate non nec odio. In varius congue lectus sit amet aliquam. Donec volutpat orci nec convallis lobortis. Proin a nisl eu velit ullamcorper auctor. Vestibulum venenatis ac lacus quis ullamcorper. Curabitur mollis risus ligula, sit amet faucibus nibh tincidunt a. Cras et justo magna. Aenean feugiat libero ut mauris laoreet feugiat. Duis sed turpis non ligula dictum tristique id non lorem. Nulla facilisi. Mauris pretium sed nisl ut convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ipsum nunc, et vulputate ipsum imperdiet in. Donec tincidunt scelerisque ante, et dictum metus scelerisque vitae. Aliquam id ante dapibus, porttitor nibh quis, adipiscing mauris. Praesent id cursus erat. Vestibulum congue orci non nulla sagittis molestie. Duis in neque arcu. Pellentesque sit amet enim viverra, feugiat odio vel, congue purus. Maecenas auctor dui eget arcu sodales accumsan. Pellentesque placerat mollis condimentum. Nulla consectetur at neque ullamcorper egestas.",
			caption: "",
			subcaption: "",
			thumbnail: "img/proj_01.jpg",
			categories: ["residential"],
			assets: []
		},
		{
			name: "Food",
			description: "Quisque ultrices ut elit eget dapibus. Duis suscipit erat vel iaculis faucibus. Nullam eu justo urna. Maecenas sit amet risus ut nulla pulvinar vehicula. Ut id eros eu lorem fringilla vulputate non nec odio. In varius congue lectus sit amet aliquam. Donec volutpat orci nec convallis lobortis. Proin a nisl eu velit ullamcorper auctor. Vestibulum venenatis ac lacus quis ullamcorper. Curabitur mollis risus ligula, sit amet faucibus nibh tincidunt a. Cras et justo magna. Aenean feugiat libero ut mauris laoreet feugiat. Duis sed turpis non ligula dictum tristique id non lorem. Nulla facilisi. Mauris pretium sed nisl ut convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ipsum nunc, et vulputate ipsum imperdiet in. Donec tincidunt scelerisque ante, et dictum metus scelerisque vitae. Aliquam id ante dapibus, porttitor nibh quis, adipiscing mauris. Praesent id cursus erat. Vestibulum congue orci non nulla sagittis molestie. Duis in neque arcu. Pellentesque sit amet enim viverra, feugiat odio vel, congue purus. Maecenas auctor dui eget arcu sodales accumsan. Pellentesque placerat mollis condimentum. Nulla consectetur at neque ullamcorper egestas.",
			caption: "",
			subcaption: "",
			thumbnail: "img/proj_01.jpg",
			categories: [],
			assets: []
		},
		{
			name: "Food",
			description: "Quisque ultrices ut elit eget dapibus. Duis suscipit erat vel iaculis faucibus. Nullam eu justo urna. Maecenas sit amet risus ut nulla pulvinar vehicula. Ut id eros eu lorem fringilla vulputate non nec odio. In varius congue lectus sit amet aliquam. Donec volutpat orci nec convallis lobortis. Proin a nisl eu velit ullamcorper auctor. Vestibulum venenatis ac lacus quis ullamcorper. Curabitur mollis risus ligula, sit amet faucibus nibh tincidunt a. Cras et justo magna. Aenean feugiat libero ut mauris laoreet feugiat. Duis sed turpis non ligula dictum tristique id non lorem. Nulla facilisi. Mauris pretium sed nisl ut convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ipsum nunc, et vulputate ipsum imperdiet in. Donec tincidunt scelerisque ante, et dictum metus scelerisque vitae. Aliquam id ante dapibus, porttitor nibh quis, adipiscing mauris. Praesent id cursus erat. Vestibulum congue orci non nulla sagittis molestie. Duis in neque arcu. Pellentesque sit amet enim viverra, feugiat odio vel, congue purus. Maecenas auctor dui eget arcu sodales accumsan. Pellentesque placerat mollis condimentum. Nulla consectetur at neque ullamcorper egestas.",
			caption: "",
			subcaption: "",
			thumbnail: "img/proj_01.jpg",
			categories: [],
			assets: []
		},
		{
			name: "Food",
			description: "Quisque ultrices ut elit eget dapibus. Duis suscipit erat vel iaculis faucibus. Nullam eu justo urna. Maecenas sit amet risus ut nulla pulvinar vehicula. Ut id eros eu lorem fringilla vulputate non nec odio. In varius congue lectus sit amet aliquam. Donec volutpat orci nec convallis lobortis. Proin a nisl eu velit ullamcorper auctor. Vestibulum venenatis ac lacus quis ullamcorper. Curabitur mollis risus ligula, sit amet faucibus nibh tincidunt a. Cras et justo magna. Aenean feugiat libero ut mauris laoreet feugiat. Duis sed turpis non ligula dictum tristique id non lorem. Nulla facilisi. Mauris pretium sed nisl ut convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ipsum nunc, et vulputate ipsum imperdiet in. Donec tincidunt scelerisque ante, et dictum metus scelerisque vitae. Aliquam id ante dapibus, porttitor nibh quis, adipiscing mauris. Praesent id cursus erat. Vestibulum congue orci non nulla sagittis molestie. Duis in neque arcu. Pellentesque sit amet enim viverra, feugiat odio vel, congue purus. Maecenas auctor dui eget arcu sodales accumsan. Pellentesque placerat mollis condimentum. Nulla consectetur at neque ullamcorper egestas.",
			caption: "",
			subcaption: "",
			thumbnail: "img/proj_01.jpg",
			categories: ["residential"],
			assets: []
		},
		{
			name: "Food",
			description: "Quisque ultrices ut elit eget dapibus. Duis suscipit erat vel iaculis faucibus. Nullam eu justo urna. Maecenas sit amet risus ut nulla pulvinar vehicula. Ut id eros eu lorem fringilla vulputate non nec odio. In varius congue lectus sit amet aliquam. Donec volutpat orci nec convallis lobortis. Proin a nisl eu velit ullamcorper auctor. Vestibulum venenatis ac lacus quis ullamcorper. Curabitur mollis risus ligula, sit amet faucibus nibh tincidunt a. Cras et justo magna. Aenean feugiat libero ut mauris laoreet feugiat. Duis sed turpis non ligula dictum tristique id non lorem. Nulla facilisi. Mauris pretium sed nisl ut convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ipsum nunc, et vulputate ipsum imperdiet in. Donec tincidunt scelerisque ante, et dictum metus scelerisque vitae. Aliquam id ante dapibus, porttitor nibh quis, adipiscing mauris. Praesent id cursus erat. Vestibulum congue orci non nulla sagittis molestie. Duis in neque arcu. Pellentesque sit amet enim viverra, feugiat odio vel, congue purus. Maecenas auctor dui eget arcu sodales accumsan. Pellentesque placerat mollis condimentum. Nulla consectetur at neque ullamcorper egestas.",
			caption: "",
			subcaption: "",
			thumbnail: "img/proj_01.jpg",
			categories: [],
			assets: []
		},
		{
			name: "Food",
			description: "Quisque ultrices ut elit eget dapibus. Duis suscipit erat vel iaculis faucibus. Nullam eu justo urna. Maecenas sit amet risus ut nulla pulvinar vehicula. Ut id eros eu lorem fringilla vulputate non nec odio. In varius congue lectus sit amet aliquam. Donec volutpat orci nec convallis lobortis. Proin a nisl eu velit ullamcorper auctor. Vestibulum venenatis ac lacus quis ullamcorper. Curabitur mollis risus ligula, sit amet faucibus nibh tincidunt a. Cras et justo magna. Aenean feugiat libero ut mauris laoreet feugiat. Duis sed turpis non ligula dictum tristique id non lorem. Nulla facilisi. Mauris pretium sed nisl ut convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ipsum nunc, et vulputate ipsum imperdiet in. Donec tincidunt scelerisque ante, et dictum metus scelerisque vitae. Aliquam id ante dapibus, porttitor nibh quis, adipiscing mauris. Praesent id cursus erat. Vestibulum congue orci non nulla sagittis molestie. Duis in neque arcu. Pellentesque sit amet enim viverra, feugiat odio vel, congue purus. Maecenas auctor dui eget arcu sodales accumsan. Pellentesque placerat mollis condimentum. Nulla consectetur at neque ullamcorper egestas.",
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