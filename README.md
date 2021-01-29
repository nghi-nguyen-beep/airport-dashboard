Congrats on getting to the final step of the IBM Full Stack interview! For this part, we will have you add to an already-functioning full stack web application.


## Prompt

The webapp is meant to display a dashboard of all incoming planes at a certain airport. It is a CRUD (create, read, update, delete) webapp with only the create and read functionality implemented.

We would like you to be creative and implement the update and delete functionality for either the backend, frontend or both. If you have time, you can also tinker around with the look or design of the frontend.

The solution will be graded holistically on how you coded it and your attempts to learn the new technologies in the app.


## Setup

This webapp consists of a Node.js backend stored in the `backend` folder and a Vue.js frontend stored in the `frontend` folder. The webapp is using a Cloudant (NoSQL) database that we have spun up and set up the connection for already. 

Here are the steps on how to test out the functioning webapp on your localhost:

1. Ensure you have these installed on your machine:
   - Node.js: https://nodejs.org/en/
   - Vue CLI: https://cli.vuejs.org/
   - (VSCode is suggested but not necessary): https://code.visualstudio.com/

2. Fork this repo into your own git repository.

3. At the root of your repo create a `.env` file with the following variables:

```bash
CLOUDANT_URL=<url_from_email>
CLOUDANT_API_KEY=<api_key_from_email>
CLOUDANT_DB_NAME=airport-<your_last_name_all_lowercase>
```

Replace the `CLOUDANT_URL` and `CLOUDANT_API_KEY` values with the information we provided in your email. The `CLOUDANT_DB_NAME` value should be your last name in all lowercase. For John Doe it should read `CLOUDANT_DB_NAME=airport-doe`.

4. Open up 2 terminals pointing to the root of the repository.

5. In one terminal enter these commands to run the backend:

```bash
> cd backend
> npm install
> node main.js
```

6. In the other terminal enter these commands to run the frontend:

```bash
> cd frontend
> npm install
> npm run serve
```

7. Open up your browser and go to `http://localhost:8080` where the webapp should be running.

You can now view all the planes and their status on the dashboard. You can also fill in the boxes and add a new plane to the dashboard.


## Structure 

### Backend

For the backend we have the `backend/main.js` file where we have the `create` and `read` api endpoints already created. The `update` and `delete` endpoints can be added here. 

These api endpoint methods use the `backend/server/helpers/crudHelper.js` and the `backend/server/helpers/cloudantHelper.js` files as helpers to simplify the code. You are free to add to any of these files or create your own files to help you accomplish what you are trying to do.

### Frontend

For the frontend we have the `frontend/src/App.vue` file that uses the various components within the `frontend/src/components` folder. 

We also have a `frontend/src/services/planeServices.js` file where we defined the `create` and `read` service functions for our frontend to use. You can add the `update` and `delete` service functions here for the frontend if you would like. 

The `frontend/src/components/Dashboard.vue` file is our main dashboard component that combines the other components together. Feel free to change up or add to the components structure.

### Database

Here is an example of how the data is stored in the Cloudant database:

```json
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
```

Each entry will have a unique `"_id"` and `"_rev"`. The data for the plane will be stored in the `"planeObject"`. 

*Note: Unfortunately, for IBM security reasons, we cannot give you access to the database UI for you to manually modify and view the data.*


## Submission 

Once you are finished with your app, please make sure to delete any extraneous files and make sure your repository is able to be viewed.

Send us a link to your repository to `jpark@us.ibm.com`, `benjamin.siper@ibm.com` and `pallab.paul@ibm.com`. If you added any features that are not self-explanatory, feel free to explain your cool new feature in another .md file in this repo or in your email.


## Helpful Links and Tips

- Once again, you can choose to add to just the backend, just the frontend or both.

- NPM Cloudant documentation: https://www.npmjs.com/package/@cloudant/cloudant

- The backend is coded to be on port `http://localhost:8081`. If you are just adding to the backend and you would like to test your API endpoints, you can use a command like this: 
```curl --location --request GET 'http://localhost:8081/api/planestatus/read'```
on a terminal. Tools such as [Postman](postman.com) can also help test your endpoints.

- The `update` endpoint is very similar to the `create` endpoint but you just need to include the `"_id"` and `"_rev"` fields in the json you are sending. See https://stackoverflow.com/questions/31349447/how-do-i-update-a-doc-in-cloudant-using-cloudant-node-js

- This may be a helpful tutorial: https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-vue-js-app-with-nodejs-bd86feec1a20