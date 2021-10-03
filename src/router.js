const express = require("express")
const router = express.Router()
const controller = require("./controllers/controller")

router.get("/", controller.renderHomePage)
router.get("/tt", controller.getTt)
router.get("/getBand", controller.getBand)
router.get("/getRoles", controller.getRoles)
router.get("/getDept", controller.getDept)
router.get("/getSections", controller.getSections)
router.get("/getDivs", controller.getDivs)
router.get("/getSquads", controller.getSquads)

router.post("/", controller.getTable)


router.post("/addTt", controller.addTt)
router.post("/addBand", controller.addBand)
router.post("/addRole", controller.addRole)
router.post("/addDept", controller.addDept)
router.post("/addSection", controller.addSection)
router.post("/addDiv", controller.addDiv)
router.post("/addSquad", controller.addSquad)


router.post("/api/login", controller.authUser)
router.post("/rsc/login", controller.authUser)
router.post("/rsc/addSquadType", controller.addSquadType)
router.post("/rsc/addResource", controller.addResource)


router.get("/about", controller.renderAboutPage)

module.exports = router