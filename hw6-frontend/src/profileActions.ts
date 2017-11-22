import Promise from 'bluebird'
import fetch from 'isomorphic-fetch'
// export const  url = 'https://yg45-final.herokuapp.com'
export const url = 'http://localhost:3000'
// export const resource = (method, endpoint, payload = null) => {
//     // const options =  {
//     //     method,
//     //     credentials: <RequestCredentials> 'include',
//     //     headers: {
//     //         "Content-Type": "application/json"
//     //     },
//     //     body:''
//     // }

//     // if (payload) options.body = JSON.stringify(payload)

//     // return fetch(`${url}/${endpoint}`, options)
//     // .then(r => {
//     //     if (r.status === 200) {
//     //         return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
//     //         // return r.json()
//     //     } else {
//     //     // useful for debugging, but remove in production
//     //     console.error(`${method} ${endpoint} ${r.statusText}`)
//     //     throw new Error(r.statusText)
//     //     }
//     // })}
//     const options =  {
//         method,
//         credentials: <RequestCredentials> 'include',
//         headers: {
//           'Content-Type': <string>'application/json'
//         }
//       }
//       if (payload) options['body'] = JSON.stringify(payload)
    
//       return fetch(`${url}/${endpoint}`, options)
//         .then(r => {
//           if (r.status === 200) {
//             return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
//           } else {
//             // useful for debugging, but remove in production
//             console.error(`${method} ${endpoint} ${r.statusText}`)
//             throw new Error(r.statusText)
//           }
//         })
// }
export const resource = (method, endpoint, payload=null,isJson=true) => {
    const options =  {
        method,
        credentials: 'include',
    }
if (isJson) options['headers'] = {'Content-type':'application/json'}

  if (payload) options['body'] = isJson? JSON.stringify(payload) : payload


    return fetch(`${url}/${endpoint}`, options)
        .then(r => {
            if (r.status === 200) {
                return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
            } else {
                // useful for debugging, but remove in production
                //onsole.error(`${method} ${endpoint} ${r.statusText}`)
                 throw new Error(r.statusText)
            }
        })
}

export const login =(name, pass) =>{
    return resource('POST', 'login', {
        username: name,
        password: pass
    })
    .then(r => {
        console.log(r);
        return r;
    })
    .catch(e => {
        console.log(e);
        return e;
    });
}

export const logout = ()=>{
    return resource('PUT', 'logout')
        .then()
        .catch(e => {
          console.log(e)
        });

}
export const register=(user)=>{
    return resource('POST','register',{
        displayname :user.displayname,
        username :user.name,
        phone : user.phone,
        email : user.email,
        dob : user.birth,
        zipcode : user.zipcode,
        password : user.password
    })
    .then(r=>{
        return r
    })
    .catch(e=>{
        console.log(e)
    })
}

export const getDisplayname=()=>{
    return resource('GET','displayname')
    .then(r=>{
        return r
    })
    .catch(e=>{
        return e
    })
}
export const changeDisplayname = (displayname) =>{
    return resource('PUT','displayname',{
        displayname:displayname
    })
    .then(r=>{
        return r
    })
    .catch(e=>{
        return e
    })
}
export const getEmail = () =>{
    return resource('GET','email')
    .then(r=>{
        return r
    })
    .catch(e=>{
        return e
    })
}
export const changeEmail=(email)=>{
    return resource('PUT','email',{
        email:email
    })
    .then(r=>{
        return r
    })
    .catch(e=>{
        console.log(e)
    })
}

export const getPhone=()=>{
    return resource('GET','phone')
    .then(r=>{
        return r
    })
    .catch(e=>{
        console.log(e)
    })
}

export const changePhone=(phone)=>{
    return resource('PUT','phone',{
        phone:phone
    })
    .then(r=>{
        return r
    })
    .catch(e=>{
        console.log(e)
    })
}

export const getDob = () =>{
    return resource('GET','dob')
    .then(r=>{
       return r
    })
    .catch(e=>{
        console.log(e)
    })
}
export const getZipcode = () =>{
    return resource('GET','zipcode')
    .then(r=>{
        return r
    })
    .catch(e=>{
        console.log(e)
    })
}

export const changeZipcode=(zipcode)=>{
    return resource('PUT','zipcode',{
        zipcode:zipcode
    })
    .then(r=>{
       return r
    })
    .catch(e=>{
        console.log(e)
    })
}

export const getUserHeadline = ()=>{
    return resource('GET','headline')
    .then(r=>{
        return r;
    })
    .catch(e=>{
        return e
    })
}

export const getHeadlines=(users)=>{
    return resource('GET', `headlines/${users}`)
    .then(r=>{
        return r
    })
    .catch(e=>{
        return e
    })
}

export const changeHeadline=(headline)=>{
    return resource('PUT','headline',{
        headline:headline
    })
    .then(r=>{
        return r;
    })
    .catch(e=>{
        return e
    })
}

export const getUsername = () =>{
    return resource('GET','username')
    .then(r=>{
        return r;
    })
    .catch(e=>{
        return e;
    })
}


export const changePassword=(password)=>{
    return resource('PUT','password',{
        password:password
    })
    .then(res=>{
        return res
    })
    .catch(e=>{
        console.log(e)
    })
}

export const getAvatar=(users)=>{
    if(users != ''){
        return resource('GET',`avatars/${users}`)
        .then(res=>{
            return res
        })
        .catch(e=>{
            return e
        })
    }
    else{
        return resource('GET',`avatars`)
        .then(res=>{
            return res
        })
        .catch(e=>{
            return e
        })
    }
    
}

export const putAvatar=(file)=>{
    const fd = new FormData()
    fd.append('image',file)
    return resource('PUT','avatar',fd,false)       
    .then(response=>{
        console.log(response)
       return response
    })
    .catch(err=>{
       return err
    })
}

export const addArticle=(text,file)=>{
    const fd = new FormData()
    fd.append('image',file)
    fd.append('text',text)
    return resource('POST','article',fd,false)
    .then(res=>{
        return res
    })
    .catch(err=>{
        return err
    })
}

export const changeArticle = (changeInfo)=>{
    return resource('PUT','articles',{
        articleId:changeInfo.articleId,
        commentId :changeInfo.commentId,
        text : changeInfo.text
    })
    .then(res=>{
        return res
    })
    .catch(e=>{
        return e
    })
}

export const getArticles=(id)=>{
    if(id == -1){
        return resource('GET','articles')
        .then(res=>{
            return res
        })
        .catch(e=>{
            return e
        })
    }else{
        return resource('GET',`articles/${id}`)
        .then(res=>{
            return res
        })
        .catch(e=>{
            return e
        })
    }
}
// app.get('/following/:user?', getFollowing);
// app.put('/following/:user', addFollowing);
// app.delete('/following/:user', deleteFollowing);
export const getFollowing = (username)=>{
    if(username !=''){
        return resource('GET',`following/${username}`)
        .then(res=>{
            return res
        })
        .catch(e=>{
            return e
        })
    }else{
        return resource('GET',`following`)
        .then(res=>{
            return res
        })
        .catch(e=>{
            return e
        })
    }
   
    
}
export const addFollowing=(user)=>{
    return resource('PUT',`following/${user}`)
    .then(res=>{
        return res
    })
    .catch(e=>{
        return e
    })
}

export const deleteFollowing=(user)=>{
    return resource('DELETE',`following/${user}`)
    .then(res=>{
        return res
    })
    .catch(e=>{
        return e
    })
}

