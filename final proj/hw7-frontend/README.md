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

Review

1. The surge URL:
    https://yr9-hw6-socialapp-frontend.surge.sh

Detailed comments on what you like about the frontend?
    The style is kind of ugly. I don't like this. But this button's color is great.

What features of the frontend appear to not function properly?
    nothing. 

What features seem to be missing from the frontend?
    nothing.

What functionality in the frontend was difficult or non-intuitive to use?
    Functions are good. Each button has repsonse.

Overall user experience score from 1 to 10 with 10 being the highest score.
    9


2. The surge URL:
    http://loving-fiction.surge.sh

Detailed comments on what you like about the frontend?
    The whole style about front end is clear and beautiful. The easily design for us to use.

What features of the frontend appear to not function properly?
    the comment area seems not right.

What features seem to be missing from the frontend?
    nothing is missed.

What functionality in the frontend was difficult or non-intuitive to use?
    nothing is difficult.

Overall user experience score from 1 to 10 with 10 being the highest score?
    9


3. The surge URL
    http://zh20-hw6-frontend.surge.sh/

Detailed comments on what you like about the frontend
    the avatar is cute. The page seems to simple without decoration. Though easy to use, it is 
    a little ugly.

What features of the frontend appear to not function properly
    everything is right 
What features seem to be missing from the frontend
    nothing missing
What functionality in the frontend was difficult or non-intuitive to use
    edit comment 
Overall user experience score from 1 to 10 with 10 being the highest score
    8

4. The surge URL
    https://ricebooklp.surge.sh

Detailed comments on what you like about the frontend
    The front end is so cute. I like this style. The buttons are so lovely and whole style is great.

What features of the frontend appear to not function properly
    nothing

What features seem to be missing from the frontend
    nothing

What functionality in the frontend was difficult or non-intuitive to use
    it is kind of hard for me to find the profile button

Overall user experience score from 1 to 10 with 10 being the highest score
    10

5. The surge URL
    https://yw68-hw6.surge.sh

Detailed comments on what you like about the frontend
    profile page is great

What features of the frontend appear to not function properly
    nothing

What features seem to be missing from the frontend
    nothing

What functionality in the frontend was difficult or non-intuitive to use
    I don't like the style about this front end.

Overall user experience score from 1 to 10 with 10 being the highest score
    8