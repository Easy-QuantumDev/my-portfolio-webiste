const themeBtn = document.getElementById("themeBtn");

const mobileMenu = document.getElementById("mobileMenu");

const navLinks = document.querySelector(".nav-links");


// ==========================
// THEME
// ==========================

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (
            document.body.classList.contains("light")
        ) {

            themeBtn.textContent = "☀";

            localStorage.setItem(
                "theme",
                "light"
            );

        } else {

            themeBtn.textContent = "☾";

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

    });

}


// ==========================
// LOAD THEME
// ==========================

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    if (themeBtn) {
        themeBtn.textContent = "☀";
    }

}


// ==========================
// MOBILE MENU
// ==========================

if (mobileMenu) {

    mobileMenu.addEventListener("click", () => {

        navLinks.classList.toggle(
            "mobile-active"
        );

    });

}


// ==========================
// MOUSE PARALLAX
// ==========================

const terminal =
    document.querySelector(".terminal-card");


if (terminal) {

    document.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (window.innerWidth / 2 -
                event.clientX) / 80;

            const y =
                (window.innerHeight / 2 -
                event.clientY) / 80;


            terminal.style.transform =
                `rotateY(${x}deg)
                 rotateX(${y}deg)`;

        }
    );

}


// ==========================
// SCROLL REVEAL
// ==========================

const cards =
    document.querySelectorAll(
        ".project-card, .stat-card, .lab-grid div"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


cards.forEach(
    (card) => observer.observe(card)
);
// ============================
// PROJECT RUNNER
// ============================

const runProject =
    document.getElementById("runProject");

const runnerOverlay =
    document.getElementById("runnerOverlay");

const closeRunner =
    document.getElementById("closeRunner");

const reloadProject =
    document.getElementById("reloadProject");

const fullscreenProject =
    document.getElementById("fullscreenProject");

const projectFrame =
    document.getElementById("projectFrame");

const runnerLoading =
    document.getElementById("runnerLoading");


// ============================
// OPEN RUNNER
// ============================

if (runProject) {

    runProject.addEventListener(
        "click",
        () => {

            runnerOverlay.classList.add(
                "active"
            );

            document.body.style.overflow =
                "hidden";


            if (projectFrame) {

                const demoURL =
                    projectFrame.dataset.src;


                if (
                    demoURL &&
                    projectFrame.src !== demoURL
                ) {

                    runnerLoading.style.display =
                        "flex";

                    projectFrame.src =
                        demoURL;

                }

            }

        }
    );

}


// ============================
// IFRAME LOADED
// ============================

if (projectFrame) {

    projectFrame.addEventListener(
        "load",
        () => {

            if (runnerLoading) {

                runnerLoading.style.display =
                    "none";

            }

        }
    );

}


// ============================
// CLOSE
// ============================

function closeRunnerWindow() {

    if (!runnerOverlay) return;

    runnerOverlay.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


if (closeRunner) {

    closeRunner.addEventListener(
        "click",
        closeRunnerWindow
    );

}


if (runnerOverlay) {

    runnerOverlay.addEventListener(
        "click",
        (event) => {

            if (
                event.target === runnerOverlay
            ) {

                closeRunnerWindow();

            }

        }
    );

}


// ============================
// ESC
// ============================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            runnerOverlay?.classList.contains(
                "active"
            )
        ) {

            closeRunnerWindow();

        }

    }
);


// ============================
// RELOAD
// ============================

if (
    reloadProject &&
    projectFrame
) {

    reloadProject.addEventListener(
        "click",
        () => {

            runnerLoading.style.display =
                "flex";

            projectFrame.src =
                projectFrame.src;

        }
    );

}


// ============================
// FULLSCREEN
// ============================

if (
    fullscreenProject &&
    projectFrame
) {

    fullscreenProject.addEventListener(
        "click",
        async () => {

            try {

                await projectFrame.requestFullscreen();

            } catch (error) {

                console.log(error);

            }

        }
    );

}

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       PROJECT RUNNER
    ===================================================== */

    const runProject =
        document.getElementById("runProject");

    const runnerOverlay =
        document.getElementById("runnerOverlay");

    const closeRunner =
        document.getElementById("closeRunner");

    const reloadProject =
        document.getElementById("reloadProject");

    const fullscreenProject =
        document.getElementById("fullscreenProject");

    const projectFrame =
        document.getElementById("projectFrame");

    const runnerLoading =
        document.getElementById("runnerLoading");


    /* OPEN */

    if (runProject && runnerOverlay) {

        runProject.addEventListener("click", () => {

            runnerOverlay.classList.add("active");

            document.body.style.overflow = "hidden";


            if (projectFrame) {

                const demoURL =
                    projectFrame.dataset.src;


                if (
                    demoURL &&
                    !projectFrame.getAttribute("src")
                ) {

                    if (runnerLoading) {
                        runnerLoading.style.display = "flex";
                    }

                    projectFrame.src = demoURL;
                }

            }

        });

    }


    /* IFRAME LOADED */

    if (projectFrame) {

        projectFrame.addEventListener("load", () => {

            if (runnerLoading) {
                runnerLoading.style.display = "none";
            }

        });

    }


    /* CLOSE */

    function closeRunnerWindow() {

        if (!runnerOverlay) {
            return;
        }

        runnerOverlay.classList.remove("active");

        document.body.style.overflow = "";

    }


    if (closeRunner) {

        closeRunner.addEventListener(
            "click",
            closeRunnerWindow
        );

    }


    /* CLICK OUTSIDE */

    if (runnerOverlay) {

        runnerOverlay.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === runnerOverlay
                ) {

                    closeRunnerWindow();

                }

            }
        );

    }


    /* ESC */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                runnerOverlay &&
                runnerOverlay.classList.contains("active")
            ) {

                closeRunnerWindow();

            }

        }
    );


    /* RELOAD */

    if (
        reloadProject &&
        projectFrame
    ) {

        reloadProject.addEventListener(
            "click",
            () => {

                if (runnerLoading) {
                    runnerLoading.style.display = "flex";
                }

                projectFrame.src =
                    projectFrame.src;

            }
        );

    }


    /* FULLSCREEN */

    if (
        fullscreenProject &&
        projectFrame
    ) {

        fullscreenProject.addEventListener(
            "click",
            async () => {

                try {

                    if (
                        document.fullscreenElement
                    ) {

                        await document.exitFullscreen();

                    } else {

                        await projectFrame.requestFullscreen();

                    }

                } catch (error) {

                    console.log(
                        "Fullscreen error:",
                        error
                    );

                }

            }
        );

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".about-card, .timeline-item, .contact-card, .interactive-project"
        );


    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "reveal-visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        (element) => {

            element.classList.add(
                "reveal-element"
            );

            revealObserver.observe(
                element
            );

        }
    );


    /* =====================================================
       CONTACT CARD TILT
    ===================================================== */

    const contactCards =
        document.querySelectorAll(
            ".contact-card"
        );


    contactCards.forEach(
        (card) => {

            card.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX - rect.left;

                    const y =
                        event.clientY - rect.top;

                    const centerX =
                        rect.width / 2;

                    const centerY =
                        rect.height / 2;

                    const rotateX =
                        ((y - centerY) / centerY) * -3;

                    const rotateY =
                        ((x - centerX) / centerX) * 3;


                    card.style.transform =
                        `perspective(700px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-5px)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform = "";

                }
            );

        }
    );


});
