document.addEventListener("DOMContentLoaded", function() {

    // create sections
    function createSection(nb) {
        const section = document.createElement("section");
        main.appendChild(section);
        section.setAttribute("id", "section" + nb);
        const div = document.createElement("div");
        section.appendChild(div);
        div.classList.add("landing-container");
        div.innerHTML = "<h2>Section " + nb + "</h2>" +
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>" + 
        "<p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>"
    }

    // create 4th section
    createSection(4);

    //count sections
    const sections = document.getElementById("section1").parentNode;
    const sectionNb = sections.childElementCount-1;

    // build navbar
    function createMenu() {
        const nav = document.getElementById("navbar-list");
        const docFragment = document.createDocumentFragment();
        for (let i = 1; i <= sectionNb; i++) {
            const newNav = document.createElement("li");
            newNav.innerHTML = "Section " + i;
            newNav.classList.add("menu-link");
            newNav.setAttribute("id", "sec" + i);
            docFragment.appendChild(newNav);
        }
        nav.appendChild(docFragment);
    }
    createMenu();

    // check if selected section is in viewport
    function isInVwt(section) {
        const positionSection = section.getBoundingClientRect();
        return (
            positionSection.top >= 0 &&
            positionSection.bottom <= (window.innerHeight + 500 || document.documentElement.clientHeight + 500)
        );
    }

    // if in viewport -> section is set to class active
    document.addEventListener("scroll", setActive);
    document.getElementById("sec1").className = "active";
    function setActive() {
        for (let i = 1; i <= sectionNb; i++){
            const sec = document.getElementById("sec" + i);
            const section = document.getElementById("section" + i);
            if (isInVwt(section)) {
                if (!section.classList.contains("active-class") & !sec.classList.contains("active")) {
                    section.classList.add("active-class");
                    sec.className = "active";
                }
            } else {
                section.classList.remove("active-class");
                sec.className = "menu-link";
            }
        }
    }
    
    // scroll with smooth behaviour to section
    for (let i = 1; i <= sectionNb; i++){
        const sec = document.getElementById("sec" + i);
        const section = document.getElementById("section" + i);
        sec.addEventListener("click", function() {
            section.scrollIntoView({behavior: "smooth", block: "start"})
        });
    }
});