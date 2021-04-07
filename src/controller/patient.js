const uuid = require('uuid');

module.exports = {
    show(req, res, next) {
        try { 
            console.log('Id:', req.params.id);            
            res.send(`Get patient Id: ${req.params.id} - Request Id: ${uuid.v4()}`);              
        } catch (e) {
            next(e);
        }
    },

    plan(req, res, next) {
        try { 
            console.log('Id:', req.params.id);            
            res.send(`Get active plan of patient Id: ${req.params.id} - Request Id: ${uuid.v4()}`);              
        } catch (e) {
            next(e);
        }
    }

};