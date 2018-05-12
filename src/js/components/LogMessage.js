import React from "react"
import AppStore from 'Store'
import * as AppActions from 'Action';

export default class LogMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logMessage: AppStore.getLogMessage()
    }
    this.updateLogMessage = this.updateLogMessage.bind(this)
  }

  componentDidMount() {
    AppStore.on("CHANGE", this.updateLogMessage);
  }
  componentWillUnmount() {
    AppStore.removeListener("CHANGE", this.updateLogMessage);
  }
  updateLogMessage() {
    this.setState({
      logMessage: AppStore.getLogMessage()
    });
  }

  render() {
    if (this.state.logMessage.msg == '') {
      return null;
    } else {
      if (this.state.logMessage.success) {
        return (
          <div class="alert alert-success" role="alert">
            {this.state.logMessage.msg}
          </div>
        );
      } else {
        return (
          <div>
            <div class="alert alert-danger" role="alert">
              {this.state.logMessage.msg}
            </div>
          </div>
        );
      }
    }
  }
}
