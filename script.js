document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Call initially to check already visible sections
});
function saveEducation() {
    let college = document.getElementById("college").value;
    let degree = document.getElementById("degree").value;
    document.getElementById("eduDisplay").innerHTML = `<strong>${college}</strong> - ${degree}`;
}
