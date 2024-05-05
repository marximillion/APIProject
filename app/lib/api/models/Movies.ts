/**
 * Imports
 */
import {APIPayload} from '../../APIPayload';
import populateObject from '../../common/Utility';
import SearchResults from './SearchResults';

/**
 * {
  "Search": [
    {
      "Title": "Soul of the Game: the John McClendon Story",
      "Year": "2021",
      "imdbID": "tt28540061",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTY0OGRlMDktZTljNy00MTc2LTk5MWEtODA4MWY0NWRiM2RlXkEyXkFqcGdeQXVyMTI4NTI0MzU0._V1_SX300.jpg"
    },
    {
      "Title": "A Game of Survival",
      "Year": "2025",
      "imdbID": "tt29473502",
      "Type": "movie",
      "Poster": "N/A"
    },
    "totalResults": "784",
    "Response": "True"
  } 
 */

/**
 * Default class for handling search data from the MOVIE SEARCH payload
 */
export default class Movies {
  /**
   * Member Variables
   */
  public searchResults: SearchResults[] | undefined;
  public totalResults: string | undefined;
  public response: string | undefined;

  /**
   * Create Movies instance from API JSON
   *
   * @param json {APIPayload}
   * @return Movies
   */
  public static createFromJSON(json: APIPayload): Movies {
    const result = new Movies();
    // Search becomes searchResults
    return result;
  }// Ed of createFromJSON()

}// End of class
// End of file