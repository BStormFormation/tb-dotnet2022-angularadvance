const { faker } = require("@faker-js/faker");
const fs = require("fs");

console.log(faker);

// class Plat {
//     id: number = 0;
//     title: string = "";
//     description: string = "";
//     nbPerson: number = 0;
//     createdAt: Date = new Date();
//     updatedAt: Date = new Date();
// }

const plats = []
for (let i = 0; i < 500; i++) {
    plats.push({
        id: i + 1,
        title: faker.datatype.string(),
        description: faker.lorem.lines(5),
        nbPerson: faker.datatype.number({ min: 1, max: 4 }),
        createdAt: faker.datatype.datetime(),
        updatedAt: faker.datatype.datetime()
    })
}
const ingredients = [];
for (let i = 0; i < 50; i++) {
    ingredients.push({
        id: i + 1,
        name: faker.datatype.string()
    })
}

const contents = [];
const max = 50;
const min = 1;
for (let i = 0; i < 500; i++) {
    console.log(Math.floor(Math.random() * (max - min + 1) + min));
    for (let j = 0; j < Math.floor(Math.random() * (max - min + 1) + min); i++) {
        contents.push({
            "platId": i + 1,
            "ingredientId": Math.floor(Math.random() * (max - min + 1) + min),
            "qtt": faker.datatype.number({ min: 1, max: 500 }),
            "unit": faker.helpers.arrayElement(["piece", "g", "kg", "l", "dl", "cl", "ml", "cs", "cc"])
        })
    }
}

fs.appendFile("./plats.json", JSON.stringify(plats), () => { console.log("Plats - END") });
fs.appendFile("./ingredient.json", JSON.stringify(ingredients), () => { console.log("Ingredient - END") });
fs.appendFile("./contents.json", JSON.stringify(contents), () => console.log("Contents - END"));
