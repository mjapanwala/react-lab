import React from 'react';
import { shallow } from 'enzyme';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import EditUserBadge from './EditUserBadge';


describe('<EditUserBadge>', () => {
  let mockOnSubmit;
  let defaultProps;


  beforeEach(() => {
    jest.restoreAllMocks();
    mockOnSubmit = jest.fn();
    defaultProps = {
      firstName: 'mockFirstName',
      lastName: 'mockLastName',
      email: 'mockEmail',
      phone: 'mockPhone',
      onSubmit: mockOnSubmit,
    };
  });


  test('initial state comes from props', () => {
    expect(shallow(<EditUserBadge {...defaultProps} />).state()).toEqual({
      firstName: 'mockFirstName',
      lastName: 'mockLastName',
      email: 'mockEmail',
      phone: 'mockPhone',
    });

    expect(shallow(<EditUserBadge {...defaultProps} email="EY" firstName="YO" />).state())
      .toEqual({
        firstName: 'YO',
        lastName: 'mockLastName',
        email: 'EY',
        phone: 'mockPhone',
      });
  });


  describe('handleSubmit()', () => {
    let mockEvent;

    beforeEach(() => {
      mockEvent = { preventDefault: jest.fn() };
    });


    test('calls event.preventDefault()', () => {
      const wrapper = shallow(<EditUserBadge {...defaultProps} />);
      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalledWith();
      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });


    test('calls `this.props.onSubmit()` passing `this.state` into it', () => {
      const wrapper = shallow(<EditUserBadge {...defaultProps} />);
      expect(mockOnSubmit).not.toHaveBeenCalled();
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockOnSubmit).toHaveBeenCalledWith({
        firstName: 'mockFirstName',
        lastName: 'mockLastName',
        email: 'mockEmail',
        phone: 'mockPhone',
      });
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });
  });


  test('handleFirstNameChange()', () => {
    const wrapper = shallow(<EditUserBadge {...defaultProps} />);
    wrapper.instance().handleFirstNameChange({
      target: { value: 'mockFirstNameValue' },
    });
    expect(wrapper.state('firstName')).toEqual('mockFirstNameValue');
  });


  test('handleLastNameChange()', () => {
    const wrapper = shallow(<EditUserBadge {...defaultProps} />);
    wrapper.instance().handleLastNameChange({
      target: { value: 'mockLastNameValue' },
    });
    expect(wrapper.state('lastName')).toEqual('mockLastNameValue');
  });


  test('handleEmailChange()', () => {
    const wrapper = shallow(<EditUserBadge {...defaultProps} />);
    wrapper.instance().handleEmailChange({
      target: { value: 'mockEmailValue' },
    });
    expect(wrapper.state('email')).toEqual('mockEmailValue');
  });


  test('handlePhoneChange()', () => {
    const wrapper = shallow(<EditUserBadge {...defaultProps} />);
    wrapper.instance().handlePhoneChange({
      target: { value: 'mockPhoneValue' },
    });
    expect(wrapper.state('phone')).toEqual('mockPhoneValue');
  });


  describe('render()', () => {
    test('<Form> `onSubmit` prop calls `this.handleSubmit`', () => {
      const wrapper = shallow(<EditUserBadge {...defaultProps} />);
      expect(wrapper.find(Form).prop('onSubmit')).toEqual(wrapper.instance().handleSubmit);
    });


    test('has four <FormGroup>', () => {
      expect(shallow(<EditUserBadge {...defaultProps} />).find(FormGroup)).toHaveLength(4);
    });


    test('`<Label>Phone</Label>` exists', () => {
      expect(shallow(<EditUserBadge {...defaultProps} />).find(Label).last().prop('children'))
        .toEqual('Phone');
    });


    describe('Phone <Input />', () => {
      test('exists', () => {
        expect(shallow(<EditUserBadge {...defaultProps} />).find(Input)).toHaveLength(4);
      });

      test('type="text"', () => {
        expect(shallow(<EditUserBadge {...defaultProps} />).find(Input).last().prop('type'))
          .toEqual('text');
      });


      test('has placeholder', () => {
        expect(shallow(<EditUserBadge {...defaultProps} />).find(Input).last().prop('placeholder'))
          .toBeTruthy();
      });


      test('value is `this.state.phone`', () => {
        const wrapper = shallow(<EditUserBadge {...defaultProps} />);
        expect(wrapper.find(Input).last().prop('value')).toEqual('mockPhone');
        wrapper.setState({ phone: 'ey' });
        expect(wrapper.find(Input).last().prop('value')).toEqual('ey');
      });


      test('onChange props is `this.handlePhoneChange`', () => {
        const wrapper = shallow(<EditUserBadge {...defaultProps} />);
        expect(wrapper.find(Input).last().prop('onChange'))
           .toEqual(wrapper.instance().handlePhoneChange);
      });
    });
  });
});
