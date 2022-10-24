import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Profile = () => {
    const [profileData, setProfileData] = useOutletContext();

    useEffect(() => {
        async function handleProfileInfo () {
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                const data = await response.json();
                setProfileData(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        handleProfileInfo()
    }, [])

    return (
        <div>
            <h2>Profile Page</h2>

            {
                profileData.posts ? profileData.posts.map((indivPost, idx) => {
                    console.log("I am the individual post from the .map: ", indivPost)
                    return (
                        <div key={idx}>
                        <p>{indivPost.title}</p>
                        <Link to={`/profile/${indivPost._id}`}>See Detailed View</Link>
                    </div>
                    )
                }): null
            }
        </div>
    )
}


export default Profile;