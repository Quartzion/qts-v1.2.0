const { FollowUpData } = require('../models')

module.exports = {
 async addFollowUpRequest({body}, res) {
    const followUpRequest = await FollowUpData.create(body);
     if (!followUpRequest) {
        return res.status(400).console.log(
            json({
                message: "sorry, something went wrong - please try again"
            })
        );
     }
 }
}