const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {

    async listAll() {
        const users = await User
            .find({},
                'name avatar');
        return users;
    },

    async create(data) {
        const user = new User(data);
        return await user.save();
    }

}