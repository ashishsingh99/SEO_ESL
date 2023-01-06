import React from 'react';

const Loader = () => {
    return (
        <div className='cmc' style={{position:"fixed", top:'0' , left:"0", height:'100vh', width:'100vw', backgroundColor:'rgb(12,12,33,0.1)' }}>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loader;