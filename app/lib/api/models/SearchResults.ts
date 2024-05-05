/**
 * Imports
 */
import {APIPayload} from '../../APIPayload';
import populateObject from '../../common/Utility';

/**
 * Default class for handling search data from the MOVIE SEARCH payload
 */
export default class SearchResults {
  /**
   * Member Variables
   */
  public title: string | undefined;
  public year: string | undefined;
  public imdbID: string | undefined;
  public type: string | undefined;
  public posterURL: string | undefined; 

  /**
   * Create Error instance for API JSON
   *
   * @param json {APIPayload}
   * @return SearchResults
   */
  public static createFromJSON(json: APIPayload): SearchResults {
    const result = new SearchResults();
    populateObject(result, 'title', json.Title); // Title becomes title
    populateObject(result, 'year', json.Year); // Year becomes year
    populateObject(result, 'imdbID', json.imdbID);
    populateObject(result, 'type', json.Type); // Type becomes type
    populateObject(result, 'posterURL', json.Poster); // Poster becomes posterURL
    return result;
  }// End of createFromJSON()

  /**
   * Create instance array from API JSON
   * 
   * @param json {APIPayload}
   * @return SearchResults[]
   */
  public static createArrayFromJSON(json: APIPayload): SearchResults {
    /**
     * 1. Create empty array
     * 2. Loop through json values for each search result
     * 3. For each search result, model it into a SearchResults object and then push it
     *    on the array
     */
    const result: SearchResults[] = [];
    if (json.length > 0) {
      json.forEach((element: APIPayload) => {
        const searchResultsItem = SearchResults.createFromJSON(element);
        result.push(searchResultsItem);
      })
    }
    // @ts-ignore
    return result;
  }// End of createArrayFromJSON()
}// End of class
// End of file