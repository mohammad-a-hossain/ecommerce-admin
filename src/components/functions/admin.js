import { backendUrl } from "../../lib";


export const adminsignin = user =>{
    return fetch(`${backendUrl}/signin`,{
        method:"POST",
        Headers:{
            Accept:'application/json',
            'Content-Type':'aplication/json'
        },
        body:JSON.stringify(user)
    }).then(res =>{
        return res.json()
    }).catch(err => {
        console.log(err)
    })

}

export const authenticate=(data, next)=>{
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt", JSON.stringify(data))
        next()
    }
}

// export const isAuth = () => {
//     if (window !== 'undefined') {
//         const cookieChecked = getCookie('token');
//         if (cookieChecked) {
//             if (localStorage.getItem('user')) {
//                 return JSON.parse(localStorage.getItem('user'));
//             } else {
//                 return false;
//             }
//         }
//     }
// };