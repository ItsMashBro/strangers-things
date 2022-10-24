import { useState } from "react"
import { useNavigate } from "react-router-dom";


const EditPost = (props) => {
    const [title, setTitle] = useState(props.indivPost.title);

    const navigate = useNavigate();

    async function handleEditPost (event) {
        event.preventDefault();
        try {
            const resonse = await fetch(`http://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${props.indivPost._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    post: {
                        title
                    }
                })
            })

            const editedPosts = await fetch(`http://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/`);
            const translatedEditPosts = await editedPosts.json();

            props.setProfileData([,,,translatedEditPosts.data.posts])
            props.handleToggleEditForm();

            navigate('./ForSale.js')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <p>Welcome to my edit post</p>
            <form onSubmit={handleEditPost}>
                <label>Edit Title</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>

                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}

export default EditPost