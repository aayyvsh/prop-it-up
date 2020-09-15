import React, {Component} from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
            this.state = {
                age : props.age
            }        

            this.handleBirthday = this.handleBirthday.bind(this);
    }

    handleBirthday(){
        this.setState(prevState => {
            return {age: this.state.age++}
            })
    }

    render() {
        const {fname, lname, age, hairColor} = this.props;
        return (
            <div>
                <div className="card card text-center w-50 my-5 mx-5">
                    <div className="card-header">
                        <h2>{fname}  {lname}</h2>
                    </div>
                    <div className="card-body">
                        <p>Hair Color: {hairColor} </p>
                        <p>Age: {this.state.age }</p>
                        <button onClick={this.handleBirthday}>Happy Birthday</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonCard;