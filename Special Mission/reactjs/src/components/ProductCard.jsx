import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductCard(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://localhost:8082/menu');
            setProducts(response.data);            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);


    return (
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <div className="col-4 mt-4">
                        <div className="card-product card">
                            <div className="card-product-container">
                            <img className="card-img-top" src={`/assets/images/${product.image}`} alt="Davidoff" />
                                <div className="card-body">
                                    <div className="row">
                                        <div className="card-rating col">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <div className="card-reviews col">
                                            0 reviews
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Rp. {product.price}</p>
                                </div>
                            </div>
                            
                            <div class="border-top"></div>
                            <div className="card-product-footer">
                                <button type="button" class="btn btn-dark"><i className="fa fa-shopping-cart"/> Add to cart</button>
                            </div>                    
                        </div>
                    </div>                   
                ))}
            </div>                          
        </div>
    )
}

export default ProductCard;