const router = require('express').Router();

const {
    createFollowUpRequest 
} = require('../../controllers/followUpController');

router.route('/cwu').post(createFollowUpRequest);

module.exports = router;