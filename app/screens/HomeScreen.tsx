/**
 * Imports
 */

import { Component, ReactNode } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

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
})// End of styles
// End of file