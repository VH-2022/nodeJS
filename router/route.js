const user=require('../controller/usercontroller');
module.exports = app => {
    app.group("/users", (route) => {
        route.get( '/list',user.list);
        route.get( '/create-user',user.createuser);
        route.post( '/save-user',user.saveUser);
        route.get( '/edit/:id',user.findOne);
        route.post( '/update-user',user.updateUser);
    });

}
