import React from 'react';


const errorPage = () => {
    return (
        <div>
            <p>404 Page Not Found - Refresh your page, or try again later!</p>
            <img src={ require('../Images/errorImg.jpg')} />
        </div>
    )
}
export default errorPage;