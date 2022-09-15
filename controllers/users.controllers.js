const Users = require('../models/User.models');
module.exports.userController = {
addUser: async (req, res) => {
    const { username} = req.body;
    try{
        await Users.create({
            username
        });
        res.json("Пользователь добавлен")

    }catch(error){
        res.json(error)
    }
}
 




}