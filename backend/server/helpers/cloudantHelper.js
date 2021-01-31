const Cloudant = require("@cloudant/cloudant");
const configs = require("../configs/cloudantConfig");

/**
 * cloudant function helper
 * @module cloudantHelper
 * */

module.exports = function Constructor () {

    //connects to cloudant database
    return {
        "Client": (() => {
            try {
                return Cloudant(configs);
            } catch (e) {
                console.log(`Error initializing cloudant: ${e.message || e}`);
            }
        })(),
        /**
         * @method queryData
         * @async
         * @return {Array}
         */
        async queryData(dbName, queryObject = {}, fields = []) {
            return await this.Client.db.use(dbName).find({
                "selector": queryObject,
                "fields": fields
            });
        },
        /**
         * @method postData
         * @async
         * @return {Array}
         */
        async postData(dbName, document) {
            return await this.Client.db.use(dbName).insert(document);
        },
        /**
         * @method deleteData
         * @async
         * @return {Array}
         */
        async deleteData(dbName, documentId, documentRev) {
            return await this.Client.db.use(dbName).destroy(documentId, documentRev, (err) => {
                if (err) {
                console.log("err", err);
                return;
              }
              console.log('no err, deleted successfully')       
                });
        }
    }
};