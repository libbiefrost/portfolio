document.addEventListener("DOMContentLoaded", () => {
    const sky = document.getElementById("sky");

    function createSingleCloud() {
        const cloud = document.createElement("img");
        const randomSize = Math.random() * 500 + 900;
        cloud.style.width = randomSize + "px";
        cloud.src = "cloud2.png";
        cloud.classList.add("cloud");

        // Random horizontal position
        cloud.style.left = Math.random() * (window.innerWidth - randomSize) + "px";

        // Varied opacity — some clouds wispy and translucent, others solid
        cloud.style.opacity = 0.35 + Math.random() * 0.65;

        sky.appendChild(cloud);

        // Remove the cloud when animation ends and create a new one
        cloud.addEventListener("animationend", () => {
            cloud.remove();
        });
    }

    // Create the first cloud immediately
    createSingleCloud();

    // Create a new cloud every 10 seconds instead of 8 (more spacing!)
    setInterval(createSingleCloud, 10000);
});
