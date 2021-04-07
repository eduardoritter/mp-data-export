const uuid = require('uuid');

module.exports = {
    show(req, res, next) {
        try {
            console.log('Id:', req.params.id);            
            res.send(`Get patient Id: ${req.params.id} - Request Id: ${uuid.v4()}`);        
        } catch (e) {
            next(e);
        }
    }
};