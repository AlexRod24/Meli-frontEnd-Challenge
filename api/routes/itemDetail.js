var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

/* Obtiene la data del item mediante su id de producto */
router.get('/:id', (req, res) => {
  
  var itemDetail;

  fetch(`https://api.mercadolibre.com/items/${req.params.id}`)
  .then(res => res.json())
  .then(data => {

        /* Convierte el número al formato monto */
        let parsePrice = (price) => {
            let stringPrice = price.toString().split(".")[0]
            var amount;
    
            if (stringPrice.length === 1 || 2 || 3) 
                  amount = stringPrice
    
              if (stringPrice.length === 4) 
                  amount = stringPrice.slice(0, 1) + '.' +  stringPrice.slice(1, 4)
    
                  if (stringPrice.length === 5) 
                    amount = stringPrice.slice(0, 2) + '.' +  stringPrice.slice(2, 5)
    
                      if (stringPrice.length === 6) 
                        amount = stringPrice.slice(0, 3) + '.' +  stringPrice.slice(3, 6)
    
                        if (stringPrice.length === 7) 
                          amount = stringPrice.slice(0, 1) + '.' +  stringPrice.slice(1, 4) + '.' +  stringPrice.slice(4, 7)
    
            return amount
        };

        /* Se genera la data del detalle de item según su id */
        itemDetail = [{
          author: {
            name: 'Alejandro',
            lastname: 'Rodriguez'
          },
          item: {
            id: data.id,
            title: data.title,
            price: {
              currency: data.currency_id,
              amount: parsePrice(data.price),
              decimals: (data.price).toString().split(".")[1]
            },
            picture: data.pictures[0].url,
            condition: data.condition,
            free_shipping: data.shipping.free_shipping,
            sold_quantity: data.sold_quantity,
            description: ''
          }
        }]
    }) /* Se realiza una 2da llamada a la descripción */
    .then(() => fetch(`https://api.mercadolibre.com/items/${req.params.id}/description`)
    .then(res => res.json())
    .then(data => {
    /* Obtiene la descripción del producto según su id y lo coloca en el itemDetail array object */
      for (var i in itemDetail) {
          itemDetail[i].item.description = data.plain_text
      }
    }) 
    .then(() => {
      res.send(JSON.stringify(itemDetail));
    })
    .catch(err => {
      console.log('Hubo un error en la búsqueda', err);
    }))
  });

module.exports = router;


