import React from 'react';

const Loading = () => {
    return (
       <div className="furniture-container">
           <div className="furniture-row" style={{ margin: '16px 0px' }}>
            <div className="furniture-col">
                    <div style={{height: 229}} className="content-loader" />   
                  
            </div>
            <div className="furniture-col">
                    <div style={{height: 229}} className="content-loader" />   
                  
            </div>
        </div>
        <div className="furniture-row">
            <div className="furniture-col">
                    <div style={{height: 229}} className="content-loader" />   
                  
            </div>
            <div className="furniture-col">
                    <div style={{height: 229}} className="content-loader" />   
                  
            </div>
        </div>
           </div>
    );
};

export default Loading;