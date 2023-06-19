import React, { Component } from 'react';
import axios from 'axios';

class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: '',
      playerCountry: '',
      totalMatchesPlayed: '',
      formError: false
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitHandler = (event) => {
    event.preventDefault();

    const { playerName, playerCountry, totalMatchesPlayed } = this.state;

    if (playerName && playerCountry && totalMatchesPlayed) {
      const newPlayer = {
        name: playerName,
        country: playerCountry,
        totalMatchesPlayed: parseInt(totalMatchesPlayed)
      };

      axios.post('http://localhost:3001/players', newPlayer)
        .then(response => {
          console.log(response.data);
          this.setState({
            playerName: '',
            playerCountry: '',
            totalMatchesPlayed: '',
            formError: false
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      this.setState({ formError: true });
    }
  };

  render() {
    const { playerName, playerCountry, totalMatchesPlayed, formError } = this.state;

    return (
      <div className="container mt-4">
        <h2>Add Player</h2>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label>Player Name:</label>
            <input
              type="text"
              name="playerName"
              value={playerName}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Player Country:</label>
            <input
              type="text"
              name="playerCountry"
              value={playerCountry}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Total Matches Played:</label>
            <input
              type="text"
              name="totalMatchesPlayed"
              value={totalMatchesPlayed}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          {formError && <p className="text-danger">Please fill in all the fields.</p>}
          <button type="submit" className="btn btn-primary">Add Player</button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;