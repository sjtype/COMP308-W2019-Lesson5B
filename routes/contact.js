let express = require("express");
let router = express.Router();
//let mongoose = require('mongoose');

// create a reference to the db schema

let contactController = require("../controllers/contact");

/* GET Contact List page - READ Operation */
router.get("/", contactController.displayContactList);

/* GET Route for the Add page 
   This will display the Add page */
router.get("/add", contactController.displayAddPage);

/* POST Route for processing the Add page */
router.post("/add", contactController.processAddPage);

/* GET request - display the Edit page */
router.get("/edit/:id", contactController.displayEditPage);

/* POST request - Update the database with data from the Edit page*/
router.post("/edit/:id", contactController.processEditPage);

/* GET request - Perform the delete action */
router.get("/delete/:id", contactController.performDelete);

module.exports = router;
