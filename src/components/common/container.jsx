import React from 'react'

const Container = ({ children }) => {
      return (
            <div className="container max-w-[1200px] h-full mx-auto md:px-0 px-4">
                  {children}
            </div>
      );
}

export default Container

