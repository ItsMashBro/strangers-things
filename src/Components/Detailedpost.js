import React, { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import EditPost from './Editpost';

const DetailedPostView = () => {
    const [,, profileData, setProfileData] = useOutletContext();
    const [detailSpecificPost, setDetailSpecificPost] = useState();
    const [toggleEditForm, setToggleEditForm] = useState(false);
    const {id} = useParams();

    function handleToggleEditForm () {
        setToggleEditForm(!toggleEditForm);
    }

    useEffect(() => {
        async function findSpecificPost () {
            try {
                const [specificPost] = await profileData.posts.filter((element) => element._id == id);
                setDetailSpecificPost(specificPost);
            } catch (error) {
                console.log(error);
            }
        }
        findSpecificPost()
    }, [])


    return (
        <div>
            <button onClick={handleToggleEditForm}>Edit Post</button>

            {
                toggleEditForm ? <EditPost indivPost={detailSpecificPost} setProfileData={setProfileData} handleToggleEditForm={handleToggleEditForm}/> : null
            }
            
            <div>
                <p>Post Info:</p>
                {
                    detailSpecificPost.title ? <p>{detailSpecificPost.title}</p> : <p>Untitled Post</p>
                }
            </div>
        </div>
    )
}

export default DetailedPostView