# Steps to setting up delete functionality for your delete posts

# CRUD -> Creat, Read, Update, Delete

# Context:
- These steps are for, assuming that you have already set up your profile page (which uses a POST request) to render out all the posts that you as a specicifc user have created

- Step 1) You first need to set up a delete button for each indiidual post renderedc onto your profile page
*'[{title: "Washing Machine", _id: "insert id here"}]'*

- Step 2) I have to write a callback function that sends a DELETE request to our Stranger's Things API endpoint for deleting posts.
    - This is where you will be using a fetch method
        = For you fetch method's 2nd argument (the object), your metod key will look like this: 'method: "DELETE"'
    -Don't forget your try/catch block

- Step 3) Remembe, for your fetch's DELETE request, you will need to pass in the specific post's ID value that you want to delete.
    - You will need to access the specific post's _id number from the either state that you've created to hold you profile component's information, OR you've passed down some dtat through something like outletContext or props.
    \\ Note \\ Make sure you use a template literal to pass this _id number into yoyur fetch method's API (i.e. the first argument)
    
- Step 4) Attach the callback function that you wrote from step 2 into the buttons that you've jsut made from step 1.
    - You will use onClick / onSubmit event listener to handle that callback function

- Step 5) *optional* - This is for devs who want to setup a proper SPA where you will not need to refresh the page after you successfully delete a post.
    - 5a. After you translate your promise with your data to JSON, you need to refetch the newly updated posts from the API. So write another fetch method
    - 5b. After you fetch that data and translate it to JSON, then you want to reset your original posts state using your setter method (i.e. setPosts).

- Step 6) *optional* - If you want your page to send you to another page the moment you click the delete button, then you'll want to use a naviget hook to do so. (See Jeremy's demo).

```
async function deleteSpecificPost(postIdNumber) {
    try {
        const response = await fetch('link here')
        const data = await resonse.json();
        console.log("I am the data: ", data)

        const newlyUpdatedPostPromise = await fetch("link");
```
*I am going to use my setter function (i.e. setPosts) that I passed down either through useOutletContext or props to reupdate my original state*

```
        setPosts(translatedPromise.data.post)
    } catch (error) {
        console.log(error)
    }
}
```
