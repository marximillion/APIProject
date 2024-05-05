/**
 * Imports
 */

import { Component, ReactNode } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import MovieAgent from "../lib/api/agents/MovieAgent";
import Error from "../lib/api/models/Error";
import Movies from "../lib/api/models/Movies";

/**
 * Props
 */
interface Props {}
/**

 * State
 */
interface State {
  movieSearch: string;
  busy: boolean;
  movies: Movies | null;
}

/**
 * Root render of the application
 */
export default class HomeScreen extends Component<Props, State> {
  /**
   * Constructor
   * 
   * @param props
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      movieSearch: '',
      busy: false,
      movies: null,
    };
  }// End of constructor()

  /**
   * On Mount
   */
  public componentDidMount(): void {
    console.log('Home::OnMount');
  }// End of componentDidMount()

  /**
   * Un Mount
   */
  public componentWillUnmount(): void {
    console.log('Home::UnMount');  
  }// End of componentWillUnmount()
  
  /**
   **********ACTION METHODS********** 
   */

  /**
   * Action: Press
   */
  private searchMovies = async () => {
    // 1: Retrieve variables from state
    const { movieSearch } = this.state;

    // 1.1 Activate busy state
    this.setState({
      busy: true,
    });

    // 2: Set up of agent
    const movieAgent = new MovieAgent();
    try {
      // 3: Attempt retrieval of movies
      const searchResponse = await movieAgent.searchMovies(movieSearch);

      // 3.1: Determine if returned response is an error or not
      if (searchResponse instanceof Error) {
        // Pass the error from the searchResponse through to catch
        console.log('Home::ERROR::searchMovies::', searchResponse);
        throw searchResponse;
      } else {
        this.setState({
          movies: searchResponse
        })
        console.log('searchResponse:', searchResponse);
      }
    } catch (error: any) {
      // Display an error message in a native Alert
      Alert.alert('Error', `response: ${error.response}\nmessage: ${error.message}`);
    } finally {
      // 4: Disable busy state when try and catch is complete
      this.setState({
        busy: false
      })
    }
  }// End of searchMovies

  /**
   **********RENDER METHODS********** 
   */

  /**
   * Render: Home 
   */
  public render(): ReactNode {
    console.log('Home::Render')
    const { movieSearch, busy, movies } = this.state;
    return (
      <>
        <SafeAreaView style={styles.safeAreaContainer}>
          <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.scrollContentContainer}
          >
            {/* Title */}
            <Text style={styles.contentTitleText}>
              {'HOME SCREEN'}
            </Text>

            {/* Input for search query */}
            <TextInput
              style={styles.inputBox}
              onChangeText={(query: string) =>
                this.setState({
                  movieSearch: query
                })
              }
              value={movieSearch}
              placeholder={'Search for a movie...'}
              placeholderTextColor={'black'}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={this.searchMovies}
            >
              {busy
                ? <ActivityIndicator animating={busy} />
                : <Text style={styles.buttonText}>{'SEARCH'}</Text>
              }
            </TouchableOpacity>
            {
              movies &&
              <View style={styles.searchContainer}>
                  <Text style={styles.buttonText}>{`Search results for: ${movieSearch}`}</Text>
                <Text style={styles.buttonText}>{`# of Results: ${movies.totalResults}`}</Text>
              </View>
            }
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }// End of render()
}// End of class

/**
 * Styles
 */
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  scrollContainer: {
    backgroundColor: '#c0c991',
    flex: 1,
  },
  scrollContentContainer: {
    alignItems: 'center',
  },
  contentTitleText: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    borderColor: 'green',
    borderRadius: 15,
    borderWidth: 1,
    elevation: 0.2,
    height: 60,
    backgroundColor: 'rgba(145, 171, 15, 0.9)', // Pinkish color with 60% transparency
    justifyContent: 'center',
    marginTop: 10,
    width: '30%',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputBox: {
    backgroundColor: 'rgba(145, 171, 15, 0.4)',
    borderColor: '#ccc',
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 16,
    height: 60,
    width: '50%',
    paddingHorizontal: 15,
  },
  searchContainer: {

  }
})// End of styles
// End of file