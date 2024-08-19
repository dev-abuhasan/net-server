import { Application, Router } from 'express';
// import * as tutorials from './student.controller';

export default (app: Application) => {
    const router = Router();

    router.get('/', function (req, res, next) {
        res.send('response with a user list');
    });


    // Create a new Tutorial
    // router.post('/', tutorials.create);

    // Retrieve all Tutorials
    // router.get('/', tutorials.findAll);

    // Retrieve all published Tutorials
    // router.get('/published', tutorials.findAllPublished);

    // Retrieve a single Tutorial with id
    // router.get('/:id', tutorials.findOne);

    // Update a Tutorial with id
    // router.put('/:id', tutorials.update);

    // Delete a Tutorial with id
    // router.delete('/:id', tutorials.delete);

    // Delete all Tutorials
    // router.delete('/', tutorials.deleteAll);

    app.use('/api/v1/users', router);
};
