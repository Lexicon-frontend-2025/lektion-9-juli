"use strict";
const userName = "Maja";
const plants = [
    {
        id: 1,
        name: "Luktärt",
        type: "växt",
        image: "https://images.unsplash.com/photo-1595261879082-1182ccb097fc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: new Date('2025-05-15T10:00:00Z'),
        user: userName
    },
    {
        id: 2,
        name: "Potatis",
        type: "rotfrukt",
        image: "https://images.unsplash.com/photo-1621459557554-60a70d3d61ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvdGF0byUyMHBsYW50fGVufDB8fDB8fHww",
        date: new Date('2026-05-15T10:00:00Z'),
        user: userName
    }
];
// hämta och spara undan element från HTML som vi kan behöva
const form = document.querySelector("form");
const nameInput = document.getElementById("plant-name");
const dateInput = document.getElementById("plant-date");
const imageInput = document.getElementById("plant-image");
const typeInput = document.getElementById("plant-type");
const plannedContainer = document.querySelector(".planned-plants");
const plantedContainer = document.querySelector(".planted-plants");
renderPlants();
form.addEventListener("submit", (event) => {
    event.preventDefault(); // stoppar att sidan laddas om
    // skapa unikt ID
    let newId;
    if (plants.length > 0) {
        // ta reda på vad nästa id i listan ska bli
        let maxId = 0;
        for (const plant of plants) {
            if (plant.id > maxId) {
                maxId = plant.id;
            }
        }
        newId = maxId + 1;
    }
    else {
        // om ingen planta finns -> tar vi ID 1
        newId = 1;
    }
    console.log(typeInput);
    let processedType = "";
    // if (typeInput.value === "vegetable") {
    //     processedType = "grönsak"
    // } else if (typeInput.value === "rootvegetable") {
    //     processedType = "rotfrukt"
    // } else if (typeInput.value === "flower") {
    //     processedType = "blomma"
    // } else if (typeInput.value === "plant") {
    //     processedType = "växt"
    // } else if (typeInput.value === "other") {
    //     processedType = "övrigt"
    // }
    switch (typeInput.value) {
        case "vegetable":
            processedType = "grönsak";
            break;
        case "rootvegetable":
            processedType = "rotfrukt";
            break;
        case "flower":
            processedType = "blomma";
            break;
        case "plant":
            processedType = "växt";
            break;
        case "other":
            processedType = "övrigt";
            break;
        default:
            processedType = "okänd"; // vallfritt fallback
    }
    // ta värdena från input-fälten och lägga in i den nya plantan
    const newPlant = {
        id: newId,
        name: nameInput.value,
        date: new Date(dateInput.value),
        image: imageInput.value,
        type: processedType,
        user: userName
    };
    plants.push(newPlant);
    console.log(newPlant);
    renderPlants();
});
function renderPlants() {
    // ta reda på vart plantorna ska åka in i HTML
    plannedContainer.innerHTML = "";
    plantedContainer.innerHTML = "";
    // loopa igenom listan
    plants.forEach((plant) => {
        // skapa elementen som behövs
        const li = document.createElement("li");
        // image
        const img = document.createElement("img");
        img.setAttribute("src", plant.image);
        img.setAttribute("alt", plant.name);
        img.width = 100;
        img.height = 170;
        li.appendChild(img);
        // name heading
        const headingName = document.createElement("h3");
        headingName.innerText = plant.name;
        li.appendChild(headingName);
        // date paragraph
        const pDate = document.createElement("p");
        pDate.innerText = plant.date.toLocaleDateString("sv-se"); // kolla lowercase
        li.appendChild(pDate);
        // name paragraph
        const pName = document.createElement("p");
        pName.innerText = userName;
        li.appendChild(pName);
        // ta bort-knappen
        const btnDelete = document.createElement("button");
        btnDelete.dataset.id = plant.id.toString();
        btnDelete.innerText = "Ta bort";
        li.appendChild(btnDelete);
        // titta om datumet är i framtiden -> planned, annars planted
        if (plant.date > new Date()) {
            plannedContainer.appendChild(li);
        }
        else {
            plantedContainer.appendChild(li);
        }
    });
}
;
function handleDeletePlant(event) {
    const target = event.target;
    // är target en knapp?
    if (target.tagName === "BUTTON") {
        console.log(target.dataset);
        // handleDelete
        const id = Number(target.dataset.id);
        console.log(id);
        // hitta vilken planta vi har tryckt på via id, vart i listan den är
        const index = plants.findIndex(p => p.id === id);
        console.log(index);
        // ta bort plantan ur plantlistan via splice
        plants.splice(index, 1);
        renderPlants();
    }
}
;
// ta bort-funktionalitet
plannedContainer.addEventListener("click", handleDeletePlant);
plantedContainer.addEventListener("click", (event) => {
    handleDeletePlant(event);
});
//# sourceMappingURL=index.js.map