import * as React from 'react';

class SignupForm extends React.Component {
    constructor() {
    super();
this.state = { email: ""}
this.handleSubmit =this.handleSubmit.bind (this)
}
handleSubmit(e){

e.preventDefault();
e.stopPropagation();
console.log(`Sending ${this.state.email}`);
}
// ... Code to submit form
render() {
return (
<form onSubmit={this.handleSubmit}>
<input type="text" value={this.state.email} />
<input type="submit" value="Submit" />
</form>
);
}
// You test this in a browser. You try to type in the text input field but nothing appears. What's wrong?
// Select the best option:
// A. e.preventDefault() is causing the keystrokes to not register
// B.
// The text input needs a readonly={false} attribute
// Time 1:52
// C. The component should be using props instead of state; Change all usages of this.state.email to this.props.email.
// D.
// The value of this.state.email never changes; The text input needs an onChange attribute
