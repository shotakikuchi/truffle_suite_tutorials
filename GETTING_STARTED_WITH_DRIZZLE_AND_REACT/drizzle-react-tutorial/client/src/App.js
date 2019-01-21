import React, {Component} from 'react';
import ReadString from "./ReadString";
import SetString from "./SetString";
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {loading: true, drizzleState: null};

    componentDidMount() {

        const {drizzle} = this.props;

        // subscribe to changes in the store
        this.unsubscribe = drizzle.store.subscribe(() => {

            const drizzleState = drizzle.store.getState();

            if (drizzleState.drizzleStatus.initialized) {
                this.setState({loading: false, drizzleState});
            }
        });

    }

    componentWillUnMount() {
        this.unsubscribe();
    }

    render() {
        if (this.state.loading) return "Loading Drizzle...";
        return (
            <div className="App">
                <ReadString
                    drizzle={this.props.drizzle}
                    drizzleState={this.state.drizzleState}
                />

                <SetString
                    drizzle={this.props.drizzle}
                    drizzleState={this.state.drizzleState}
                />

            </div>

        );
    }
}

export default App;
