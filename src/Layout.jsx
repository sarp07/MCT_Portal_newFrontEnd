import React, { useState } from 'react';
import Navbar from './components/common/navbar';
import Footer from './components/common/footer';

const Layout = ({ children }) => {
      const [address, setAddress] = useState(null);
      return (
            <div className="app-container">
                  <Navbar address={address} />
                  <div className="content-container">
                        <div className="main-content">
                              {children}
                        </div>
                  </div>
                  <Footer />
            </div>
      );
};

export default Layout;