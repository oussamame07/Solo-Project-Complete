const User = require ('../controller/user.controller')
// const { authenticate } = require('../middleware/authMiddleware');


module.exports = (app) =>{
 


    app.post ('/api/register',User.register);
    app.post('/api/login',User.login);
    app.post('/api/logout', User.logout);
    app.get('/api/user', User.GetAllUsers);
    app.get ('/api/profile/:id',User.GetOneUser)
    app.put ('/api/edit/:id',User.updateUser);



}

