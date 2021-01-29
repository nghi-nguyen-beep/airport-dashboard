const _cloudant = require("./cloudantHelper")();

/**
 * crud helper
 * @module crudHelper
 * */
module.exports = {
    /**
     * @method createPlaneStatus
     * @async
     * @return {Array}
     */
    createPlaneStatus(database, status) {
        return new Promise((resolve, reject) => {
            _cloudant.postData(
                database,
                status
            ).then(result => {
                resolve(result);
            }).catch(err => reject(err));
        });
    },
    /**
     * @method readPlaneStatus
     * @async
     * @return {Array}
     */
    readPlaneStatus(database) {
        return new Promise((resolve, reject) => {
            _cloudant.queryData(
                database,
                {
                    "_id": {
                        "$gt": "0"
                    },
                },
                [
                    "_id",
                    "_rev",
                    "planeObject"
                ]
            ).then(result => {
                resolve(result.docs);
            }).catch(err => reject(err));
        });
    },
    /**
     * @method updatePlaneStatus
     * @async
     * @return {Array}
     */
    updatePlaneStatus() {
    // Implement update logic here
        return false
    },
    /**
     * @method deletePlaneStatus
     * @async
     * @return {Array}
     */
    deletePlaneStatus() {
    // Implement delete logic here
        return false
    }
};
