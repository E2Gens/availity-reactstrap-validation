import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FormFeedback } from 'reactstrap';

export default class AvFeedback extends Component {
  static propTypes = Object.assign({
    for: PropTypes.string
  }, FormFeedback.propTypes);

  static contextTypes = {
    FormCtrl: PropTypes.object.isRequired,
    Group: PropTypes.object.isRequired,
  };

  render() {
    const validation = this.context.Group.getInputState();
    const feedback = this.context.FormCtrl.getInputState(this.props.for);
    return <FormFeedback valid={!validation.error} {...this.props}>{feedback ? feedback.errorMessage : ''}</FormFeedback>;
  }
}
