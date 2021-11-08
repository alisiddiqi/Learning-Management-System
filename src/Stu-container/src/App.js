import './HomePage.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StuRoutes from "./StuRoutes";
import StuHome from "./StuHome";

class App extends Component {
    render() {
        return (
            <div>
                <StuHome />
                <StuRoutes />
            </div>
        );
    }
}

export default App;