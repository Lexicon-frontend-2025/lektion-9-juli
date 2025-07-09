interface Plant {
    id: number,
    name: string,
    type: string,
    image: string,
    date: Date,
    user: string
}

const userName = "Maja";

const plants: Plant[] = [
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
]

// hämta och spara undan element från HTML som vi kan behöva
const form = document.querySelector("form") as HTMLFormElement;
const nameInput = document.getElementById("plant-name") as HTMLInputElement;
const dateInput = document.getElementById("plant-date") as HTMLInputElement;
const imageInput = document.getElementById("plant-image") as HTMLInputElement;
const typeInput = document.getElementById("plant-type") as HTMLSelectElement;

form.addEventListener("submit", (event) => {
    event.preventDefault(); // stoppar att sidan laddas om
    // skapa unikt ID
    let newId: number;
    if (plants.length > 0) {
        // ta reda på vad nästa id i listan ska bli
        let maxId = 0;
        for (const plant of plants) {
            if (plant.id > maxId) {
                maxId = plant.id;
            }
        }
        newId = maxId + 1;
    } else {
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
            processedType = "grönsak"
            break;
        case "rootvegetable":
            processedType = "rotfrukt"
            break;
        case "flower":
            processedType = "blomma"
            break;
        case "plant":
            processedType = "växt"
            break;
        case "other":
            processedType = "övrigt"
            break;
        default:
            processedType = "okänd" // vallfritt fallback
    }

    // ta värdena från input-fälten och lägga in i den nya plantan
    const newPlant: Plant = {
        id: newId,
        name: nameInput.value,
        date: new Date(dateInput.value),
        image: imageInput.value,
        type: processedType,
        user: userName
    };
    console.log(newPlant);
    plants.push(newPlant);
});