

const themeIcon = document.getElementById("theme-icon");
const darkTheme = document.getElementById("dark-theme");

themeIcon.addEventListener('click',() => {
    darkTheme.disabled=!darkTheme.disabled;
    if (darkTheme.disabled) {
        themeIcon.innerHTML = "";
    } else {
        themeIcon.innerHTML = "";
    }
});

themeIcon.addEventListener('mouseover',() => {
    if (darkTheme.disabled) {
        themeIcon.innerHTML = "";
    } else {
        themeIcon.innerHTML = "";
    }

});

themeIcon.addEventListener('mouseleave', () => {
    if (darkTheme.disabled) {
        themeIcon.innerHTML = "";
    } else {
        themeIcon.innerHTML = "";
    }
});