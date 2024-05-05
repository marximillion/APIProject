/**
 * Imports
 */

import { Component, ReactNode } from "react";
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import MovieAgent from "../lib/api/agents/MovieAgent";
import Error from "../lib/api/models/Error";

/**
 * Props
 */
interface Props {}
/**

 * State
 */
interface State {}

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
    this.state = {};
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
    // Set up of agent
    const movieAgent = new MovieAgent();
    try {
      // Attempt retrieval of movies
      const searchResponse = await movieAgent.searchMovies();

      // Determine if returned response is an error or not
      if (searchResponse instanceof Error) {
        console.log('Home::ERROR::searchMovies', searchResponse);
        throw searchResponse;
      } else {
        console.log('searchResponse:', searchResponse);
      }
    } catch (error: any) {
      Alert.alert('Error', `response: ${error.response}\nmessage: ${error.message}`);
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
    return (
      <>
        <SafeAreaView style={styles.safeAreaContainer}>
          <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.scrollContentContainer}
          >
            <Text style={styles.contentTitleText}>
              {'HOME SCREEN'}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={this.searchMovies}
            >
              <Text style={styles.buttonText}>{'SEARCH'}</Text>
            </TouchableOpacity>
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
  }
})// End of styles
// End of file