

const PROJECTS_JSON_PATH = "/data/project_data.json";

function createProjectCard(project) {
    const imagesHtml = project.images
        .map(img => `
                    <div class="project-img">
                        <img src="${img}" alt="${project.title}">
                    </div>`)
        .join("");

    const techHtml = project.tech
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join("\n                        ");

    const categoryHtml = project.category
        ? `<span class="project-category">${project.category}</span>`
        : "";

    // که description array وي bullet لیست جوړوي، که متن وي عادي پاراګراف
    let descriptionHtml;
    if (Array.isArray(project.description)) {
        const items = project.description
            .map(point => `<li>${point}</li>`)
            .join("\n                        ");
        descriptionHtml = `<ul class="project-description-list">
                        ${items}
                    </ul>`;
    } else {
        descriptionHtml = `<p class="project-description">${project.description}</p>`;
    }

    // که project.link موجود وي بټن ورښکاره کوي
    const linkHtml = project.link
        ? `<a class="project-btn" href="${project.link}" target="_blank" rel="noopener noreferrer">پروژه وګورئ</a>`
        : "";

    return `
            <div class="project-card" id="${project.id}">
                <div class="project-images">${imagesHtml}
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}${categoryHtml}</h3>
                    ${descriptionHtml}
                    <div class="project-tech">
                        ${techHtml}
                    </div>
                    ${linkHtml}
                </div>
            </div>`;
}

// ==========================
// ټولی پروژی په صفحه کی ښودل
// ==========================
async function renderProjects() {
    const grid = document.querySelector(".projects-grid");
    if (!grid) {
        console.error("عنصر .projects-grid ونه موندل شو");
        return;
    }

    try {
        const res = await fetch(PROJECTS_JSON_PATH);
        if (!res.ok) {
            throw new Error(`JSON fetch failed: ${res.status}`);
        }
        const projects = await res.json();
        grid.innerHTML = projects.map(createProjectCard).join("");
    } catch (err) {
        console.error("د پروژو ډیټا نه لوستل شوه:", err);
        grid.innerHTML = `<p style="text-align:center;">پروژې نشي ښودل کیدای</p>`;
    }
}

renderProjects();