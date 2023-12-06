import { GetUsersUseCase } from "./GetUsersUseCase";
import { Response, Request } from "express";

export class GetUsersController {
  async handle(req: Request, res: Response) {
    const getUsersUseCase = new GetUsersUseCase();
    const result = await getUsersUseCase.execute();

    return res.status(201).json(result);
  }
}
