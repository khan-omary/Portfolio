const projectsGrid = document.querySelector(".projects-grid");

const projects = [
    {
        title: "ملی الماس ودانیز شرکت ویبسایټ",
        description: "د ملی الماس ودانیز شرکت ویبسايټ چی د هغه شرکت ټول معلومات، د هغو پروژې، تجربې او کارمندان پکی ځای پر ځای شوي.",
        link: "https://khan-omary.github.io/meli_almas_constraction_company/",
        buttonText: "ویبسايټ لیدل"
    },

    {
        title: "خان شرکت مدیریت سیستم",
        description: "دا یو شرکت چی د ساختماني موادو ټسټونه کوي، د همدې لپاره یو مکمل مدیریتي سیستم جوړ شوی.",
        link: "project.html#khan_section",
        buttonText: "سیستم لیدل"
    },

    {
        title: "د کورس مدیریت سیستم",
        description: "پدی سیستم د یو کورس ټول معلومات مدیریت کیږی، له استاد، زده کوونکي، نمرو او سرټیفکیټ پورې.",
        link: "project.html#course_section",
        buttonText: "سیستم لیدل"
    },
    {
        title: "د لیلیې مدیریت سیستم",
        description: "پدی مدیریتي سیستم کی د لیلیې ټوله ډیټا مدیریت کیږی، له بهترینو خصوصیاتو سره.",
        link: "project.html#hostal_section",
        buttonText: "سیستم لیدل"
    },
    {
        title: "پښتو ټایپینګ ګیم",
        description: "دا ګیم چی دری برخی لری (ساده، متوسط، سخت) کږلی ش پکی پښتو ټایپنګ زده کړی",
        link: "project.html#pashto_typing_game",
        buttonText: "ګیم لیدل"
    },
    {
        title: "personal finance management",
        description: "د پروژو په صفحه کی یی  مکمل معلومات وګوری ",
        link: "project.html#personal_finance_management",
        buttonText: "پروژه وګوری"
    }
];

function createProjct() {
    projects.forEach(project => {

        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const button = document.createElement("button");
        button.classList.add("app-btn");

        const link = document.createElement("a");
        link.href = project.link;
        link.textContent = project.buttonText;

        button.appendChild(link);

        projectCard.append(title, description, button);

        projectsGrid.appendChild(projectCard);
    });
}

createProjct();