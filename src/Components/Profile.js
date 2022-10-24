import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import Goldline from '../Images/goldline.png'
import NewPost from "./Post";




const Profile = () => {
    const [account,setAccount] = useState();
    useEffect(() => {
    
    async function getData(){
    try{
        const response2 = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me",{
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        const tempt = await response2.json()
        setAccount(tempt.data)

    } catch(error){

    }
    }
    getData()
    },[])
    const [deleteId, setDeleteId] = useState("")
    useEffect(() => {
    async function deleteFromProfile(id){
        try{
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json", 
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            })
            const response2 = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts")
            const responsetranslate = await response2.json()
        }catch(error){
            console.log(error)
        }
    }
    deleteFromProfile(deleteId)
    },[deleteId])
    return (
        <div style={boxStyle}>
            
            <div style={messagesStyle}>Messages:</div>
            {account && account.messages.length ? account.messages.map((users) => {
                return <div> 
                    <div>{console.log(users)}</div>
                    <div>From: {users.post.title}</div>
                    <div>{users.content}</div>
                    <div>User: {users.fromUser.username}</div>
                </div>
            }) : <div style={{paddingBottom: 10}}>You don't have any messages</div>
        }   
            <img src={Goldline} />
            <br/><br/>
            <div style={{paddingBottom: 20, fontSize: 25, fontWeight: 'bold', color: '#FF9933'}}>Posts:</div>
            {account && account.posts.length ? account.posts.map((users) => {
                return <div>
                    <div>{users.title}</div>
                    <div>{users.description}</div>
                    <div>{users.price}</div>
                    <div style={{paddingTop: 10}}><button style={{borderRadius: 25}} onClick = {() => setDeleteId(users._id)}>Delete Post</button></div>
                    <br/>
                    <div style={{paddingBottom: 10}}><button><Link to="EditPost">Edit Post</Link></button></div>
                    <img src={Goldline} />
                    
                    </div>
            }) : <div>"No Posts Yet"</div>
        }
        </div>
    )
}
export default Profile


const boxStyle = {
    color: '#B8B8B8',
  textAlign: 'center',
  padding: 10,
  width: 'fit-content',
  margin: 'auto',
  backgroundColor: 'rgba(0,51,8, .5)',
  boxShadow: '1px 2px 9px #FF9933',
  borderRadius: 20,
  position: 'relative',
  top: 130,
  border: '1.5px solid black'
}

const messagesStyle = {
    paddingBottom: 20,
    color: '#FF9933',
    fontWeight: 'bold',
    fontSize: 25
}