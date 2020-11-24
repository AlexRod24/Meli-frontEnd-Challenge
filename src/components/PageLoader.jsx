import React from 'react';
import Loader from 'react-loader-spinner'

const PageLoader = () => {
  
    /* Config del Loader */
     return(
      <div className='page-loader_container'>
        <Loader
          className='page-loader'
          type="TailSpin"
          color="#FFE600"
          height={60}
          width={60}
          timeout={3000}
        />
      </div>
     )
 }

 export default PageLoader;

