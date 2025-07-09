const router = require('express').Router();

const {
    createFollowUpRequest,
    getAllFollowUpRequests 
} = require('../../controllers/followUpController');

router.route('/cwu')
    .post(createFollowUpRequest)
    .get(getAllFollowUpRequests);

module.exports = router;