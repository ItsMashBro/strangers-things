import React, { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { TextField, Divider, List, ListItem } from "@mui/material";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const importOutlet = useOutletContext();
  const navigate = useNavigate();

  async function MakePost(event) {
    event.preventDefault();
    try {
      console.log(localStorage.getItem("token"));
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            post: {
              title: title,
              description: desc,
              price: price,
            },
          }),
        }
      );
      const newinfo = await response.json();
      importOutlet[5]([...importOutlet[4], newinfo.data.post]);
    } catch (error) {
      console.log(error);
    }
    navigate("../ForSale");
  }
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const descriptionHandler = (event) => {
    setDesc(event.target.value);
  };
  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  const boxStyle = {
    color: "#B8B8B8",
    textAlign: "center",
    padding: 10,
    width: 500,
    margin: "auto",
    backgroundColor: "rgba(0,51,8, .5)",
    boxShadow: "1px 2px 9px #FF9933",
    borderRadius: 20,
    position: "relative",
    marginTop: 200,
  };

  // Oh man, look at me learn, I'm a lot like you were.

  return (
    <div style={boxStyle}>
      {isTrue == false ? (
        <List fullWidth>
          <ListItem fullWidth>
            <form onSubmit={MakePost}>
              <h2 style={{ textAlign: "center", color: "#FF9933" }}>
                Create a New Post
              </h2>
              <div
                style={{
                  textAlign: "left",
                  paddingTop: 20,
                  paddingBottom: 5,
                }}
              >
                Title:
              </div>
              <TextField
                fullWidth
                style={{
                  Color: "#B8B8B8",
                  backgroundColor: "#B8B8B8",
                  width: 470,
                }}
                variant="filled"
                placeholder="Enter Title..."
                value={title}
                onChange={titleHandler}
              ></TextField>
            </form>
          </ListItem>
          <br />
          <Divider style={{ backgroundColor: "white" }} />
          <br />
          <ListItem>
            <form>
              <div style={{ paddingBottom: 5 }}>Description:</div>
              <TextField
                fullWidth
                style={{
                  Color: "#B8B8B8",
                  backgroundColor: "#B8B8B8",
                  width: 470,
                }}
                variant="filled"
                placeholder="Enter Description..."
                value={desc}
                onChange={descriptionHandler}
              ></TextField>
            </form>
          </ListItem>
          <br />
          <Divider style={{ backgroundColor: "white" }} />
          <br />
          <ListItem>
            <form>
              <div
                style={{
                  textAlign: "left",
                  paddingBottom: 5,
                }}
              >
                Price:
              </div>
              <TextField
                fullWidth
                style={{
                  Color: "#B8B8B8",
                  backgroundColor: "#B8B8B8",
                  width: 470,
                }}
                variant="filled"
                placeholder="Enter Price..."
                value={price}
                onChange={priceHandler}
              ></TextField>
            </form>
          </ListItem>
        </List>
      ) : null}
      <br />
      <button onClick={MakePost} type="submit">
        Submit New Post
      </button>
      <br />
      <br />
      <Link to="../ForSale">Back to Listings</Link>
    </div>
  );
};

export default NewPost;
