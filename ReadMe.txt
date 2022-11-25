Name -> Nachiket Madhusudan Khule
Email -> nachiketkhule.nk@gmail.com

Implement following functionaility using NodeJS/Java as middleware (use any front-end and database of your choice)

1. User should be able to register with username and password
2. User should be able to login
3. A logged in user should be able to upload a file. For every uploaded file, there should be a unique 6 digit code generated.
4. An uploaded file should be saved on the file system for future reterival.
5. A logged in user should be able to view list of uploaded files for his profile.
6. A logged in user should be able to premanantly remove files from his profile.
7. The uploaded file should be available for downloading using a URL, and the user should be asked to enter the correct 6 digit code before the file is available for download.

Deliverable - NodeJS project. Instruction steps to run the project. Share the code via cloud storage or github etc...


### app ###
->npm install react
->yarn
-> yarn add react-router-dom axios react-toastify
->yarn add @reduxjs/toolkit react-redux jspdf

cmd: npm start


### Server ###
->nodemon
->yarn
->yarn add mysql express crypto-js cors jsonwebtoken

cmd: nodemon server.



It was fun assignment, I was unable to use multer library. 
I used mysql as a database which made file storing little difficult 
we needed No SQL, mongodb or mongoose would be great but currently with the give time 
and my schedule i was unable to learn in few hours. 

It's very simple app but your feedback is appreciated so I can improve in those area.
also if possible do tell me the proper approch or library which I should Have Used.