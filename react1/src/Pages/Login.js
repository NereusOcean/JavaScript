import './../App.css';
import {Redirect} from "react-router-dom";
import {withAuth} from "../Tech/UserContext";

export default withAuth(({isAuthorized, authorize}) =>
    isAuthorized ?  (<Redirect to='/'/>) : (
        <div className="App">
            <header className="App-header">
                <h2>Press button to Login</h2>
                <button className='Button-style' onClick={authorize}>
                    Login
                </button>
            </header>
        </div>
    )
);
