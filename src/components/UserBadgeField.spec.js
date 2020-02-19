import React from 'react';
import { shallow } from 'enzyme';
import { Col } from 'reactstrap';
import UserBadgeField from './UserBadgeField';


describe('<UserBadgeField>', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = { label: 'mockLabel', value: 'mockValue' };
  });


  describe('<Col>', () => {
    test('renders', () => {
      expect(shallow(<UserBadgeField {...defaultProps} />).find(Col).exists()).toEqual(true);
    });


    test('xs="12"', () => {
      expect(shallow(<UserBadgeField {...defaultProps } />).find(Col).prop('xs')).toEqual('12');
    });


    test('sm="6"', () => {
      expect(shallow(<UserBadgeField {...defaultProps } />).find(Col).prop('sm')).toEqual('6');
    });
  });


  describe('label <span>', () => {
    test('has className="user-badge-label"', () => {
      expect(shallow(<UserBadgeField {...defaultProps} />)
        .find('span')
        .first()
        .hasClass('user-badge-label'))
        .toEqual(true);
    });


    test('to have text of `props.label`', () => {
      expect(shallow(<UserBadgeField {...defaultProps} />).find('span').first().text())
        .toEqual('mockLabel:');
    });
  });


  describe('value <span>', () => {
    test('has className="user-badge-value"', () => {
      expect(shallow(<UserBadgeField {...defaultProps} />)
        .find('span')
        .last()
        .hasClass('user-badge-value'))
        .toEqual(true);
    });


    test('value is `props.value` if it exists', () => {
      expect(shallow(<UserBadgeField {...defaultProps} />).find('span').last().text())
        .toEqual('mockValue');
    });


    test('value is "N/A" if it does not exist', () => {
      expect(shallow(<UserBadgeField {...defaultProps} value={null} />).find('span').last().text())
        .toEqual('N/A');
    });
  });
});
