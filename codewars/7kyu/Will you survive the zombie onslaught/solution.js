// You shot all X zombies.
// You shot X zombies before being eaten: overwhelmed.
// You shot X zombies before being eaten: ran out of ammo.
// You shot X zombies before being eaten: overwhelmed.

function zombieShootout (zombies, range, ammo) {
    for (let z = zombies; z > 0; z--) {
        if (range <= 0) return `You shot ${zombies-z} zombies before being eaten: overwhelmed.`;
        if (ammo <= 0) return `You shot ${zombies-z} zombies before being eaten: ran out of ammo.`;
        range -= 0.5;
        ammo -= 1;
    }
    return `You shot all ${zombies} zombies.`;
}

// Мое решение буквальное.
// Вполне можно вот так было сделать:
function zombie_shootout2(zombies, range, ammo) {
    const steps = range * 2;

    if (ammo < steps && zombies > ammo) {
        return `You shot ${ammo} zombies before being eaten: ran out of ammo.`;
    }

    if (zombies > steps) {
        return `You shot ${steps} zombies before being eaten: overwhelmed.`;
    }

    return `You shot all ${zombies} zombies.`;
}


// Понравился рекурсивный подход в решении этой задачи:
const zombie_shootout3 = (zombies, range, ammo, zCount = 0) => {
    if (!zombies) return `You shot all ${zCount} zombies.`
    if (!range) return `You shot ${zCount} zombies before being eaten: overwhelmed.`
    if (!ammo) return `You shot ${zCount} zombies before being eaten: ran out of ammo.`
    return zombie_shootout3(zombies - 1, range - 0.5, ammo - 1, zCount + 1);
};


console.log(zombie_shootout3(10, 5, 100))
