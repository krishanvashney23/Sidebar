
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, } from 'react';
import { useRef } from 'react';
// import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
// import CreditDropdown from '../CreditDropdown/Component';
// import "../../styles/component.css";

const Credit = () => {

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
    { label: 'Option 5', value: 'option5' },
    { label: 'Option 6', value: 'option6' },
    { label: 'Option 7', value: 'option7' },
    { label: 'Option 8', value: 'option8' },
    { label: 'Option 9', value: 'option9' },
    { label: 'Option 10', value: 'option10' },
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
                  <th>Profile</th>
                  <th>col 3</th>
                  <th>Credit Id</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Value</th>
                  <th>status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><img src="img/profile.jpg" className='admin-report_profile' /></td>
                  <td>Mr. Shyam</td>
                  <td>98999G</td>
                  <td>Description</td>
                  <td>27-05-2024</td>
                  <td>It is a long established </td>
                  <td>Aprove</td>
                  <td>
                    <div className="admin-report_editdlt">
                    <Link href="/edituser"> <button className="admin-reportedit_icon"><i className="ri-pencil-line"></i></button></Link>
                      <button className="admin-reportdlt_icon"><i className="ri-delete-bin-line"></i></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td><img src="img/profile.jpg" className='admin-report_profile' /></td>
                  <td>Mr. Shyam</td>
                  <td>98999G</td>
                  <td>Description</td>
                  <td>27-05-2024</td>
                  <td>It is a long established </td>
                  <td>Aprove</td>
                  <td>
                    <div className="admin-report_editdlt">
                      <button className="admin-reportedit_icon"><i className="ri-pencil-line"></i></button>
                      <button className="admin-reportdlt_icon"><i className="ri-delete-bin-line"></i></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td><img src="img/profile.jpg" className='admin-report_profile' /></td>
                  <td>Mr. Shyam</td>
                  <td>98999G</td>
                  <td>Description</td>
                  <td>27-05-2024</td>
                  <td>It is a long established </td>
                  <td>Aprove</td>
                  <td>
                    <div className="admin-report_editdlt">
                      <button className="admin-reportedit_icon"><i className="ri-pencil-line"></i></button>
                      <button className="admin-reportdlt_icon"><i className="ri-delete-bin-line"></i></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td><img src="img/profile.jpg" className='admin-report_profile' /></td>
                  <td>Mr. Shyam</td>
                  <td>98999G</td>
                  <td>Description</td>
                  <td>27-05-2024</td>
                  <td>It is a long established </td>
                  <td>Aprove</td>
                  <td>
                    <div className="admin-report_editdlt">
                      <button className="admin-reportedit_icon"><i className="ri-pencil-line"></i></button>
                      <button className="admin-reportdlt_icon"><i className="ri-delete-bin-line"></i></button>
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
