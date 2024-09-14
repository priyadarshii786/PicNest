import PostMessage from "../models/postMessage.js";


export const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find();

        res.status(201).json(postMessages);
    }
    catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const createPost = (req, res) => {
    res.send('Post Creation!');
}