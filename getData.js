import axios from "axios";

//const getData = async user_id => {}
//async functıon getData (user_id) {}
export default async user_id => {
 
    const {data:usersResponse} = await axios ("https://jsonplaceholder.typicode.com/users/" + user_id);
    const {data:postsResponse} = await axios ("https://jsonplaceholder.typicode.com/posts?userId="+user_id);
    
    const results = {
        usersResponse,
        postsResponse
    }
    return results;


}

//   export default getData;
