import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';


class EditUserBadge extends React.Component {
  constructor(props) {
    super(props);

    // The default state is defined here
    this.state = {
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email,
      phone: props.phone,
    };

    // TODO: Bind `this` to all methods here to avoid pesky bugs and confusing from `this`
  }

  /**
   * TODO: Call `onSubmit` prop passing the entire `this.state` as the only function parameter.
   * @param {Event} event to prevent the default submission action of loading a new page. This is done for us.
   * @returns {undefined}
   */
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state)
  }

  /**
   * Update `this.state.firstName` with `event.target.value`.
   * @param {Event} event
   * @returns {undefined}
   */
  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  }

  /**
   * Update `this.state.lastName` with `event.target.value`.
   * @param {Event} event
   * @returns {undefined}
   */
  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  }

  /**
   * Update `this.state.email` with `event.target.value`.
   * @param {Event} event
   * @returns {undefined}
   */
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  /**
   * Update `this.state.phone` with `event.target.value`.
   * @param {Event} event
   * @returns {undefined}
   */
  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col xs="12" sm="6">
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
              />
            </FormGroup>
          </Col>

          <Col xs="12" sm="6">
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                value={this.state.lastName}
                onChange={this.handleLastNameChange}
              />
            </FormGroup>
          </Col>

        </Row>

      

        <Row>
          <Col xs="12" sm="6">
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="coolstuff@example.com"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </FormGroup>
          </Col>

          <Col xs="12" sm="6">
            <FormGroup>
              <Label>Phone</Label>
              <Input
                type="text"
                placeholder="+1 (234) 567 8900"
                value={this.state.phone}
                onChange={this.handlePhoneChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button type="submit" color="success">
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default EditUserBadge;
