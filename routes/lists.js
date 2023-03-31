const router = require("express").Router();
const {getTags,getCategories,getReviews} = require('../controller/lists');

router.get("/tags", getTags);
router.get("/categories",getCategories);
router.get("/review/:global_id/:limit_id/:offset_id",getReviews);

module.exports = router;