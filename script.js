const openMobileMenu = (e) => {
    e.stopPropagation(); 
    mobileMenuIcon.removeEventListener("click", openMobileMenu);

    const dropdown = document.getElementById("dropdown");
    dropdown.style.display = "block"; 

    document.addEventListener("click", closeMobileMenu);
}

const closeMobileMenu = (e) => {
    e.stopPropagation(); 
    document.removeEventListener("click", closeMobileMenu);

    const dropdown = document.getElementById("dropdown");

    if (e.target !== dropdown){
        dropdown.style.display = "none";
        mobileMenuIcon.addEventListener("click", openMobileMenu);
    }
}

const mobileMenuIcon = document.getElementById("hamburger");
mobileMenuIcon.addEventListener("click", openMobileMenu);