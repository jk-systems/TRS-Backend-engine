const express = require("express")
const router = express.Router()
const controller = require("./controllers/controller")

router.get("/", controller.renderHomePage)
router.get("/tt", controller.getTt)
router.post("/", controller.getTable)



router.post("/api/login", controller.authUser)
router.post("/rsc/login", controller.authUser)
router.post("/rsc/addSquadType", controller.addSquad)
router.post("/rsc/addSquadType", controller.addSquadType)
router.post("/rsc/addResource", controller.addResource)


router.get("/about", controller.renderAboutPage)

module.exports = router