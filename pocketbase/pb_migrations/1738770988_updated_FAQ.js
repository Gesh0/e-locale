/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1904094519")

  // update collection data
  unmarshal({
    "viewRule": "  @request.auth.verified = true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1904094519")

  // update collection data
  unmarshal({
    "viewRule": "  @request.auth.name != \"Leo Geshovski\""
  }, collection)

  return app.save(collection)
})
