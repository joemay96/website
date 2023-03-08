const getTheme = () => {
	return localStorage.getItem("theme") ?? "corporate";
};

const setTheme = (newTheme) => {
	return localStorage.setItem("theme", newTheme);
};

const getMode = () => {
	return localStorage.getItem("mode") ?? "light";
};

const setMode = (mode) => {
	return localStorage.setItem("mode", mode);
};

const lightBtn = document.getElementById("light");
const darkBtn = document.getElementById("dark");

function changeTheme() {
	// change dark || light mode
	const mode = getMode();
	const toggledMode = mode === "light" ? "dark" : "light";
	const r = document.querySelector(":root");

	setMode(toggledMode);
	// change theme
	if (toggledMode === "dark") {
		setTheme("forest");
	} else {
		setTheme("corporate");
	}
	document.documentElement.setAttribute("data-theme", getTheme());
	// change button
	if (mode === "dark") {
		darkBtn.style.visibility = "block";
		lightBtn.style.visibility = "none";
	}
	if (mode === "light") {
		darkBtn.style.visibility = "none";
		lightBtn.style.visibility = "block";
	}

	// Change Costum Project Card
	/* 
        --primary-forest: 30,184,84;
        --primary-corporate: 75,107,251;
        --primary-garden: 92,127,103; 
    */
	if (mode === "light") {
		r.style.setProperty("--primary-screen-rgb", "30,184,84");
	} else {
		r.style.setProperty("--primary-screen-rgb", "75,107,251");
	}
}
