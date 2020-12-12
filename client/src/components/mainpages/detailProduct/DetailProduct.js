import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import ProductItem from '../utils/productItem/ProductItem';

function DetailProduct() {
    const params = useParams();
    const state = useContext(GlobalState);
    const [products] = state.productsAPI.products;
    const addCart = state.userAPI.addCart;
    const [detailProduct, setDetailProduct] = useState([]);

    useEffect(() => {
        if (params.id) {
            products.forEach((product) => {
                if (product._id === params.id) setDetailProduct(product);
            });
        }
    }, [params.id, products]);

    if (detailProduct.length === 0) return null;

    return (
        <>
            <div className="container">
                <div className="row rowgutter">
                    <div className="col--12 col__md--6 col__lg--6 detail">
                        <div className="border">
                            <img
                                src={detailProduct.images.url}
                                alt=""
                                className="px--5"
                            />
                        </div>
                    </div>
                    <div className="col--12 col__md--6 col__lg--6">
                        <div className="product__body t--l detail-content">
                            <div>
                                <h2>{detailProduct.title}</h2>
                            </div>
                            <div className="pt--5px">
                                <h6 className="inline-block">#ID:</h6>{' '}
                                {detailProduct.product_id}
                            </div>
                            <div className="price pt--5px">
                                <h6
                                    className="inline-block"
                                    style={{ color: '#333' }}
                                >
                                    Giá:{' '}
                                </h6>{' '}
                                ${detailProduct.price}
                            </div>
                            <div className="description pt--5px n--pl n--pr">
                                <h6>Mô tả: </h6>
                                {detailProduct.description}
                            </div>
                            <div className="pt--5px">
                                <h6>Chi tiết: </h6>
                                {detailProduct.content}
                            </div>
                            <p className="pt--5px">
                                <h6 className="inline-block">Đã bán:</h6>{' '}
                                {detailProduct.sold}
                            </p>
                            <div className="btn-addCart t--c n--ml">
                                <Link
                                    to="/cart"
                                    onClick={() => addCart(detailProduct)}
                                >
                                    Mua
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="mt--3">Sản phẩm liên quan</h2>
                <div className="row rowgutter">
                    {products.map((product) => {
                        return product.category === detailProduct.category ? (
                            <ProductItem key={product._id} product={product} />
                        ) : null;
                    })}
                </div>
            </div>
        </>
    );
}

export default DetailProduct;
