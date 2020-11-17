const usersRepository = require('../repositories/usersRepository');

const listAll = async(req, res, next) => {

    try {
        const users = await usersRepository.listAll();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'internal server error' });
    }
}

const create = async(req, res, next) => {
    const { name } = req.body;
    const avatar = req.file.url;

    const data = {
        name,
        avatar,
    };

    try {
        console.log(req.file);
        console.log(data);
        const hasName = (data.name.length > 0);

        if (hasName) {
            const userCreated = await usersRepository.create(data);
            res.status(201).json({
                user: userCreated
            });
        } else {
            res.status(400).json({ error: 'O usuário precisa ter um nome' });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal server error',
            error: err
        });
    }

}

module.exports = {
    listAll,
    create
}