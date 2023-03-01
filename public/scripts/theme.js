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
}
