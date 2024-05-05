/**
 * Imports
 */

import {APIPayload} from '../../APIPayload';
import Error from '../models/Error';
import Movies from '../models/Movies';

/**
 * Constants
 */
const MOVIE_API_KEY = 'a67c9774';
const MOVIE_URL = 'https://www.omdbapi.com/';

/**
 * Handles the API for making movie API calls
 */
export default class MovieAgent {
  /**
   * Make call for movie API
   */
  public searchMovies = async (movieSearch: string) => {
    console.log('MovieAgent::searchMovies');

    try {
      // 1: Construct the URL
      const url = `${MOVIE_URL}?s=${movieSearch}&apikey=${MOVIE_API_KEY}`;
      console.log(url);

      // 2: Fetch the API
      const response: Response = await fetch(url);

      // 3: Retrieve the JSON response
      const jsonResponse: APIPayload = await response.json();

      // 4: Check for OK Response, retrieve message if call failed and throw error to catch
      if (jsonResponse.Response === 'False') {
        throw Error.createFromJSON(jsonResponse);
      }

      console.log('MovieAgent::searchMovie::jsonResponse', jsonResponse);
      return Movies.createFromJSON(jsonResponse);
    } catch (error: any) {
      return error;
    }
  }; // End of searcjMovies()

  /**
   * Make call for movie details API
   */
  public getMovieDetails = async () => {
    console.log('MovieAgent::getMovieDetails');
  }; // End of getMovieDetails()
} // End of class
// End of file
