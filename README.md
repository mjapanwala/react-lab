# Day Three Review


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.




## Files to Ignore

- Any file ending with `.spec.js`
- `src/setupTests.js`
- `src/styles.css`





## Instructions

### `src/App.js`

1. Have `startEdit()` [set](https://reactjs.org/docs/react-component.html#setstate) `this.state.isEditing` to `true`
1. Have `cancelEdit()` set `this.state.isEditing` to `false`
1. Have `updateUser(updatedUser)` set `this.state.isEditing` to `false` *and* `this.state.user` to the `updatedUser` parameter
1. **render()**
	1. Pass `this.updateUser` into the prop `onSubmit` on `<EditUserBadge>`


### `src/components/UserBadge.js`

`<Row />` should take 4 new `<UserBadgeField>` components. Create a new file and define the component there. Make sure you pass the appropriate props so one component can replace each of the `<Col>`s as its children.


### `src/components/EditUserBadge.js`

1. `handleSubmit` should call `onSubmit` prop passing the entire `this.state` as the only parameter
1. `handleFirstNameChange()` should set the state of `firstName` to `event.target.value`
1. `handleEmailChange()` should set the state of `email` to `event.target.value`
1. `handlePhoneChange()` should set the state of `phone` to `event.target.value`
1. **`render()`**
	1. Add JSX for the last name values


### `src/components/UserBadgeField.js`

1. Create file and export React component
1. Has `<Col xs="12" sm="6">`
1. Takes a prop `label` and puts it in a `<span className="user-badge-label">` where the colon is not a value of `props.label` but is hardcoded in the JSX after the prop (eg: `<span>{props.myProp}:</span>`)
1. Takes a prop `value` and puts it in a `<span className="user-badge-value">`

Looks similar to:

```jsx
<Col xs="12" sm="6">
  <span className="user-badge-label">First Name:</span>
  <span className="user-badge-value">{props.firstName || 'N/A'}</span>
</Col>
```




## Resources

- **Props:**
	- [Props in JSX](https://reactjs.org/docs/jsx-in-depth.html#props-in-jsx)
	- [Props are Read-only](https://reactjs.org/docs/components-and-props.html#props-are-read-only)
- **State:**
	- [Adding Local State to a Class](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)
	- [Using State Correctly](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly)
	- [`this.setState()`](https://reactjs.org/docs/react-component.html#setstate)
- **[Reactstrap](https://reactstrap.github.io/)**
	- [Button](https://reactstrap.github.io/components/buttons/)
	- [Container, Row, Col](https://reactstrap.github.io/components/layout/)
	- [Form, Label, Input](https://reactstrap.github.io/components/form/)
- [Extracting Components](https://reactjs.org/docs/components-and-props.html#extracting-components)
