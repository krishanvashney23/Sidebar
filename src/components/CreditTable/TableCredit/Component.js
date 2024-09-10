
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, } from 'react';
import { useRef } from 'react';
// import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
// import CreditDropdown from '../CreditDropdown/Component';
// import "../../styles/component.css";

const Credit = () => {

  const options = [
    
  ];

  return (
    <>

      <div className='admin-credit_table'>
        <div className='admin-tabl '>
          <div className='table-responsive '>
            <table class="table table-bordered">
              <thead>
                <tr className='admin-m_ain'>
                  <th>Sr. no.</th>
                  <th>Total Credit</th>
                  <th>Used Credit</th>
                  <th>Rest Credit</th>
                  <th>Log</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>5000</td>
                  <td>1267</td>
                  <td>3733</td>
                  
                  <td>
                    <div className="admin-report_editdlt">
                    <Link href="/creditLog"> 
                    <button className="My-View">View</button>
                    </Link>
                      
                    </div>
                  </td>
                </tr>
               
              </tbody>
            </table>
          </div>
          <div className='admin-under_filters'>
          <div className='admin-under_head'>
              <p className='admin-items1 mb-0'>
                Items per page
              </p>
              <div className="mb-0">
                  <select name="cars" id="feald40" className="form-select">
                    
                    <option value="volvo" disabled selected>Select one</option>
                    <option value="saab"> 1 </option>
                    <option value="mercedes">2</option>
                    <option value="audi">3</option>
                  </select>
                </div>
              {/* <CreditDropdown options={options} placeholder="Select an option" /> */}
            </div>
            <div className='under_pagination'>
              <nav aria-label="Page navigation example">
                <ul className="pagination mb-0">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link active" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Credit;
