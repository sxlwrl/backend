import {RequestHandler} from 'express';

export const getHealthcheck: RequestHandler = (req, res) => {
    res.status(200).json({
        date: new Date(),
        status: 'OK'
    });
};