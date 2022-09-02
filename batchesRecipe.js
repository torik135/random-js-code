/**
 * Function that returns the maximum number of whole batches that can be cooked from the recipe.
 */

const b1a = {
    recipe: {
        milk: 100,
        butter: 50,
        flour: 5
    },
    available: {
        milk: 132,
        butter: 48,
        flour: 51
    }
};

const b1b = {
    recipe: {
        milk: 100,
        flour: 4,
        sugar: 10,
        butter: 5
    },
    available: {
        milk: 1288,
        flour: 9,
        sugar: 95
    }
};
const b2 = {
    recipe: {
        milk: 100,
        butter: 50,
        cheese: 10
    },
    available: {
        milk: 198,
        butter: 52,
        cheese: 10
    }
};
const b3 = {
    recipe: {
        milk: 2,
        sugar: 40,
        butter: 20
    },
    available: {
        milk: 5,
        sugar: 120,
        butter: 500
    }
};

function batches(recipe, available) {
    const result = Math.floor(
        Math.min(...Object.keys(recipe)
            .map(i => available[i] / recipe[i] || 0)
        )
    );
    return result;
}

console.log(batches(b1a.recipe, b1a.available));
console.log(batches(b1b.recipe, b1b.available));
console.log(batches(b2.recipe, b2.available));
console.log(batches(b3.recipe, b3.available));