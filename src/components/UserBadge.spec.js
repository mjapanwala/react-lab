import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'reactstrap';
import UserBadge from './UserBadge';
import UserBadgeField from './UserBadgeField';


describe('<UserBadge>', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      firstName: 'mockFirstName',
      lastName: 'mockLastName',
      email: 'mockEmail',
      phone: 'mockPhone',
    };
  });


  describe('firstName <UserBadgeField>', () => {
    let userBadgeFieldWrapper;

    beforeEach(() => {
      userBadgeFieldWrapper = shallow(<UserBadge {...defaultProps} />).find(Row).childAt(0);
    });


    test('is a <UserBadeField>', () => {
      expect(userBadgeFieldWrapper.is(UserBadgeField)).toEqual(true);
    });


    test('label prop', () => {
      expect(userBadgeFieldWrapper.prop('label')).toEqual('First Name');
    });


    test('value prop', () => {
      expect(userBadgeFieldWrapper.prop('value')).toEqual('mockFirstName');
    });
  });


  describe('lastName <UserBadgeField>', () => {
    let userBadgeFieldWrapper;

    beforeEach(() => {
      userBadgeFieldWrapper = shallow(<UserBadge {...defaultProps} />).find(Row).childAt(1);
    });


    test('is a <UserBadeField>', () => {
      expect(userBadgeFieldWrapper.is(UserBadgeField)).toEqual(true);
    });


    test('label prop', () => {
      expect(userBadgeFieldWrapper.prop('label')).toEqual('Last Name');
    });


    test('value prop', () => {
      expect(userBadgeFieldWrapper.prop('value')).toEqual('mockLastName');
    });
  });


  describe('email <UserBadgeField>', () => {
    let userBadgeFieldWrapper;

    beforeEach(() => {
      userBadgeFieldWrapper = shallow(<UserBadge {...defaultProps} />).find(Row).childAt(2);
    });


    test('is a <UserBadeField>', () => {
      expect(userBadgeFieldWrapper.is(UserBadgeField)).toEqual(true);
    });


    test('label prop', () => {
      expect(userBadgeFieldWrapper.prop('label')).toEqual('Email');
    });


    test('value prop', () => {
      expect(userBadgeFieldWrapper.prop('value')).toEqual('mockEmail');
    });
  });


  describe('phone <UserBadgeField>', () => {
    let userBadgeFieldWrapper;

    beforeEach(() => {
      userBadgeFieldWrapper = shallow(<UserBadge {...defaultProps} />).find(Row).childAt(3);
    });


    test('is a <UserBadeField>', () => {
      expect(userBadgeFieldWrapper.is(UserBadgeField)).toEqual(true);
    });


    test('label prop', () => {
      expect(userBadgeFieldWrapper.prop('label')).toEqual('Phone');
    });


    test('value prop', () => {
      expect(userBadgeFieldWrapper.prop('value')).toEqual('mockPhone');
    });
  });
});
