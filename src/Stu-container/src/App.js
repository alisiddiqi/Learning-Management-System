import './HomePage.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StuRoutes from "./StuRoutes";

class App extends Component {
    render() {
        return (
            <div>
                <StuRoutes />
            </div>
        );
    }
}

export default App;