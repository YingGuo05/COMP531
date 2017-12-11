API Introduction

auth.js

method      endpoints          function

post        '/register'        register, use username as the login account name, so in the register                                function,I will check the username that has been used or not. If it                                  is used, it will return 400 error and user can't register to                                        make sure the username is unique.

post        '/login'            login, use username login

put         '/logout'          logout

put         '/password'        changePassword, change the user's password

post        '/link'             link, link to another account by third party login user

post        '/unlink'          unlink, unlink the third party account


articles.js

method               endpoints          function
get                '/articles/:id?'   getArticle, fetch articles from database
post                '/article'         addArticle, add new article 
put                '/articles'        changeArticle, edit an article or edit comments or add                                               comments



profile.js

    method                endpoints                   function
    get             '/displayname/:user?'     getDisplayname
    put             '/displayname'           changeDisplayname
    get             '/headlines/:users?'        getHeadlines
    get             '/headline/:user?'        getUserHeadline
    put             '/headline'               changeHeadline
    get             '/email/:user?'             getEmail
    put             '/email'               changeEmail
    get             '/dob/:user?'            getDob

    get             '/phone/:user?'         getPhone
    put             '/phone'               changePhone

    get             '/zipcode/:user?'      getZipcode
    put             '/zipcode'            changeZipcode
    get             '/username'           getUsername
    get             '/avatars/:users?'     getAvatar
    put             '/avatar'             putAvatars
