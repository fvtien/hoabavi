import React from 'react';
import BtnRender from './BtnRender';

function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {
    return (
        <div class="mt--1 col--12 col__md--4 col__lg--3">
            <div className="product">
                <div className="product__header">
                    {isAdmin && (
                        <input
                            type="checkbox"
                            checked={product.checked}
                            onChange={() => handleCheck(product._id)}
                        />
                    )}
                    <img src={product.images.url} alt="" />
                </div>
                <div className="product__body">
                    <h4 className="product__title">
                        <span title={product.title}>{product.title}</span>
                    </h4>
                    <div className="price">${product.price}</div>
                    <div
                        className="description"
                        style={{ overflow: 'hidden', height: '44px' }}
                    >
                        {product.description}
                    </div>

                    <BtnRender
                        product={product}
                        deleteProduct={deleteProduct}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
