import { Link } from 'react-router-dom';
import './home.css';
export default function Home(){
    return(
        <>
        <body className='body-home'>
            <div class="container">
                <div class="right"></div>
                <div class="left">
                    <div class="home">
                        <h1>Welcome to Wallet Application</h1>
                        
                        <div class="links">
                          <p>Sign Up to Create Wallet Account !</p>
                           <Link to="/signup"> <a><button class="btn btn-outline-success" >Sign Up</button></a></Link>
                            <p>If Already have Acccount Login !</p>
                            <a href="/login"><button class="btn btn-outline-success" >Login</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </body>
      </>
    )
}
