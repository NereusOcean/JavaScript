import './../App.css';
import { withAuth} from "../Tech/UserContext";


export default withAuth(({deauthorize}) =>
    <div className="App">
        <header className="App-header">
            <h2>
                Client page
                 (Private)
            </h2>
            <button className='Button-style' onClick={deauthorize}>
                    Log Out
            </button>
        </header>
    </div>
);