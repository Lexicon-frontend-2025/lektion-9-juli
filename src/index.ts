interface Plant {
    id: number,
    name: string,
    type: string,
    image: string,
    date: Date
}
const plants = [
    {
        id: 1,
        name: "Luktärt",
        type: "växt",
        image: "https://images.unsplash.com/photo-1595261879082-1182ccb097fc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: new Date('2025-05-15T10:00:00Z')
    },
    {
        id: 2,
        name: "Potatis",
        type: "rotfrukt",
        image: "https://images.unsplash.com/photo-1621459557554-60a70d3d61ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvdGF0byUyMHBsYW50fGVufDB8fDB8fHww",
        date: new Date('2026-05-15T10:00:00Z')
    }
]