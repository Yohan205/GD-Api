const req = require("node-superfetch");
const { API } = require('../utils/key');

module.exports = {
    profile:
    /**
     * @param {'string or Number'} user
     */
        async function(user) {
        let profileUrl = "";
        if (user === undefined) return console.error('Debes colocar una accountID o el nombre del usuario')
        if (typeof user === "number") profileUrl = API + "/profile/" + user;
        if (typeof user === "string") profileUrl = API + "/profile/" + user;
        let { Body } = await req.get(profileUrl);
        return Body
    }
}