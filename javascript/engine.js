var engine = {
	about: {
		copy: "Fusce ac nulla nulla. Mauris id dolor vestibulum, iaculis ipsum nec, dapibus nunc. Vivamus enim urna, laoreet nec suscipit sit amet, cursus eu lectus. Pellentesque condimentum tincidunt venenatis. Aliquam quis velit sit amet ante dapibus blandit. Duis vel erat non orci eleifend blandit. Nunc eu ligula eget dui accumsan congue. Donec at tincidunt justo. Cras dictum condimentum nibh, sed tempor orci tincidunt ac. In lobortis hendrerit velit, vestibulum commodo justo imperdiet sed. Sed eros massa, ornare eget mi non, rutrum feugiat justo. Curabitur nec pharetra nulla. Mauris aliquet congue sem, vel facilisis mi bibendum eget. Proin pharetra auctor elit vel scelerisque. Vivamus sollicitudin ornare neque, ac tristique libero laoreet in. In adipiscing urna ligula, sed aliquam nunc vulputate vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque vulputate neque sem, quis faucibus lorem dictum vitae. Ut pharetra et urna et commodo. Vivamus imperdiet mauris vitae nisl ullamcorper volutpat. Donec gravida feugiat mollis. Ut in dapibus tellus. Fusce congue turpis at turpis faucibus scelerisque. Nam metus libero, fringilla a urna eu, scelerisque elementum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eu iaculis neque, vel accumsan justo. Praesent non eros a sem ultricies sollicitudin vitae nec lectus. Donec arcu sem, malesuada sit amet sollicitudin quis, imperdiet et turpis. Donec laoreet accumsan sollicitudin. Pellentesque quis leo at est rhoncus accumsan. Maecenas faucibus bibendum lobortis. Donec suscipit dapibus porttitor. In at odio quis erat blandit facilisis vitae ac nibh. Mauris a pretium dolor. Vivamus sed vulputate nunc. Vestibulum nibh arcu, vulputate ac lacus eu, aliquam dictum odio. Curabitur ultrices, sem ut rhoncus ornare, mi eros aliquet tellus, et vehicula tortor tortor eu nunc. Fusce fermentum tellus eu neque rhoncus aliquet. Vestibulum interdum egestas turpis a dictum. Pellentesque et semper nisl. Praesent sollicitudin quam non ultricies laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris elementum lectus quis purus imperdiet, nec pharetra mauris mattis. Pellentesque varius molestie ipsum, nec pharetra justo elementum sit amet. Etiam commodo, ligula ut dignissim vehicula, augue mi porta eros, ut accumsan leo eros eu tortor. Etiam tortor arcu, pellentesque quis mauris non, condimentum placerat elit. Cras turpis augue, adipiscing ac dignissim eget, eleifend sed tellus. Fusce faucibus urna ac nisl lacinia luctus. Nulla facilisi. Pellentesque facilisis congue arcu, quis pharetra purus sollicitudin eu. Ut et metus eget elit lacinia luctus a condimentum nulla. Donec lobortis sed sem ac tincidunt. In aliquam ante quis magna mollis dapibus eu molestie erat. Aliquam erat volutpat. Cras suscipit sollicitudin blandit. Sed tempus lorem sodales odio vulputate, eu vestibulum odio convallis. Donec congue nisi id gravida pulvinar. Nulla non neque risus. Morbi dapibus posuere blandit. Ut eget arcu lectus. Curabitur consequat posuere interdum. Duis nec mi bibendum, molestie odio eget, facilisis dolor. Vestibulum mattis elit in enim luctus cursus. Curabitur blandit lacus id purus scelerisque volutpat. Sed et dignissim quam. Mauris mattis velit odio, ullamcorper aliquam nulla hendrerit a. Pellentesque faucibus euismod vulputate. Sed placerat magna sit amet varius malesuada"
	},
	projects: {
		data: Data.Projects,
		categories: Data.Projects.categories,
		filtered: ko.observableArray(Data.Projects.projects)
	},
	blog: {

	},
	contact: {

	},
	project_details: function() {
		var self = this;
		self.id = ko.observable();
		self.projectDetails = function() {
			console.log(pager)
			return self.id();
		};
	},
	showPage: function(page, callback) {
		$(page.element).fadeIn(1000, callback);
	},
	hidePage: function(page, callback) {
		var $e = $(page.element);
		if (!page.pageHiddenOnce) {
			page.pageHiddenOnce = true;
			$e.hide();
		} else {
			$e.fadeOut(1000, function () {
				$e.hide();
			});
			if (callback) {
				callback();
			}
		}
	}
};

$(function() {
	pager.extendWithPage(engine);
	ko.applyBindings(engine, $("body").get(0));
	pager.start();
});