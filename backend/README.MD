# Backend project for PetHelp


the server is running on:
`localhost:3000`


To run the server:
`node server.js`
-------------
    
    	
        
# Endpoints available:
    
    

* ## sign up [/user/sign-up](localhost:3000/user/sign-up "sign-up")

Request expected:

    
    {
        "name": "name1",
        "email": "name1@email.com",
        "password": "password"

    }
Response Expected:

    {
        "jwtToken":	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjU4OTU1NDIyLCJleHAiOjE2NTg5NTkwMjJ9.xYTFDomtgFTfvQMpTl1FK_SzVzyVYTqDaN4tb0uNCfI",
        "isAuthenticated": true
    }
    
 -------------

* ## sign in [/user/sign-in](localhost:3000/user/sign-in "sign-in")
Request expected:
    
    {
        "email": "name1@email.com",
        "password": "password"

    }
    
Response Expected:

    {
        "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjU4OTU1NDIyLCJleHAiOjE2NTg5NTkwMjJ9.xYTFDomtgFTfvQMpTl1FK_SzVzyVYTqDaN4tb0uNCfI",
        "isAuthenticated": true
    }

 
