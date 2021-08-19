const Address = require('../models/Address');
const { hasNull } = require('../utils/hasNull');

module.exports = {

    async save(req, res) {
        if (!req.isAdmin)
          return res.status(403).send({ msg: 'forbidden' });
    
        if (hasNull(req.body, ['name']))
          return res.status(400).send({ msg: 'missing required data' });
    
          const {zip_code, street, number, state, city} = req.body;
    
        try {
            const result = await Address.create({zip_code, street, number, state, city});
          return res.status(200).send(result);
        } catch (error) {
          console.log(error);
          return res.status(500).send({ msg: 'internal server error' });
        }
    }
}   