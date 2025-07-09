const router = require('express').Router();

const {
    createFollowUpRequest,
    getAllFollowUpRequests,
    deleteOneFollowUpRequest,
    deleteAllFollowUpRequests
} = require('../../controllers/followUpController');

router.route('/cwu')
    .post(createFollowUpRequest)
    .get(getAllFollowUpRequests)
    .delete(deleteAllFollowUpRequests);
    
router.route('/cwu/:id').delete(deleteOneFollowUpRequest);

module.exports = router;