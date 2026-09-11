/* ==========================================
   WANDER
   MAIN JAVASCRIPT
========================================== */

console.log("WANDER website loaded successfully.");


// ==========================================
// ADVENTURE DATA
// ==========================================

const adventureData = {

    trekking: {
        title: "Mountain Trekking",
        category: "MOUNTAINS · OUTDOOR · EXPERIENCE",
        location: "Himachal Pradesh",
        difficulty: "Moderate",
        duration: "2–5 Days",
        description:
            "Follow mountain trails, discover hidden landscapes and experience the silence of the highlands.",
        image:
            "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1800&q=90"
    },

    camping: {
        title: "Forest Camping",
        category: "NATURE · ESCAPE · EXPERIENCE",
        location: "Western Ghats",
        difficulty: "Easy",
        duration: "1–3 Days",
        description:
            "Leave the noise behind and spend a night beneath the stars surrounded by peaceful nature.",
        image:
            "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=1800&q=90"
    },

    rafting: {
        title: "River Rafting",
        category: "WATER · THRILL · EXPERIENCE",
        location: "Rishikesh",
        difficulty: "Advanced",
        duration: "1–2 Days",
        description:
            "Ride wild rivers, challenge the rapids and experience the energy and excitement of the water.",
        image:
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=90"
    },

    beach: {
        title: "Beach Escape",
        category: "COAST · RELAX · EXPERIENCE",
        location: "Goa",
        difficulty: "Easy",
        duration: "2–4 Days",
        description:
            "Slow down beside the sea, watch the sunset and let the days move at their own pace.",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=90"
    }

};


// ==========================================
// GET SELECTED ADVENTURE
// ==========================================

const urlParams =
    new URLSearchParams(window.location.search);

const selectedAdventure =
    urlParams.get("adventure") || "trekking";

const adventure =
    adventureData[selectedAdventure];


// ==========================================
// ADVENTURE DETAILS PAGE
// ==========================================

if (
    adventure &&
    document.getElementById("detailTitle")
) {

    const detailTitle =
        document.getElementById("detailTitle");

    const detailCategory =
        document.getElementById("detailCategory");

    const detailLocation =
        document.getElementById("detailLocation");

    const detailDifficulty =
        document.getElementById("detailDifficulty");

    const detailDuration =
        document.getElementById("detailDuration");

    const detailDescription =
        document.getElementById("detailDescription");

    const detailHeroImage =
        document.getElementById("detailHeroImage");


    if (detailTitle) {
        detailTitle.textContent =
            adventure.title;
    }


    if (detailCategory) {
        detailCategory.textContent =
            adventure.category;
    }


    if (detailLocation) {
        detailLocation.textContent =
            adventure.location;
    }


    if (detailDifficulty) {
        detailDifficulty.textContent =
            adventure.difficulty;
    }


    if (detailDuration) {
        detailDuration.textContent =
            adventure.duration;
    }


    if (detailDescription) {
        detailDescription.textContent =
            adventure.description;
    }


    if (detailHeroImage) {
        detailHeroImage.src =
            adventure.image;
    }

}


// ==========================================
// REQUEST ADVENTURE BUTTON
// ==========================================

const requestButton =
    document.getElementById(
        "requestAdventureButton"
    );


if (requestButton) {

    requestButton.href =
        "request.html?adventure=" +
        selectedAdventure;

}


// ==========================================
// REQUEST PAGE
// SELECT ADVENTURE
// ==========================================

const requestAdventure =
    document.getElementById(
        "requestAdventure"
    );


if (requestAdventure) {

    const requestParams =
        new URLSearchParams(
            window.location.search
        );


    const selectedRequestAdventure =
        requestParams.get("adventure");


    if (
        selectedRequestAdventure &&
        adventureData[selectedRequestAdventure]
    ) {

        requestAdventure.value =
            selectedRequestAdventure;

    }

}


// ==========================================
// ADVENTURE REQUEST FORM
// ==========================================

const adventureRequestForm =
    document.getElementById(
        "adventureRequestForm"
    );


if (adventureRequestForm) {

    adventureRequestForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // ==================================
            // GET FORM VALUES
            // ==================================

            const name =
                document.getElementById(
                    "requestName"
                ).value.trim();


            const email =
                document.getElementById(
                    "requestEmail"
                ).value.trim();


            const mobile =
                document.getElementById(
                    "requestMobile"
                ).value.trim();


            const adventureValue =
                document.getElementById(
                    "requestAdventure"
                ).value;


            const date =
                document.getElementById(
                    "requestDate"
                ).value;


            const people =
                document.getElementById(
                    "requestPeople"
                ).value;


            const message =
                document.getElementById(
                    "requestMessage"
                ).value.trim();


            // ==================================
            // CREATE REQUEST OBJECT
            // ==================================

            const requestData = {

                name: name,

                email: email,

                mobile: mobile,

                adventure: adventureValue,

                date: date,

                people: people,

                message: message,

                submittedAt:
                    new Date().toLocaleString()

            };


            // ==================================
            // GET OLD REQUESTS
            // ==================================

            let requests =
                JSON.parse(
                    localStorage.getItem(
                        "adventureRequests"
                    )
                ) || [];


            // ==================================
            // ADD NEW REQUEST
            // ==================================

            requests.push(requestData);


            // ==================================
            // SAVE REQUEST
            // ==================================

            localStorage.setItem(
                "adventureRequests",
                JSON.stringify(requests)
            );


            // ==================================
            // SHOW SUCCESS MESSAGE
            // ==================================

            const successMessage =
                document.getElementById(
                    "requestSuccess"
                );


            if (successMessage) {

                successMessage.textContent =
                    "Your adventure request has been sent successfully!";

                successMessage.style.display =
                    "block";

            }


            // ==================================
            // RESET FORM
            // ==================================

            adventureRequestForm.reset();


            // ==================================
            // KEEP SELECTED ADVENTURE
            // ==================================

            const currentParams =
                new URLSearchParams(
                    window.location.search
                );


            const currentAdventure =
                currentParams.get("adventure");


            if (
                currentAdventure &&
                document.getElementById(
                    "requestAdventure"
                )
            ) {

                document.getElementById(
                    "requestAdventure"
                ).value =
                    currentAdventure;

            }

        }
    );

}

// ==========================================
// MY REQUESTS PAGE
// ==========================================

const requestsContainer =
    document.getElementById("requestsContainer");


if (requestsContainer) {

    const requests =
        JSON.parse(
            localStorage.getItem("adventureRequests")
        ) || [];


    if (requests.length === 0) {

        requestsContainer.innerHTML = `

            <div class="no-requests">

                <h2>
                    No requests yet.
                </h2>

                <p>
                    Your adventure requests will
                    appear here.
                </p>

                <a href="adventures.html">
                    EXPLORE ADVENTURES
                </a>

            </div>

        `;

    } else {

        requestsContainer.innerHTML = "";


        requests
            .slice()
            .reverse()
            .forEach(function (request) {

                const adventureInfo =
                    adventureData[request.adventure];


                const adventureName =
                    adventureInfo
                        ? adventureInfo.title
                        : request.adventure;


                const card = document.createElement("div");

                card.className =
                    "request-card";


                card.innerHTML = `

                    <div class="request-card-top">

                        <h2 class="request-card-title">
                            ${adventureName}
                        </h2>

                        <span class="request-status">
                            REQUEST SENT
                        </span>

                    </div>


                    <div class="request-card-details">

                        <div class="request-detail">

                            <span>NAME</span>

                            <strong>
                                ${request.name}
                            </strong>

                        </div>


                        <div class="request-detail">

                            <span>TRAVEL DATE</span>

                            <strong>
                                ${request.date}
                            </strong>

                        </div>


                        <div class="request-detail">

                            <span>TRAVELLERS</span>

                            <strong>
                                ${request.people}
                            </strong>

                        </div>


                        <div class="request-detail">

                            <span>EMAIL</span>

                            <strong>
                                ${request.email}
                            </strong>

                        </div>


                        <div class="request-detail">

                            <span>MOBILE</span>

                            <strong>
                                ${request.mobile}
                            </strong>

                        </div>


                        <div class="request-detail">

                            <span>LOCATION</span>

                            <strong>
                                ${
                                    adventureInfo
                                    ? adventureInfo.location
                                    : "-"
                                }
                            </strong>

                        </div>

                    </div>


                    ${
                        request.message
                        ? `
                            <div class="request-card-message">

                                <strong>
                                    Message:
                                </strong>

                                ${request.message}

                            </div>
                          `
                        : ""
                    }


                    <div class="request-card-date">

                        Submitted:
                        ${request.submittedAt}

                    </div>

                `;


                requestsContainer.appendChild(card);

            });

    }

}

// ==========================================
// CONTACT FORM
// ==========================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "contactName"
                ).value.trim();


            const email =
                document.getElementById(
                    "contactEmail"
                ).value.trim();


            const subject =
                document.getElementById(
                    "contactSubject"
                ).value.trim();


            const message =
                document.getElementById(
                    "contactMessage"
                ).value.trim();


            const contactData = {

                name: name,

                email: email,

                subject: subject,

                message: message,

                submittedAt:
                    new Date().toLocaleString()

            };


            let messages =
                JSON.parse(
                    localStorage.getItem(
                        "contactMessages"
                    )
                ) || [];


            messages.push(contactData);


            localStorage.setItem(
                "contactMessages",
                JSON.stringify(messages)
            );


            const successMessage =
                document.getElementById(
                    "contactSuccess"
                );


            if (successMessage) {

                successMessage.textContent =
                    "Your message has been sent successfully!";

                successMessage.style.display =
                    "block";

            }


            contactForm.reset();

        }
    );

}
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("show");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("show")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}