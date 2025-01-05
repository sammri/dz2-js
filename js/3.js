let health = 100; 
let energy = 100; 

let healthLoss = prompt('Сколько урона получить игроку?');
let energyLoss = prompt('Сколько энергии потерять игроку?');

healthLoss = Number(healthLoss);
energyLoss = Number(energyLoss);

health = health - healthLoss; 
energy = energy - energyLoss; 

if (health < 0) {
    health = 0;
}
if (energy < 0) {
    energy = 0;
}


console.log(`Здоровье игрока: ${health}`);
console.log(`Энергия игрока: ${energy}`);

alert(`После боя: здоровье = ${health}, энергия = ${energy}`);


