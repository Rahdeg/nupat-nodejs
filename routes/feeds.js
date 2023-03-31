const router = require("express").Router();
const {getAutoComplete,getSearch,getList,getListSimilarities} = require('../controller/feeds');

router.get("/auto-complete/:id", getAutoComplete);
router.get("/search/:id/:start_id/:maxResult_id",getSearch);
router.get("/list/:limit_id/:start_id",getList);
router.get("/list-similarities/:id/:limit_id/:start_id",getListSimilarities);


module.exports = router;