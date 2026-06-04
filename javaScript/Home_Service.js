const fields = document.querySelector('.cards-section');
fields.classList.add('cards-section');

const cards_grid = document.querySelector('.cards-grid');
cards_grid.classList.add('cards-grid');

const tech_info = [
    {
        image_path: "image/Can_Do/3.jpg",
        card_title: "مدیریتی سیستم",
        card_discription: "منظم، دقیق، اتوماتیک، باکفایت، با اعتبار "
    },
    {
        image_path: "image/Can_Do/2.jpg",
        card_title: "ویب اپلیکیشن",
        card_discription: "ګړندی، هر اړخیز، خوندي، ځواب ورکوونکی، تازه"
    },
    {
        image_path: "image/Can_Do/1.jpg",
        card_title: "ډیسکټاپ اپلیکیشن",
        card_discription: "چټک، باثباته،شه کارد کرد لرونکی، "
    },
    // {
    //     image_path: "image/Can_Do/eb_sys2.png",
    //     card_title: "Embedded سیستمونه",
    //     card_discription: "دی سیتمونو ته کوډ کول"
    // },
    {
        image_path: "image/Can_Do/4.jpg",
        card_title: "AI د ماشین زده کړی ماډلونه",
        card_discription: "چټک، باثباته، هوښیار، عصري، مسلک"
    },
    {
        image_path: "image/Can_Do/idea.jpg",
        card_title: "نظریات",
        card_discription: "سافټویر پروژو، کار، مربوط مسلکي نظریات"
    }

];

tech_info.forEach(technology => {
    const modern_card = document.createElement('div');
    modern_card.classList.add('modern-card');

    const img = document.createElement("img");
    img.src = technology.image_path;
    img.classList.add("card-bg");

    const card_overlay = document.createElement('div');
    card_overlay.classList.add('card-overlay');

    const card_title = document.createElement('h3');
    card_title.textContent = technology.card_title;
    card_title.classList.add('card-title');

    const card_description = document.createElement('p');
    card_description.textContent = technology.card_discription;
    card_description.classList.add('card-description');

    card_overlay.append(card_title, card_description);
    modern_card.append(img, card_overlay);


    cards_grid.append(modern_card);
})

fields.append(cards_grid);
