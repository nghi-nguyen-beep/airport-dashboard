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
    updatePlaneStatus(database, body) {
    // https://www.ibm.com/cloud/blog/cloudant-best-and-worst-practices-part-2
    // create another document from user
    // delete selected document
        return new Promise((resolve, reject) => {
            _cloudant.updateData(
                database,
                body.planeObject,
                body._id,
                body._rev
            ).then(result => {
                resolve(result);
            }).catch(err => reject(err));
        })
    },

    /**
     * @method deletePlaneStatus
     * @async
     * @return {Array}
     */
    deletePlaneStatus(database, documentId, documentRev) {
    // does not actually delete-- revises doc to be tombstone (adds deleted field)
    // can delete and replicate db but tbd
    return new Promise((resolve, reject) => {
        _cloudant.deleteData(
            database,
            documentId,
            documentRev
        ).then(result => {
            resolve(result);
        }).catch(err => reject(err));
    });
    }
};
