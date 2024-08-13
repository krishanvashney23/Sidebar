import { useState, useEffect } from 'react';

const Dashboard = () => {

  return (
    <div>
       <div class="container py-5">
       
        <div class="row g-4">
            <div class="col-md-3">
                <div class="card text-center p-4">
                    <div class="card-title">18</div>
                    <div class="card-subtitle">Projects</div>
                    <small class="text-muted">2 Completed</small>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card text-center p-4">
                    <div class="card-title">132</div>
                    <div class="card-subtitle">Active Task</div>
                    <small class="text-muted">28 Completed</small>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card text-center p-4">
                    <div class="card-title">12</div>
                    <div class="card-subtitle">Teams</div>
                    <small class="text-muted">1 Completed</small>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card text-center p-4 productivity-card">
                    <div class="card-title">76%</div>
                    <div class="card-subtitle">Productivity</div>
                    <small class="text-muted">5% Increase</small>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
};

export default Dashboard;
