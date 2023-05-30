const getTheme = () => {
	//! THEME LIGHT CHANGE
	return localStorage.getItem("theme") ?? "emerald";
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
		//! THEME CHANGE 
		setTheme("night");
	} else {
		setTheme("emerald");
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
//    ! Not needed anymore
	// if (mode === "light") {
	// 	r.style.setProperty("--primary-screen-rgb", "45, 110, 242");
	// } else {
	// 	r.style.setProperty("--primary-screen-rgb", "45, 110, 242");
	// }

	const BODY = document.querySelector('body');

    if (toggledMode === 'dark') {
		BODY.classList.add("bg-dark");
		BODY.classList.remove("bg-light");
    } else {
		BODY.classList.remove("bg-dark");
		BODY.classList.add("bg-light");
    }
}
