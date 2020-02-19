import React from 'react';
import { Row, Col } from 'reactstrap';
import UserBadgeField from './UserBadgeField';


/**
 * TODO:
 * <Row /> should take 4 new `<UserBadgeField>` components.
 * Create a new file and define the component there.
 * Make sure you pass the appropriate props so one component
 * can replace each of the `<Col>`s as its children.
 *
 * Tip: `UserBadgeField` should have `<Col>` as the first component it returns.
 * It should have both a `label` prop and a `value` prop as well.
 *
 * Bonus: Define an array above the `UserBadge` constant and use `array.map()`
 * to render all instances of `UserBadgeField`
 */

const badges = [{
  value: 'firstName', label: 'First Name'
},{
  value: 'lastName', label: 'Last Name'
},{
  value: 'email', label: 'Email'
},{
  value: 'phone', label: 'Phone Number'
}]

export default function UserBadge(props) {
  return (
    <Row>
      {/* <Col xs="12" sm="6">
        <span className="user-badge-label">First Name:</span>
        <span className="user-badge-value">{props.firstName || 'N/A'}</span>
      </Col>

      <Col xs="12" sm="6">
        <span className="user-badge-label">Last Name:</span>
        <span className="user-badge-value">{props.lastName || 'N/A'}</span>
      </Col>

      <Col xs="12" sm="6">
        <span className="user-badge-label">Email:</span>
        <span className="user-badge-value">{props.email || 'N/A'}</span>
      </Col>

      <Col xs="12" sm="6">
        <span className="user-badge-label">Phone:</span>
        <span className="user-badge-value">{props.phone || 'N/A'}</span>
      </Col>*/}
      {
        badges.map((obj, index) => 
          <UserBadgeField key={index} label={obj.label} value={props[obj.value]} />
        ) 
      }
  </Row>
  );
}
