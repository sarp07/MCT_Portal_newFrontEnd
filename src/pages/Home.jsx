import React from 'react';
import Layout from '../Layout';
import Hero from '../components/mainPageComponents/hero';
import Process from '../components/mainPageComponents/process';
import Token from '../components/mainPageComponents/token';
import Foundation from '../components/mainPageComponents/foundation';

const Home = () => {
      return (
            <div>
                  <Layout>
                        <div className="home">
                              <Hero />
                              <Process />
                              <Token />
                              <Foundation />
                        </div>
                  </Layout>
            </div>
      )
}

export default Home
