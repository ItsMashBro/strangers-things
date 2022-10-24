import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();

  const [posts, setPosts] = useOutletContext();

  const navigate = useNavigate();

  async function submitHandler(event) {
    try {
      if (!localStorage.getItem("token").length) {
        alert("You need to be logged in!");
        return;
      }
        const response = await fetch(
          "https://strangers-things.herokuapp.com/api/COHORT-NAME/posts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer TOKEN_STRING_HERE",
            },
            body: JSON.stringify({
              /* whatever things you need to send to the API */
            }),
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  });
  return (
    <>
      <div className="newPostContainer">
        <form onSubmit={sendPostData} />
      </div>
    </>
  )
};

export default NewPost;


  async function submitHandler(event) {
    event.preventDefault()
  }