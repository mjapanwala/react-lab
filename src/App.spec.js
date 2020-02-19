import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import MainHeader from './components/MainHeader';
import UserBadge from './components/UserBadge';
import EditUserBadge from './components/EditUserBadge';


describe('<App>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });


  test('renders', () => {
    expect(wrapper.exists()).toEqual(true);
  });


  test('initial state', () => {
    expect(wrapper.state()).toEqual({
      isEditing: false,
      user: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
    });
  });


  test('startEdit()', () => {
    wrapper.setState({ isEditing: false });
    wrapper.instance().startEdit();
    expect(wrapper.state('isEditing')).toEqual(true);
  });


  test('cancelEdit()', () => {
    wrapper.setState({ isEditing: true });
    wrapper.instance().cancelEdit();
    expect(wrapper.state('isEditing')).toEqual(false);
  });


  test('updateUser()', () => {
    wrapper.setState({
      user: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
    });

    wrapper.instance().updateUser({
      firstName: 'mockFirstName',
      lastName: 'mockLastName',
      email: 'mockEmail',
      phone: 'mockPhone',
    });

    expect(wrapper.state('user')).toEqual({
      firstName: 'mockFirstName',
      lastName: 'mockLastName',
      email: 'mockEmail',
      phone: 'mockPhone',
    });
  });


  describe('render()', () => {
    test('this.state.isEditing = false', () => {
      wrapper.setState({ isEditing: false });
      expect(wrapper.find(MainHeader)).toHaveLength(1);
      expect(wrapper.find(UserBadge)).toHaveLength(1);
      expect(wrapper.find(EditUserBadge).exists()).toEqual(false);
    });


    test('this.state.isEditing = true', () => {
      wrapper.setState({ isEditing: true });
      expect(wrapper.find(MainHeader)).toHaveLength(1);
      expect(wrapper.find(EditUserBadge)).toHaveLength(1);
      expect(wrapper.find(UserBadge).exists()).toEqual(false);
    });


    describe('<MainHeader>', () => {
      test('passed `this.state.isEditing` into prop named `isEditing`', () => {
        expect(wrapper.find(MainHeader).prop('isEditing')).toEqual(wrapper.state('isEditing'));
      });


      test('passed `this.startEdit` into the prop named `startEdit`', () => {
        expect(wrapper.find(MainHeader).prop('startEdit')).toEqual(wrapper.instance().startEdit);
      });

      test('passed `this.cancelEdit` into the prop named `cancelEdit`', () => {
        expect(wrapper.find(MainHeader).prop('cancelEdit')).toEqual(wrapper.instance().cancelEdit);
      });
    });


    test('<EditUserBadge> gets passed `this.updateUser` into the prop named `onSubmit`', () => {
      wrapper.setState({ isEditing: true });
      expect(wrapper.find(EditUserBadge).prop('onSubmit')).toEqual(wrapper.instance().updateUser);
    });
  });
});
