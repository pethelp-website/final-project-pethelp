# Backend project for PetHelp

Database:
      sudo -u postgres psql
    
     create database pethelp;
    
     create user pethelp with encrypted password '#####';
    
     grant all privileges on database pethelp to pethelp;

    

-------------


the server is running on:
`localhost:3000`


To run the server:
`node server.js`
-------------
    
    	
        
# Endpoints available:

## Users:

* ### sign up (POST) [/user/sign-up](localhost:3000/user/sign-up "sign-up")

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

* ### sign in (POST) [/user/sign-in](localhost:3000/user/sign-in "sign-in")
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

 -------------

 ## Reports:

* ### get reports (GET) [/pet/report](localhost:3000/pet/report "report")
Request expected:
    ---
    
Response Expected:

    {
    "status": "OK",
    "status_description": "",
    "petsReported": [
        {
            "userName": "username1",
            "userPhoneNumber": "666 66 66 66",
            "userEmail": "username@email.com",
            "petType": "dog",
            "petRace": "golden",
            "petColor": "yellow",
            "petLocation": "Barcelona",
            "shelterName": "",
            "description": "It's OK",
            "photo": "img/pet1.jpg"
        }
    ]
} 
-------------

* ### post report (POST) [/pet/report](localhost:3000/pet/report "report")
Request expected:
    
    {
        "username": "username1", 
        "petType": "dog", 
        "petRace": "golden", 
        "petCoor": "yellow", 
        "location": "Barcelona", 
        "shelterName": "", 
        "description": "It's OK", 
        "photo": "img/pet1.jpg" 
    }
    
Response Expected:

    {
        "status": "OK",
        "description": ""
    }

 
