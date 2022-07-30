// the files barba and barbaCss are supposedly already imported somewhere else
console.log("Hello world");
barba.use(barbaCss);

barba.init({
	transitions: [
		{
			name: "fade", // any name you like
			beforeEnter() {
				window.scrollTo({
					top: 0,
					behavior: "smooth",
				});
			},
		},
	],
});
