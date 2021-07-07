import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import StreamForm from "../StreamForm/StreamForm";

class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div className="ui grid">
        <div className="twelve wide column">
          <div>
            <h2 className="ui block header">Create a Stream</h2>
            <StreamForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: formValues => dispatch(actions.createStream(formValues))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StreamCreate);
