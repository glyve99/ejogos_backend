const Category = require('../models/Category');
const { hasNull } = require('../utils/hasNull');

module.exports = {

    async save(req, res) {
        // if (!req.isAdmin)
        //   return res.status(403).send({ msg: 'forbidden' });
    
        // if (hasNull(req.body, ['name']))
        //   return res.status(400).send({ msg: 'missing required data' });
    
          const {name} = req.body;
    
        try {
            const result = await Category.create({name});
          return res.status(200).send(result);
        } catch (error) {
          console.log(error);
          return res.status(500).send({ msg: 'internal server error' });
        }
    },
    async list(req, res){

      try{
        const result = await Category.findAll();
        return res.status(200).send(result);
      }catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'internal server error' });
      }
      
    }
}