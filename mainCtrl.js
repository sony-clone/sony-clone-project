module.exports = {

     getProducts: function(req, res) {
         res.status(200).send(products)
     }
               .catch(function(error) {
               console.log(error);
               res.status(500).send(error)
               })






}