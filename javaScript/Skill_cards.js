const skillsGrid = document.querySelector(".skills-grid");

const skills = [
    {
        image: "image/skills/c++ (3).jpeg",
        title: "c/c++"
    },
    {
        image: "image/skills/python.jpg",
        title: "Python"
    },
    {
        image: "image/skills/java.png",
        title: "Java"
    },
    {
        image: "image/skills/databases.jpg",
        title: "MySQL, PostgreSQL, MongoDB, Oracle"
    },
    {
        image: "image/skills/ht_css_javascr.jpg",
        title: "HTML, CSS, JavaScript"
    },
    {
        image: "image/skills/nodejss.jpg",
        title: "Node.js"
    },
    // {
    //     image: "image/skills/git (2).jpg",
    //     title: "Git, GitHub"
    // }
];

skills.forEach(skill => {

    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");

    const img = document.createElement("img");
    img.src = skill.image;
    img.alt = skill.title;
    img.classList.add("card_image");

    const skillInfo = document.createElement("div");
    skillInfo.classList.add("skill-info");

    const title = document.createElement("h2");
    title.textContent = skill.title;

    skillInfo.appendChild(title);
    skillCard.append(img, skillInfo);

    skillsGrid.appendChild(skillCard);
});