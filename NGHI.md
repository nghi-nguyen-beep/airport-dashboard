## Summary

I implemented the backend and frontend for the update and delete endpoints. 

For the frontend, they are seen `Planes.vue` as buttons and will communicate with the api endpoints via the `planesServices.js`. 

For the backend, my implementation can be seen in `backend/main.js` and `backend/server/helpers`. 

Additionally, I added a frontend/backend feature that allows you to search up the IATA codes (BOS - Boston, LAX - Los Angeles) if you input any domestic city (los angeles, new york, champaign, etc). It does a get request in the backend and queries what airports associate with the city. I used a txt file publicly available online, converted it into a csv, and kept a csv of the cities and IATA codes in `backend/server/helpers/iata_data`. Depending on what the user inputs, I made a for-loop in `backend/main.js` that goes through the file to gather all iata codes associated with that city, and return it as an object. 


## Additional Resources Used

### Backend

- https://github.com/apache/couchdb-nano#document-functions

- http://writings.nunojob.com/2012/07/How-To-Update-A-Document-With-Nano-The-CouchDB-Client-for-Node.js.html

- https://www.ibm.com/cloud/blog/cloudant-best-and-worst-practices-part-2

- https://stackoverflow.com/questions/26174289/reading-contents-of-csv-file-in-node-js

- http://www.airportcodes.org/

- https://stackabuse.com/reading-and-writing-csv-files-with-node-js/


### Frontend

- https://www.geeksforgeeks.org/how-to-shake-text-on-hover-using-html-and-css/

- https://vuejs.org/v2/guide/forms.html

- https://www.youtube.com/watch?v=Wy9q22isx3U

- https://vuejs.org/v2/guide/components.html

