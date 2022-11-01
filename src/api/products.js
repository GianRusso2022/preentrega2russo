const products = [
    {
      "precio": 1000,
      "id": 0,
      "title": "Correa emoticon",
      "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/251-c4ea07f4867792d75915255658058160-640-01-a301a7dbbaac56bf2e15429947082066-480-0.png",
      "categoria": "correas",
    },
    {
      "precio": 1200,
      "id": 1,
      "title": "Correa Anana",
      "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/231-52ed1f46a894aad5fd15255655338964-320-01-43a63e40ead6eb4ab415323561265539-480-0.png",
      "categoria": "correas",
    },
    {
        "precio": 1200,
        "id": 2,
        "title": "Collar Anana",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/71-fed610253654e292f515255619432863-640-011-ff56d5c2035e0a17e715429951177461-480-0.png",
        "categoria": "collares",
      },
      {
        "precio": 1200,
        "id": 3,
        "title": "Collar anana",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/51-522d5b1ade147db62615255617464636-640-01-eb6ce6cd613217b00715429945497668-480-0.png",
        "categoria": "collares",
      },
      {
        "precio": 1200,
        "id": 4,
        "title": "Collar Emoticono",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/images11-1979a679f190e3b17615429947658175-480-0.jpg",
        "categoria": "collares",
      },
      
  ]

  export const getProducts = (categoria) =>
  new Promise((res, rej) => {
    const response = categoria
    ? products.filter((p) => p.categoria === categoria)
    : products;
    setTimeout(() => {
      res(response);
    }, 3000);
  });

  export const getProduct = (productId) => new Promise((res, rej) => {
    const response = products.find((product) => product.id == productId);
    setTimeout(() => {
      res(response);
    }, 3000);
  });

  