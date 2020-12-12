import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';

function Filters() {
    const state = useContext(GlobalState);
    const [categories] = state.categoriesAPI.categories;

    const [category, setCategory] = state.productsAPI.category;
    const [sort, setSort] = state.productsAPI.sort;
    const [search, setSearch] = state.productsAPI.search;

    const handleCategory = (e) => {
        setCategory(e.target.value);
        setSearch('');
    };

    return (
        <form className="row searchpro">
            <div className="col--12 col__md--3 col__lg__3">
                <select
                    name="category"
                    value={category}
                    onChange={handleCategory}
                >
                    <option value="">Tất cả sản phẩm</option>
                    {categories.map((category) => (
                        <option
                            value={'category=' + category._id}
                            key={category._id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="col--12 col__md--6 col__lg--6 mt-md--0 mt-lg--0 mt--1">
                <input
                    type="text"
                    value={search}
                    className="input-search"
                    placeholder="Bạn muốn tìm gì..."
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                />
            </div>

            <div className="col--12 col__md--3 col__lg__3 sort mt-md--0 mt-lg--0 mt--1">
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="">Mới nhất</option>
                    <option value="sort=oldest">Cũ nhất</option>
                    <option value="sort=-sold">Bán chạy nhất</option>
                    <option value="sort=-price">Giá: Cao -> Thấp</option>
                    <option value="sort=price">Giá: Thấp -> Cao</option>
                </select>
            </div>
        </form>
    );
}

export default Filters;
