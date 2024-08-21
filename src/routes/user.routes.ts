import { Application, Router } from 'express';
import * as userController from '../controllers/user.controller';

export default (app: Application) => {
    const router = Router();

    // router.get('/', function (req, res, next) {
    //     res.send('response with a user list');
    // });

    router.post('/', userController.createUser);
    router.get('/', userController.getAllUsers);
    router.get('/:id', userController.getUserById);
    router.put('/:id', userController.updateUser);
    router.delete('/:id', userController.deleteUser);


    app.use('/api/v1/users', router);
};
