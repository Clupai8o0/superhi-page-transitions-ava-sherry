// the files barba and barbaCss are supposedly already imported somewhere else
barba.use(barbaCss);

barba.init({
	transitions: [
		{
			name: "fade", // any name you like
			beforeEnter({ _, next }) {
				const headerLinks = document.querySelectorAll("header a");
				const href = next.url.path;

				headerLinks.forEach((link) => {
					if (link.getAttribute("href") === href)
						link.classList.add("selected");
					else link.classList.remove("selected");
				});

				window.scrollTo({
					top: 0,
					behavior: "smooth",
				});
			},
		},
	],
});
