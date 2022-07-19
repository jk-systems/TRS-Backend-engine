const controller = require("./controller/controller.js")

const express = require("express")

const router = express.Router()


////////////////////////////////////////////////////////
router.get("/tt", controller.getTt)
// router.get("/getBand", controller.getBand)
// router.get("/getRoles", controller.getRoles)
// router.get("/getDept", controller.getDept)
// router.get("/getSections", controller.getSections)
// router.get("/getDivs", controller.getDivs)
router.get("/getSquads", controller.getSquads)
// router.get("/about", controller.renderAboutPage)

// router.post("/", controller.getTable)


// router.post("/addTt", controller.addTt)
// router.post("/addBand", controller.addBand)
// router.post("/addRole", controller.addRole)
// router.post("/addDept", controller.addDept)
// router.post("/addSection", controller.addSection)
// router.post("/addDiv", controller.addDiv)
router.post("/addSquad", controller.addSquad)


router.post("/api/login", controller.authUser)
router.post("/rsc/login", controller.authUser)

////////////////////////////////////////////////////////

module.exports = router;