angular.module('sonyApp')
.service('singleService', function($http) {
    

    this.getProducts = function(id) {
        let url = '';
        switch(id){
            case "television":
            console.log("ANYTING")
                url = '/api/tvs';
                break;
            case "hometheaters":
                url = '/api/hometheaters';
                break;
            case "projectors":
                url = '/api/projectors';
                break;
            case "bluray":
                url = '/api/dvdplayers';
                break;
            case "headphones":
                url = '/api/headphones';
                break;
            case "cameras":
                url = '/api/cameras';
                break;
            case "cellphones":
                url = '/api/cellphones';
                break;
            case "camcorders":
                url = '/api/camcorders'
                break;
            // finish cases here homy

            

        }
        return $http({
            method: "GET",
            url: url
        })
            .then(function(response){
                console.log(response.data)
                
                let products = [];
                /*
                [
                    {
                        
                        description : [
                            "4K HDR Processor X1 Extreme for ultimate realism",
                            "Unprecedented contrast with Backlight Master Drive™",
                            "Amazing contrast with X-tended Dynamic Range PRO",
                            "Wide color gamut with TRILUMINOS Display"
                        ] 
                        id : 1 
                        image : "tv-1.jpg" 
                        led : true 
                        model : "Z9D LED 4k Ultra HD" 
                        price : "4499.99" 
                        product : "Z9D" 
                        productid : 1 
                        rating : "4.5" 
                        series : "XBR Z9D" 
                        smarttv : true                     }
                ]
                */
                for(let i = 0; i < response.data.length; i++){
                    if(products.length === 0) {
                        products.push(response.data[0])
                        products[0].description = [products[0].description]
                    }

                    else if(products[products.length-1].product === response.data[i].product) {
                       products[products.length-1].description.push(response.data[i].description)
                    }
                    else if(products[products.length-1].product !== response.data[i].product) {
                        products.push(response.data[i])
                        products[products.length-1].description = [products[products.length-1].description]
                    }
                }
console.log(products)
                return products;
            })
            .catch(function(error){
                return error
            })
    }
})