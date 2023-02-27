const getTheme = () => {
    return localStorage.getItem("theme") ?? "light";
}

const setTheme = (newTheme) => {
    return localStorage.setItem("theme", newTheme);
}

const lightBtn = document.getElementById("light");
const darkBtn = document.getElementById("dark");

function changeTheme() {
    const theme = getTheme();
    console.log(theme)
    setTheme(theme === "light" ? "dark" : "light");
    if(theme === "dark") {
        darkBtn.style.visibility = "block";
        lightBtn.style.visibility = "none";
    }
    if(theme === "light") {
        darkBtn.style.visibility = "none";
        lightBtn.style.visibility = "block";
    }
}