import React from 'react'
import image from '../../assets/images/greetings.svg';
import './Greetings.css';

function Greetings(props) {
    return (

        <div className='greetingsMainDiv'>
            <div className='greetingsTextDiv'>
                <h1 className='greetingsTitle'>
                    Manuel Robert
                </h1>
                <h2 className='greetingsNickName'>
                ( layman_brother )
                </h2>
                <p className='greetingsText'>
                A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical 
                systems to create impact.
                </p>
            </div>
            <div className='greetingsImgDiv'>
                <img src={image} alt='Greetings'></img>
            </div>
        </div>
    );
}

export default Greetings
