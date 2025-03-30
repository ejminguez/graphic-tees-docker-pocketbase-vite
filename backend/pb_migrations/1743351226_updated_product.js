/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1108966215")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file3616895705",
    "maxSelect": 1,
    "maxSize": 52428800,
    "mimeTypes": [],
    "name": "model",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1108966215")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file3616895705",
    "maxSelect": 1,
    "maxSize": 20971520,
    "mimeTypes": [],
    "name": "model",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
