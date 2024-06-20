/**
 * Imports
 */

import {Component, ReactNode} from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

/**
 * Props
 */
interface Props {}

/**
 * State
 */
interface State {
  selectedDate: Date;
  open: boolean;
}

/**
 * Gas Screen
 */
export default class GasScreen extends Component<Props, State> {
  private date: string;
  private currentDate: Date;

  /**
   * Constructor
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedDate: new Date(),
      open: false,
    };

    this.date = '';
    this.currentDate = new Date();
  } // End of constructor()

  /**
   * on Mount
   */
  public componentDidMount(): void {
    console.log('GasScreen::OnMount');
  } // End of componentDidMount()

  /**
   * on UnMount
   */
  public componentWillUnmount(): void {
    console.log('GasScreen::UnMount');
  } // End of componentWillMount()

  /******************************************************************************/
  /****************************** ACTION METHODS ********************************/
  /******************************************************************************/

  /**
   * Action: Press
   */
  private openDatePicker = () => {
    console.log('GasScreen::openDatePicker');
    this.setState({
      open: true,
    });
  }; // End of openDatePicker()

  /**
   * Action: Press
   */
  private closeDatePicker = () => {
    console.log('GasScreen::closeDatePicker');
    this.setState({
      open: false,
    });
  }; // End of closeDatePicker()

  /**
   * Action: Press
   */
  private selectDate = (selectedDate: Date) => {
    console.log('GasScreen::closeDatePicker');

    this.setState({
      // date: selectedDate,
      open: false,
    });

    const day = selectedDate.getDay();
    const month = selectedDate.toDateString();
    const year = selectedDate.getFullYear();
    // const formatted date = ``
    this.date = day.toString();
    console.log(day);
  }; // End of selectDate()

  /******************************************************************************/
  /**************************** NAVIGATION METHODS ******************************/
  /******************************************************************************/

  /******************************************************************************/
  /****************************** RENDER METHODS ********************************/
  /******************************************************************************/

  /**
   * Render: GasScreen
   *
   * @returns ReactNode
   */
  public render(): ReactNode {
    console.log('GasScreen::Render');

    // Retrieve variables from state
    const {open, selectedDate} = this.state;
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}>
          {/* Title */}
          <Text style={styles.titleText}>{'GAS SCREEN'}</Text>

          {/* Date Picker */}
          <TouchableOpacity style={styles.button} onPress={this.openDatePicker}>
            <Text style={styles.buttonText}>{'Select Date'}</Text>
          </TouchableOpacity>
          <DatePicker
            modal
            mode="date"
            maximumDate={this.currentDate}
            open={open}
            date={selectedDate}
            onConfirm={this.selectDate}
            onCancel={this.closeDatePicker}
          />
          <Text style={styles.buttonText}>{`Today's Date: ${this.currentDate}`}</Text>
          <Text style={styles.buttonText}>{`Selected Date: ${this.date}`}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  } // End of render()
} // End of class

/******************************************************************************/
/******************************* STYLESHEETS **********************************/
/******************************************************************************/

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: '#bad1f5',
    flex: 1,
    width: '100%',
  },
  scrollContainer: {
    backgroundColor: '#bad1f5',
    flex: 1,
  },
  scrollContentContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  titleText: {
    color: 'black',
    fontSize: 32,
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
});
// End of file
