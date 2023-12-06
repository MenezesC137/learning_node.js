import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { ICreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase {
  async execute({ movie_id, user_id }: ICreateMovieRentDTO): Promise<void> {
    // verificar se o filme existe
    const movieExists = await prisma.movie.findUnique({
      where: {
        id: movie_id,
      },
    });
    if (!movieExists) throw new AppError("Filme não existe");

    // verificar se o usuário existe
    const userExists = await prisma.user.findUnique({
      where: {
        id: user_id,
      },
    });
    if (!userExists) throw new AppError("Usuário não existe");

    // verificar se o filme está disponível
    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: {
        movie_id,
      },
    });
    if (movieAlreadyRented) throw new AppError("Filme já alugado");

    // criar locacao
    await prisma.movieRent.create({
      data: {
        movie_id,
        user_id,
      },
    });
  }
}
