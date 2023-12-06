import { GetMoviesRentUseCase } from "./GetMoviesRentUseCase";
import { Response, Request } from "express";

export class GetMoviesRentController {
  async handle(req: Request, res: Response) {
    const getMoviesRentUseCase = new GetMoviesRentUseCase();
    const result = await getMoviesRentUseCase.execute();

    return res.status(201).json(result);
  }
}
