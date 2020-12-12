import React, { useContext } from 'react';
import { GlobalState } from '../../GlobalState';
import Filters from '../mainpages/products/Filters';
import Logo from './icon/logo.png';
import LogoAdmin from './icon/logoAdmin.png';
import Cart from './icon/shopping-cart.svg';
import Phone from './icon/phone.svg';
import Envelope from './icon/envelope.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Header() {
    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged;
    const [isAdmin] = state.userAPI.isAdmin;
    const [cart] = state.userAPI.cart;

    const logoutUser = async () => {
        await axios.get('/user/logout');

        localStorage.removeItem('firstLogin');

        window.location.href = '/';
    };

    const adminRouter = () => {
        return (
            <>
                <li className="navPages__item">
                    <Link to="/category" className="navPages__link">
                        Danh mục
                    </Link>
                </li>
                <li className="navPages__item">
                    <Link to="/create_product" className="navPages__link">
                        Thêm sản phẩm
                    </Link>
                </li>
            </>
        );
    };

    const loggedRouter = () => {
        return (
            <>
                <ul className="d-flex">
                    <li className="navUser__item">
                        <Link to="/history" className="navUser__link">
                            Lịch sử
                        </Link>
                    </li>
                    <li className="navUser__item">
                        <Link
                            to="/"
                            onClick={logoutUser}
                            className="navUser__link"
                        >
                            Đăng xuất
                        </Link>
                    </li>
                </ul>
            </>
        );
    };

    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col--12 col__md--6 col__lg--6">
                            <div className="phone-support">
                                <img src={Phone} alt="phone" />
                                Call us:{' '}
                                <a href="tel:0847978386">
                                    <b>+84-797-8386</b>
                                </a>
                            </div>
                            <div className="email-support">
                                <img src={Envelope} alt="email" />
                                Email:{' '}
                                <a href="mailto:fvtien@gmail.com">
                                    fvtien@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="col--12 col__md--6 col__lg--6">
                            <div className="navUser right d-flex align-items-center">
                                {isLogged ? (
                                    loggedRouter()
                                ) : (
                                    <ul className="d-flex">
                                        <li className="navUser__item">
                                            <Link
                                                to="/login"
                                                className="navUser__link"
                                            >
                                                Đăng nhập
                                            </Link>
                                        </li>
                                        <li className="navUser__item">
                                            <Link
                                                to="/register"
                                                className="navUser__link"
                                            >
                                                Đăng ký
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__stickey">
                <div className="header--center">
                    <div className="container">
                        <div className="row">
                            <div className="col--12 col__md--2 col__lg--2">
                                <Link to="/" className="header__logo">
                                    {isAdmin ? (
                                        <div>
                                            <img
                                                src={LogoAdmin}
                                                alt=""
                                                style={{ width: '48px' }}
                                            />
                                            Admin
                                        </div>
                                    ) : (
                                        <img
                                            src={Logo}
                                            style={{ width: '48px' }}
                                            alt="hoabavi"
                                        />
                                    )}
                                </Link>
                            </div>
                            <div className="col--12 col__md--9 col__lg--9">
                                <div className="quickSearch">
                                    <Filters />
                                </div>
                            </div>
                            <div className="col--12 col__md--1 col__lg--1">
                                {isAdmin ? (
                                    ''
                                ) : (
                                    <div className="cart right d-flex align-items-center mt-md--0 mt-lg--0 mt--1">
                                        <Link to="/cart">
                                            <img
                                                src={Cart}
                                                alt="shopping-cart"
                                                className="cart__icon"
                                            />
                                        </Link>
                                        <span className="cart__count">
                                            &nbsp;&nbsp;{cart.length}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <nav className="navPages">
                            <ul className="navPages__list d-flex justify-content-center align-items-center">
                                <li className="navPages__item">
                                    <Link to="/" className="navPages__link">
                                        {isAdmin ? 'Sản phẩm' : 'Shop'}
                                    </Link>
                                </li>
                                {isAdmin && adminRouter()}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
