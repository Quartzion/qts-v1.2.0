const FollowUpData = require('../models/followUpData')

module.exports = {
 async createFollowUpRequest({ body }, res) {
    try{
        const followUpRequest = await FollowUpData.create(body);
     if (!followUpRequest) {
        return res.status(400).json({
                message: "sorry, something went wrong - please try again"
            })

     }
    //  Success
    res.status(200).json(followUpRequest);

    } catch (err) {
        console.error("[ERROR] Failed to create follow-up:", err);
        res.status(501).json({
            message: "We're sorry, something went wrong, our engineers have been alerted please try again after some time.",
            error: err.message
        });
    }
 }
};