import { GetUsersController } from "./../modules/users/useCases/getUsers/GetUsersController";
import { Router } from "express";
import { CreateUserController } from "./../modules/users/useCases/createUser/CreateUserController";

const createUserController = new CreateUserController();
const getUsersController = new GetUsersController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getUsersController.handle);

export { userRoutes };
