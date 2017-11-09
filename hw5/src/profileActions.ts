export const  url = 'https://webdev-dummy.herokuapp.com'
export const resource = (method, endpoint, payload = null) => {
    const options =  {
      method,
      credentials: <RequestCredentials> 'include',
      headers: {
          'Content-Type': 'application/json'
      },
      body:''
    }
    if (payload) options.body = JSON.stringify(payload)

    return fetch(`${url}/${endpoint}`, options)
    .then(r => {
        if (r.status === 200) {
            // return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
            return r.json()
        } else {
        // useful for debugging, but remove in production
        console.error(`${method} ${endpoint} ${r.statusText}`)
        throw new Error(r.statusText)
        }
    })
}

export const login =(name, pass) =>{
    const users = [
        {name: 'yg45', password: '12345'}
    ]
    return this.resource('POST', 'login', {
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
    return this.resource('PUT', 'logout')
        .then()
        .catch(e => {
          console.log(e)
        });

}

export const fetchArticles = () => {
  return resource('POST', 'articles',{
      article:{
          author:'YG',
          text:'This is an article'
      }
  })
  .then((r) => {
    return r;
  })
  .catch(e => {
    console.log(e)
  })
}
export const fetchInfo= () => {
  return resource('POST', 'info',{
      info:{
          name:'YG',
          headline:'This is YG'
      }
  })
    .then((r) => {
        return r;
    })
    .catch(e => {
        console.log(e)
    })
}
export const updateHeadline =(newHeadline) =>{
  return this.resource('POST', 'update',{
      headline:newHeadline
  })
  .then((r) => {
      return r;
  })
  .catch(e => {
      console.log(e);
      
  })
}
export const resource_test= (info) => {
  return resource('POST', 'resource_test',{
      test:info
  })
  .then((r) => {
    console.log(r)
    return r;
  })
  .catch(e => {
    console.log(e)
  })
}

export const error= (info) => {
    return resource('POST', 'error',{
        error:info
    })
    .then((r) => {
        console.log(r)
        return r;
    })
    .catch(e => {
        console.log(e)
    })
  }

  export const correct= (info) => {
    return resource('POST', 'correct',{
        correct:info
    })
    .then((r) => {
        console.log(r)
        return r;
    })
    .catch(e => {
        console.log(e)
    })
  }

  export const navigate =() =>{
    return this.resource('POST', 'navigate', {
        cur_url:'main'
    })
    .then(r => {
        return r
    })
    .catch(e => {
        console.log(e);
        return e;
    });
}