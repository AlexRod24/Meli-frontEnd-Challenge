var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

/* Obtiene la data solicitada desde el Nav Search */
router.get('/', (req, res) => {

  fetch(`https://api.mercadolibre.com/sites/MLA/search?status=active&limit=4&q=${req.query.q}`)
  .then(res => res.json())
  .then(data => {
      
      /* Devuelve las categorias */
      let categories = data.filters[0].values[0].path_from_root.map(category => category.name);

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

      /* Genera el resultado de items */
      let items = data.results.map( item  => 
          ({
            id: item.id,
            title: item.title,
            price: {
              currency: item.currency_id,
              amount: parsePrice(item.price),
              decimals: (item.price).toString().split(".")[1]
          },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            address: item.address.state_name
          })
      );

      /* Envía la data final de todos los items*/
      const itemsResults = [{
            author: {
              name: 'Alejandro',
              lastname: 'Rodriguez'
            },
            categories: [...categories, data.query],
            items: [...items]
          }];  

        res.send(JSON.stringify(itemsResults));
        
  })
  .catch(err => {
    console.log('Hubo un error en la búsqueda', err);
  });
})

module.exports = router;