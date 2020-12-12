import React from 'react';
import './footer.css';

/**
 * @author
 * @function Footer
 **/

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row rowgutter">
                    <div className="col--12">
                        <div className="d-flex justify-content-center">
                            <span>
                                © 2020 from{' '}
                                <a href="https://www.facebook.com/fvtien/">
                                    TienPham
                                </a>{' '}
                                &{' '}
                                <a href="https://www.facebook.com/linhss.luluss">
                                    KhanhLinh
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
