import { Request, Response, NextFunction } from 'express';

const logger = (req:Request, res:Response, next:NextFunction) => {
  console.log(`${req.path} was visited`);
  next();
};

export default logger;