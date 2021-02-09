events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                outputs: ['buildinggadgets:construction_block_dense'],
                input: 'buildinggadgets:construction_block_powder'
            },
            {
                outputs: [item.of('emendatusenigmatica:silicon_gem').chance(0.5), item.of('emendatusenigmatica:silicon_gem').chance(0.25)],
                input: 'create:limesand'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.create.splashing(recipe.outputs, recipe.input);
    });
});
