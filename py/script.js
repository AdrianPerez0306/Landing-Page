window.onload = function() {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");

    const toggleButton = document.querySelector(".toggle-container");

    const themeIconContainer = document.querySelector("#theme-reference-icon");
    const body = document.body

    closeBtn.addEventListener("click", function () {
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    function menuBtnChange() {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right")
        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu")
        }
    }

    toggleButton.addEventListener("click", function () {
        toggleThemeChange()
        if (body.classList.contains("dark")) {
            body.classList.replace("dark", "light")
        } else {
            body.classList.replace("light", "dark")
        }
    })

    function toggleThemeChange() {
        if (body.classList.contains("dark")) {
            themeIconContainer.classList.replace("bxs-moon", "bx-sun")
        } else {
            themeIconContainer.classList.replace("bx-sun", "bxs-moon")
        }
    }

}