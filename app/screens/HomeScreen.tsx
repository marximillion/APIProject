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
      <Text>{'HOME'}</Text>
    );
  }// End of render()
}// End of class
// End of file