// priority: 1

ServerEvents.recipes(event => {
  event.shaped('minecraft:barrier', [
    'GLG',
    'GCG',
    'GLG'
  ], {
    G: 'connectedglass:clear_glass',
    L: '#minecraft:logs',
    C: '#forge:ingots/copper'
  })
})

console.info('mms_recipe.js load completed')
