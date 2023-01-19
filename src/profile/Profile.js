import React from 'react';
import PropTypes from 'prop-types';


const Profile = ({ image, fullname, bio, profession, handleName }) => {

    const myStyle = {
        color: "black",
        padding: "10px",
        margin: "0 auto",
        fontFamily: "Sans-Serif",
        width: "30vw",
        height: "20hw",
        border: "2px solid",
        overflow: "visible",
    };
    return (
        <div className='carte' style={myStyle}>
            <img src={image} style={{
                borderRadius: "5px",
                 transition: "all 1s ease",
            }}
            
            alt='msg' />
            <h1 onClick={() => handleName(fullname)}>{fullname}</h1>
            <h1 style={{ color: "#852F72", textShadow: "2px 2px 4px #FFFFFF" }}>{bio}</h1>
            <p style={{ textDecoration: "underline" }}>{profession}</p>
            <button onClick={() => handleName(fullname)} style={{ fontSize: "39px", cursor: "pointer" }}   >Click</button>



        </div>
    );
}
Profile.propTypes = {
    image: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func.isRequired,
}



export default Profile;
