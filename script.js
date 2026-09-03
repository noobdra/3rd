```javascript
/* =========================
   THREE MONTHS — MAIN SCRIPT
   ========================= */

function enterStory() {

    // Fade the current page out
    document.body.classList.add("fade-out");

    // Wait for the animation to finish
    setTimeout(() => {

        // Move to the first chapter
        window.location.href = "./chapter1.html";

    }, 900);
}


/* =========================
   PAGE FADE-IN
   ========================= */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});
```
