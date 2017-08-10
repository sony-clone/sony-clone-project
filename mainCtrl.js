module.exports = {

     getProducts: function(req, res) {
         const db = req.app.get('db');
         db.get_all_tvs().then(function(response) {
         res.status(200).send(response)

     })
               .catch(function(error) {
               console.log(error);
               res.status(500).send(error)
               })
     },

    getUsers: function(req, res) {
         const db = req.app.get('db');
         db.get_all_users().then(function(response) {
         res.status(200).send(response)    
         })
               .catch(function(error) {
               console.log(error);
               res.status(500).send(error)
               })       
     },

     getCamcorders: function(req, res) {
         const db = req.app.get('db');
         db.get_all_camcorders().then(function(response) {
             res.status(200).send(response)
         })
               .catch(function(error) {
               console.log(error);
               res.status(500).send(error)
               })   
     },

     getHometheaters: function(req, res) {
         const db = req.app.get('db');
         db.get_all_hometheaters().then(function(response) {
             res.status(200).send(response)
         })
               .catch(function(error) {
               console.log(error);
               res.status(500).send(error)
               }) 
     }





}