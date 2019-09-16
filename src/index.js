import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner";

class App extends React.Component {

    state={lat: null, long: null, errMessage:''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            
            position => {console.log(position); this.setState({lat: position.coords.latitude, long: position.coords.longitude})},
            err => this.setState({ errMessage: err.message }) 
        )
    };
    

    renderContent(){
        console.log(this.state)
        if (this.state.lat && !this.state.errMessage) {
            return <SeasonDisplay lat={this.state.lat} long={this.state.long}/>
        }
        if (!this.state.lat && this.state.errMessage) {
            return <div>Error: {this.state.errMessage}</div>
        }
        return <Spinner message="Please accept location request"/>
    }
    
    render() {
    return(
        <div>
        <div className="ui-container">{this.renderContent()}</div>
        
        </div>
    )
}
}
ReactDOM.render(
    <App />, document.querySelector("#root")
)