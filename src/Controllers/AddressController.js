const Address = require('../models/Address');
const { hasNull } = require('../utils/hasNull');

module.exports = {

    async save(req, res) {
        // if (!req.isAdmin)
        //   return res.status(403).send({ msg: 'forbidden' });
    
        // if (hasNull(req.body, ['name']))
        //   return res.status(400).send({ msg: 'missing required data' });
        const {zip_code, street, number, state, city} = req.body;
    
        try {
            const result = await Address.create({zip_code, street, number, state, city});
          return res.status(200).send(result);
        } catch (error) {
          console.log(error);
          return res.status(500).send({ msg: 'internal server error' });
        }
    },

    async list(req, res){
      // if (!req.isAdmin)
        //   return res.status(403).send({ msg: 'forbidden' });
    
        // if (hasNull(req.body, ['name']))
        //   return res.status(400).send({ msg: 'missing required data' });
      try{
        const result = await Address.findAll();
        return res.status(200).send(result);
      }catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'internal server error' });
      }
      
    },
    async edit(req, res) {
      // if (!req.isAdmin)
      //     return res.status(403).send({ msg: 'forbidden' });

      // if (hasNull(req.params, ['id_brand']))
      // return res.status(400).send({ msg: 'missing required data' });
          
      const {id_address} = req.params
      const {name} = req.body;
      try {
      const address = await Category.findByPk(id_address);

      if(!address)
          return res.status(404).send({ msg: 'not found' });

      await address.update({ name });
        
      return res.status(200).send(address);
          
      } catch (error) {
          console.log(error);
          return res.status(500).send({ msg: 'internal server error' });
      }        

  },
    async delete(req, res) {
      //if (req.isAdmin)
        //return res.status(403).send({ msg: 'admin can not deleted herself' });
  
      try {
        const address = await Address.findByPk(req.params.id_address);
  
        if (!user)
          return res.status(404).send({ msg: 'not found' });
  
        await address.destroy()
        return res.status(200).send({ msg: 'address deleted' });
      } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'internal server error' });
      }
    }
}   