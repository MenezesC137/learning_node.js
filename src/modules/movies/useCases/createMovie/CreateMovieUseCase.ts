import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { ICreateMovieDTO } from "../../dtos/CreateMovieDTO";

export class CreateMovieUseCase {
  async execute({
    title,
    duration,
    release_date,
  }: ICreateMovieDTO): Promise<Movie> {
    const movie = await prisma.movie.create({
      data: {
        title,
        duration,
        release_date,
      },
    });

    return movie;
  }
}
