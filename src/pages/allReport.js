// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import AllReport from '@/components/AllReport';

const Dashboarrd = () => {
  const callNow = () => {
    window.location.href=`tel:${9632587410}`;
  };
  return (
    <div class="container-fluid side-padd">
    <div class="row main-parent">
        <div class="col_parent_class col-xl-2 col-lg-3 first_child_width">
            <Sidebar/>
        </div>
        <div class="col_parent_class col-xl-10 col-lg-9  second_child_width" >
            <Navbar/>
            <AllReport/>

        </div>
    </div>
    <div>
      
    </div>
</div>
  );
}

export default Dashboarrd;
