/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1108966215")

  // remove field
  collection.fields.removeById("url2713005905")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1108966215")

  // add field
  collection.fields.addAt(6, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "url2713005905",
    "name": "model_url",
    "onlyDomains": [],
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  return app.save(collection)
})
