import React from 'react';
import { Container } from 'reactstrap';
import MainHeader from './components/MainHeader';
import UserBadge from './components/UserBadge';
import EditUserBadge from './components/EditUserBadge';


class App extends React.Component {
  constructor(props) {
    super(props);

    // The default state is defined here
    this.state = {
      isEditing: false,
      user: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
    };

    // We bind `this` to all methods here to avoid pesky bugs and confusing from `this`
    this.startEdit = this.startEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }


  /**
   * Changes the state of `isEditing` to the boolean `true`
   * @returns {undefined}
   */
  startEdit() {
    this.setState({
      isEditing: true,
    });
  }

  /**
   * TODO: Changes the state of `isEditing` to the boolean `true`
   * @returns {undefined}
   */
  cancelEdit() {
    this.setState({
      isEditing: false,
    });
  }

  /**
   * TODO: Set the state of `user` to the `updatedUser` param
   * @param {object} updatedUser to apply to the state
   * @returns {undefined}
   */
  updateUser(updatedUser) {
    this.setState({
      isEditing: false,
      user: updatedUser
    });
  }

  render() {
    return (
      <div>
        <MainHeader
          isEditing={this.state.isEditing}
          startEdit={this.startEdit}
          cancelEdit={this.cancelEdit}
        />

        <Container tag="main">
          {this.state.isEditing === true ? (
            <EditUserBadge
              firstName={this.state.user.firstName}
              lastName={this.state.user.lastName}
              email={this.state.user.email}
              phone={this.state.user.phone}
              onSubmit={this.updateUser}
            />
          ) : (
            // This uses the spread syntax, and is functionally the same as above
            <UserBadge {...this.state.user} />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
