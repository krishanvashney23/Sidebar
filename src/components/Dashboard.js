import { useState, useEffect } from 'react';

const Dashboard = () => {

    return (
        <div>
            <div class="container padd-dash">
                <h3 className='head-dash'>Dashboard</h3>
                <div class="row g-4">
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className='dash_card'>
                            <div>
                                <h3 class="mb-0 mb-2    ">
                                    $55.6k
                                </h3>
                                <p class="text-muted">
                                    Wallet Balance
                                </p>
                                <span class="badge1">
                                    8.72%</span>
                            </div>
                            <div>
                               <div className='my_icon'>
                               <i className="ri-service-line"></i>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className='dash_card'>
                            <div>
                                <h3 class="mb-0 mb-2    ">
                                    $55.6k
                                </h3>
                                <p class="text-muted">
                                    Wallet Balance
                                </p>
                                <span class="badge2">
                                    8.72%</span>
                            </div>
                            <div>
                               <div className='my_icon2'>
                               <i className="ri-wallet-2-line"></i>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className='dash_card'>
                            <div>
                                <h3 class="mb-0 mb-2    ">
                                    $55.6k
                                </h3>
                                <p class="text-muted">
                                    Wallet Balance
                                </p>
                                <span class="badge1">
                                    8.72%</span>
                            </div>
                            <div>
                               <div className='my_icon3'>
                               <i className="ri-home-4-line"></i>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className='dash_card'>
                            <div>
                                <h3 class="mb-0 mb-2    ">
                                    $55.6k
                                </h3>
                                <p class="text-muted">
                                    Wallet Balance
                                </p>
                                <span class="badge2">
                                    8.72%</span>
                            </div>
                            <div>
                               <div className='my_icon4'>
                               <i className="ri-pin-distance-line"></i>
                               </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
