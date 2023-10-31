import AppModel from '../models/AppModel';

// CRUD METHODS

export const getUsers = async (req, res) => {
    try {
       const users = await AppModel.findAll()
       res.json(users)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getUser = async (req,res) => {
    try {
        const user = await AppModel.findAll();
        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createUser = async (req,res) => {
    try {
        const newUser = await AppModel.create(req.body);
        res.json({
            message: 'User Created successfully!'
        });
    } catch (error) {
        
    }
}