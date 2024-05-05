/**
 * Imports
 */

import { Component, ReactNode } from "react";
import { Text } from "react-native";

/**
 * Props
 */
interface Props {}
/**

 * State
 */
interface State {}

/**
 * Root render of the app
 */
export default class App extends Component<Props, State> {
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
    console.log('App::OnMount');
  }// End of componentDidMount()

  /**
   * Un Mount
   */
  public componentWillUnmount(): void {
    console.log('App::UnMount');  
  }// End of componentWillUnmount()
  
  /**
   **********RENDER METHODS********** 
   */

  /**
   * Main Render
   */
  public render(): ReactNode {
    return (
      <Text>{'APP'}</Text>
    );
  }// End of render()
}// End of class
// End of file