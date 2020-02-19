import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';


class userBadgeField extends React.Component {
  constructor(props) {
    super(props);   
  }

  render() {
    return (
        <Col xs="12" sm="6">
        <span className="user-badge-label">{this.props.label }: </span>
        <span className="user-badge-value">{this.props.value || 'N/A'}</span>
      </Col>
      
    );
  }
}

export default userBadgeField;