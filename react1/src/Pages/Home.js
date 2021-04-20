import './../App.css';
import {Link} from 'react-router-dom'
import {withAuth} from "../Tech/UserContext";


export default withAuth(({isAuthorized}) =>

    <div className="App">
        <header className="App-header">
            {isAuthorized ? (<h3 className='inSystem'>You are logged in</h3>) : (<h3 className='outSystem'>You are not logged in</h3>)}
            <h2> Home page </h2>
            <button className='Button-style'>
                <Link to='/Client' className='Button-style' style={{textDecoration: 'none'}}>
                    Client
                </Link>
            </button>
            <button className='Button-style'>
                <Link to='/Login' className='Button-style' style={{textDecoration: 'none'}}>
                    Login
                </Link>
            </button>
        </header>
    </div>

);
