import './../Styles/Navbar.css'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const router = useNavigate();

    return (
        <div className='nav-parent'>
            <div className='flex w-15 '>
                <p onClick={() => router('/')}>Home</p>
            </div>
            <div className='flex w-45'>
                <p>MEN</p>
                <p>WOMEN</p>
                <p>KIDS</p>
            </div>
            <div className='flex w-20'>
                <p onClick={() => router('/login')} >LOGIN</p>
                <p onClick={() => router('/register')}>REGISTER</p>
            </div>
        </div >
    )
}

export default Navbar;



// function myFunct() { }

// function() { }

// const myFunction = () => { }

// () => 