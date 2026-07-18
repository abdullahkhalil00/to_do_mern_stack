const model = require('../models/userSchems')

async function handleUser(req, res) {
    try {
        const user = await model.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({
                message: "Email already exists.",
            });
        }

        res.status(500).json({
            message: err.message,
        });
    }
}

async function handleAllUser(req, res) {
    try {
        const result = await model.find({});
        res.json(result);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

async function handleUpdateUser(req, res) {
    const id = req.params.id;
    const result = await model.findById(id)
    res.json(result)
}

async function handleSubmitUpdateData(req, res) {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;

        const user = await model.findOneAndUpdate(
            { _id: id },
            { name, email, age },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.status(200).json({
            message: "User updated successfully",
            user,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

async function deleteUser(req, res) {

    const id = req.params.id;

    const deletedUser = await model.findByIdAndDelete(id);

    if (!deletedUser) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    res.status(200).json({
        message: "User deleted successfully",
    });
}
module.exports = {
    handleUser,
    handleAllUser,
    handleUpdateUser,
    handleSubmitUpdateData,
    deleteUser
}