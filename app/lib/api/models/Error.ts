/**
 * Imports
 */

import {APIPayload} from '../../APIPayload';
import populateObject from '../../common/Utility';

/**
 * Default class for handling errors
 */
export default class Error {
  /**
   * Member Variables
   */
  public response: string | undefined;
  public message: string | undefined;

  /**
   * Create Error instance for API JSON
   *
   * @param json {APIPayload}
   * @return Error
   */
  public static createFromJSON(json: APIPayload): Error {
    const result = new Error();
    populateObject(result, 'response', json.Response);
    populateObject(result, 'message', json.Error);
    return result;
  }// Ed of createFromJSON()
}// End of class
// End of file
