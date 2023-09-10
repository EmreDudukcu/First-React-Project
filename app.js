import axios from "axios";

async function getData (number){

    const { data:user } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
    const { data:post } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + number);
    
    const getUser = console.log(user);
    const getPost = console.log(post);

    return getUser + getPost;

};

export default getData;