import { useState, useEffect } from 'react';

const Dashboard = () => {

  return (
    <div>
        <div className='container-fluid'>
            <div className='row back dash_flx'>
            <div className='col-sm-6'>
                <p className='heading'>Projects</p>
            </div>
            <div className='col-sm-6 dash_flx2'>
            <button className="yog_bot" >Free Consultation</button>
            </div>

            </div>
        </div>
    </div>
  );
};

export default Dashboard;
