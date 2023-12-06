import { Response, Request } from "express";
import { CreateMovieRentUseCase } from "./CreateMovieRentUseCase";

export class CreateMovieRentController {
  async handle(req: Request, res: Response) {
    const { user_id, movie_id } = req.body;

    const createMovieRentUseCase = new CreateMovieRentUseCase();

    await createMovieRentUseCase.execute({
      user_id,
      movie_id,
    });

    return res.status(201).send();
  }
}
