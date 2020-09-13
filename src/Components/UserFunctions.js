import axios from 'axios'

export const register = newUser =>{

    console.log('newUser',newUser)
        return axios
        .post('http://localhost:8000/api/register',newUser,{
            headers : { 'Content-Type' : 'application/json' }
        })
        .then(res => {
            console.log('res',res)
        })
        .catch(err => {
            console.log('ali',err)
        })
}


export const login = user =>{

        return axios
        .post('http://localhost:8000/api/login',{
            email:user.email,
            password:user.password,
        },{
            headers : { 'Content-Type' : 'application/json' }
        })
        .then(res => {
            localStorage.setItem('usertoken',res.data.success.token)
            console.log(res)
            // return getProfile(res.data.success.token)
            // return console.log( 'ressssss',res.data.success.token)

            // localStorage.setItem('usertoken',res.data.token)
            // console.log( 'ressssss',res)
            // return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const getProfile = () =>{
    console.log('hello From GetProfile')
        return axios.get('http://localhost:8000/api/details',{
            // headers:{Authorization:`Bearer ${data}` }
            headers: {Authorization:`Bearer ${localStorage.usertoken}`}
        
        })
        .then(res=>{
            console.log("hello from getProfile",res)
            return res.data
        })
        .catch(err=>{
            console.log(err)
        })
}

export const UpdateAvatar = (formData) => {
    console.log('form')
    return axios
      .post("http://localhost:8000/api/updateAvatar", formData,{
        headers: { Authorization: `Bearer ${localStorage.usertoken} ` },
      })
      .then((res) => {
        console.log(res)
        return res;
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
// export const getUserId = () =>{
//     console.log('hello From getUserId ')
//         return axios.get('http://localhost:8000/api/details',{
//             // headers:{Authorization:`Bearer ${data}` }
//             headers: {Authorization:`Bearer ${localStorage.usertoken}`}
        
//         })
//         .then(res=>{
//             console.log("hello From getUserId then",res)
//             return res.data
//         })
//         .catch(err=>{
//             console.log(err)
//         })
// }
