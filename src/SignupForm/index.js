import React from "react";


class SignupForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        t_handle_provided: true,
        twitter_handle: null
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Want to link with twiter?:
            <input
              name="t_handle_provided"
              type="checkbox"
              checked={this.state.t_handle_provided}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Twitter handle
            <input
              name="numberOfGuests"
              type="text"
              value={this.state.twitter_handle}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }

  export default SignupForm;