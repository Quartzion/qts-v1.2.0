const router = require('express').Router();

const {
    createFollowUpRequest,
    getAllFollowUpRequests,
    deleteOneFollowUpRequest
} = require('../../controllers/followUpController');

router.route('/cwu')
    .post(createFollowUpRequest)
    .get(getAllFollowUpRequests)
    .delete(deleteOneFollowUpRequest);

module.exports = router;