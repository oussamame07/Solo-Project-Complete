const controllers = require ('../controller/controllers')

module.exports = (app) =>{

    app.get ('/api/all',controllers.getAllOrder);
    app.get ('/api/order/:id',controllers.getOneOrder);
    app.post ('/api/new',controllers.Order);
    app.delete ('/api/order/:id',controllers.deleteOrder);
    app.put ('/api/order/:id',controllers.updateOrder);

} 