import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/movies/useCases/createMovieRent/CreateMovieRentController";
import { GetMoviesRentController } from "../modules/movies/useCases/getMoviesRent/getMoviesRentController";

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();
const getMoviesRentController = new GetMoviesRentController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/", getMoviesRentController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export { movieRoutes };
