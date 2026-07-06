

// const PROJECTS_JSON_PATH = "/data/project_data.json";

// function createProjectCard(project) {
//     const imagesHtml = project.images
//         .map(img => `
//                     <div class="project-img">
//                         <img src="${img}" alt="${project.title}">
//                     </div>`)
//         .join("");

//     const techHtml = project.tech
//         .map(tech => `<span class="tech-tag">${tech}</span>`)
//         .join("\n                        ");

//     const categoryHtml = project.category
//         ? `<span class="project-category">${project.category}</span>`
//         : "";

//     let descriptionHtml;
//     if (Array.isArray(project.description)) {
//         const items = project.description
//             .map(point => `<li>${point}</li>`)
//             .join("\n                        ");
//         descriptionHtml = `<ul class="project-description-list">
//                         ${items}
//                     </ul>`;
//     } else {
//         descriptionHtml = `<p class="project-description">${project.description}</p>`;
//     }

//     const linkHtml = project.link
//         ? `<a class="project-btn" href="${project.link}" target="_blank" rel="noopener noreferrer">پروژه وګورئ</a>`
//         : "";

//     return `
//             <div class="project-card" id="${project.id}">
//                 <div class="project-images">${imagesHtml}
//                 </div>
//                 <div class="project-info">
//                     <h3 class="project-title">${project.title}${categoryHtml}</h3>
//                     ${descriptionHtml}
//                     <div class="project-tech">
//                         ${techHtml}
//                     </div>
//                     ${linkHtml}
//                 </div>
//             </div>`;
// }


// async function renderProjects() {
//     const grid = document.querySelector(".projects-grid");
//     if (!grid) {
//         console.error("عنصر .projects-grid ونه موندل شو");
//         return;
//     }

//     try {
//         const res = await fetch(PROJECTS_JSON_PATH);
//         if (!res.ok) {
//             throw new Error(`JSON fetch failed: ${res.status}`);
//         }
//         const projects = await res.json();
//         grid.innerHTML = projects.map(createProjectCard).join("");
//     } catch (err) {
//         console.error("د پروژو ډیټا نه لوستل شوه:", err);
//         grid.innerHTML = `<p style="text-align:center;">پروژې نشي ښودل کیدای</p>`;
//     }
// }

// renderProjects();


const projects = [
    {
        id: "personal_finance_management",
        title: "Personal Finance management System",
        category: "مدیریتی سیستم",
        images: [
            "/image/personal_finance_management/1 (2).png",
            "/image/personal_finance_management/2.png",
            "/image/personal_finance_management/2 (1).png",
            "/image/personal_finance_management/2 (2).png",
            "/image/personal_finance_management/1 (1).png",
            "/image/personal_finance_management/2 (3).png"
        ],
        description: "ددی سیستم پواسطه تاسو کولی شی شخصی مالی کاربارونه منظم او مدیریت کړی...",
        tech: ["HTML, CSS, JavaScript", "Node.js", "MySQL"]
    },

    {
        id: "khan_section",
        title: "خان مدیریت سیستم",
        category: "مدیریتی سیستم",
        images: [
            "/image/project/constraction1.jpeg",
            "/image/project/constraction2.jpeg"
        ],
        description: "دا شرکت چی د ساختمانی موادو ټسټونه کوی...",
        tech: ["Python", "tkinter", "PostgreSQL"]
    },

    {
        id: "course_section",
        title: "د کورس مدیریت سیستم",
        category: "ویب بیسډ مدیریتي سیستم",
        images: [
            "/image/project/course1.jpeg",
            "/image/project/course2.png"
        ],
        description: "ددی سیستم پواسطه د کورس ټول کارونه مدیریت کیدای شی...",
        tech: ["HTML, CSS, JavaScript", "Node.js", "MySQL"]
    },

    {
        id: "hostal_section",
        title: "د لیلی مدیریت سیستم",
        category: "مدیریت سیستم",
        images: [
            "/image/project/hostal1.jpeg",
            "/image/project/hostel2.jpg"
        ],
        description: "ددی سیستم پواسطه کولی شی د لیلی ټول کارونه مدیریت کړی...",
        tech: ["Java", "JavaSwing", "MySQL"]
    },

    {
        id: "pashto_typing_game",
        title: "پښتو ټایپینګ",
        category: "ویب بیسډ ډیسکټاپ اپلیکیشن",
        images: [
            "/image/project/type.png",
            "/image/project/game.png"
        ],
        description: "دا ګیم چی دری مرحلی لری...",
        tech: ["HTML", "CSS", "JavaScript"]
    }
];

function createProjectCard(project) {
    const imagesHtml = project.images
        .map(img => `
            <div class="project-img">
                <img src="${img}" alt="${project.title}">
            </div>`)
        .join("");

    const techHtml = project.tech
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join("");

    const categoryHtml = project.category
        ? `<span class="project-category">${project.category}</span>`
        : "";

    let descriptionHtml;

    if (Array.isArray(project.description)) {
        descriptionHtml = `<ul>` +
            project.description.map(p => `<li>${p}</li>`).join("") +
            `</ul>`;
    } else {
        descriptionHtml = `<p>${project.description}</p>`;
    }

    return `
        <div class="project-card">
            <div class="project-images">${imagesHtml}</div>
            <h3>${project.title} ${categoryHtml}</h3>
            ${descriptionHtml}
            <div class="project-tech">${techHtml}</div>
        </div>
    `;
}

function renderProjects() {
    const grid = document.querySelector(".projects-grid");

    if (!grid) return;

    grid.innerHTML = projects.map(createProjectCard).join("");
}

renderProjects();