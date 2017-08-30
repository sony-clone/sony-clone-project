module.exports = {

     getTvs: function(req, res) {
         console.log('getTvs')
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
//best lookin
     getHometheaters: function(req, res) {
         const db = req.app.get('db');
         db.get_all_hometheater()
            .then(function(response) {
                res.status(200).send(response)
            })
            .catch(function(error) {
                console.log(error);
                res.status(500).send(error)
            }) 
     },

    getProjectors: function(req, res) {
         const db = req.app.get('db');
         db.get_all_projectors().then(function(response) {
             res.status(200).send(response)
         })
               .catch(function(error) {
               console.log(error);
               res.status(500).send(error)
               }) 
     },

     getDvdplayers: function(req, res) {
         const db = req.app.get('db');
         db.get_all_dvdplayers().then(function(response) {
             res.status(200).send(response)
         })
               .catch(function(error) {
               console.log(error);
               res.status(500).send(error)
               }) 
     },

     getHeadphones: function(req, res) {
         const db = req.app.get('db');
         db.get_all_headphones().then(function(response) {
             res.status(200).send(response)
         })
               .catch(function(error) {
               console.log(error);
               res.status(500).send(error)
               }) 
     },

     getCameras: function(req, res) {
         const db = req.app.get('db');
         db.get_all_cameras().then(function(response) {
             res.status(200).send(response)
         })
               .catch(function(error) {
               console.log(error);
               res.status(500).send(error)
               }) 
     },

     getCellphones: function(req, res) {
         const db = req.app.get('db');
         db.get_all_cellphones().then(function(response) {
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
     }



}