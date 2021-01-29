Congrats on getting to the final step of the IBM Full Stack interview! For this part we will be having you add to an already functioning full stack web application.

Prompt: The webapp is meant to display a dashboard of all incoming planes at a certain airport. It is a CRUD (create, read, update, delete) webapp with only the create and read functionality implemented. We would like you to be creative and implement the update and delete functionality for the backend, frontend or both! It does not have to be a complex and fully functioning CRUD app but we would like to see what cool features you can add to this simple webapp.

Instructions: This webapp consists of a Node.js backend stored in the `backend` folder and a Vue.js frontend stored in the `frontend` folder. The webapp is using a Cloudant database that we have spun up and set up the connection for already. Here are the steps on how to test out the functioning webapp on your localhost:

1. Ensure you have these installed on your machine:
    Node.js: https://nodejs.org/en/
    Vue CLI: https://cli.vuejs.org/
    (VSCode is suggested but not necessary): https://code.visualstudio.com/

2. On the file `backend/server/configs/cloudantConfig.js` enter in the url and iamApiKey we provide for you in the email to have a connection to the Cloudant database.

3. On line 14 of the file backend/main.js rename the database_name variable to your last name in all lowercase. For John Doe line 14 should read

    - const database_name = "airport-doe";

4. Open up 2 terminals pointing to the root of the repository

5. In one terminal enter these commands to run the backend:

    - cd backend
    - npm install
    - node main.js

6. In the other terminal enter these commands to run the frontend:

    - cd frontend
    - npm install
    - npm run serve

7. Open up your browser and go to `http://localhost:8080` where the webapp should be running

You can now view all the planes and their status on the dashboard. You can also fill in the boxes and add a new plane to the dashboard.


Folder structure: 

Backend: For the backend we have the `backend/main.js` file where we have the `create` and `read` api endpoints already created. The `update` and `delete` endpoints can be added here. These api endpoint methods use the `backend/server/helpers/crudHelper.js` and the `backend/server/helpers/cloudantHelper.js` files as helpers to simplify the code. You are free to add to any of these files or create your own files to help you accomplish what you are trying to do.

Frontend: For the frontend we have the `frontend/src/App.vue` file that uses the various components within the `frontend/src/components` folder. We also have a `frontend/src/services/planeServices.js` file where we defined the `create` and `read` service functions for our frontend to use. You can add the `update` and `delete` service functions here for the frontend if you would like. The `frontend/src/components/Dashboard.vue` file is our main dashboard component that combines the other together. Feel free to change up or add to the components structure.


Here is an example of how the data is stored in the cloudant database:

{
  "_id": "dac3136e88aba2c03f0b26435713129c",
  "_rev": "1-05cedfa99136c3ea14b5724e7ad5e290",
  "planeObject": {
    "plane_number": "plane001",
    "departure": "JFK",
    "destination": "LAX",
    "status": "BOARDING"
  }
}

Each entry will have a unique "_id" and "_rev". The data for the plane will be stored in the "planeObject". Unfortunately we cannot give you access to the spun up database for you to manual modify and view the data.


Submission: Once testing your app please delete the `package-lock.json` and `node_modules` files in both the frontend and backend folders as these are not needed and compress your code and send us a zip of your code to `jpark@us.ibm.com`, `benjamin.siper@ibm.com` and `pallab.paul@ibm.com`. If you added any features that are not self explanatory feel free to explain your cool new feature in another .md in this repo or in your email.


Some helpful links and tips:

- Once again you can choose to add to just the backend, just the frontend or both. Also it is a suggestion to add an update and delete feature but you are free to add any features you want.

- Npm cloudant documentation: https://www.npmjs.com/package/@cloudant/cloudant

- The backend is coded to be on port `http://localhost:8081` so if you are just adding to the backend and you would like to test your api endpoints out you can use a command like this: `curl --location --request GET 'http://localhost:8081/api/planestatus/read'` on a terminal. Tools such as Postman can also help test your endpoints.

- The `update` endpoint is very similar to the `create` endpoint but you just need to include the "_id" and "_rev" fields in the json you are sending. https://stackoverflow.com/questions/31349447/how-do-i-update-a-doc-in-cloudant-using-cloudant-node-js

- This may be a helpful tutorial https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-vue-js-app-with-nodejs-bd86feec1a20




