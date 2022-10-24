import react, {useEffect, useState} from "react"

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState("")
    const handleChange = (event) => {
        setSearchTerm(event.target.value)
        const [posts, setPosts] = props.info
        const [filterPosts, setFilterPosts] = props.filtered
        const newPosts = posts.filter((post) => {
            return post.title.toLowerCase().includes(event.target.value.toLowerCase()) || post.price.toLowerCase().includes(event.target.value.toLowerCase())
        })
        console.log(event.target.value)
       if(searchTerm == "") {
        filterPosts(posts)
       } else {
        setFilterPosts(newPosts)
       }
    }
    return(
        <div className="Input-Container">
        <p>Search:</p>
       <input onChange = {handleChange} value = {searchTerm}/> 
       </div>
    )
}

export default Search