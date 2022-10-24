import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";

const ForSale = () => {
  console.log("Your posts should be displaying now");
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    async function postHandler(event) {
      try {
        const response = await fetch(
          "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts"
        );
        const transData = await response.json();
        setPosts(transData.data.posts);
      } catch (error) {
        console.log(error);
      }
    }
    postHandler();
  }, []);

  return (
    <>
      {posts && posts.length
        ? posts.map((event) => {
            return (
              
              <div style={{position: 'relative', top: 110}}>

                <div style={boxStyle}>
                  <div style={postStyling}>
                    <div>{event.author.username}</div><br/>
                    <div>{event.title}</div>
                    <div>{event.price}</div><br/>
                    <div>{event.description}</div>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default ForSale;

const boxStyle = {
  padding: 20,
  width: 'fit-content',
  margin: 'auto',
}


const postStyling = {
  color: '#B8B8B8',
  textAlign: 'center',
  padding: 10,
  width: 'fit-content',
  margin: 'auto',
  backgroundColor: 'rgba(0,51,8, .5)',
  boxShadow: '1px 2px 9px #FF9933',
  borderRadius: 20,
  border: '1.5px solid black'
}