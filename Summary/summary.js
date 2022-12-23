
import React, { useState } from "react";
import './summary.css'
import Modal from '@mui/material/Modal';
import gmail from '../../assets/images/background/accept.png'
import message from '../../assets/images/background/Google logo.png'
import whatsapp from '../../assets/images/background/WhatsApp_Logo_Icon_1_.png'
import all from '../../assets/images/background/Group 48097102.png'





const Summary = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = (e) => {
        e.preventDefault()
        setOpen(true);
      };
      const handleClose = (e) => {
        e.preventDefault()

        setOpen(false);
      };
      

    return (
        <div>
            <div class="prescription-navbar">
               
            </div>

            <div class="prescription-body">

                <div class="prescription">
                    <form>
                        <div class="form first">
                            <div class="details patient">
                                <span class="title">Patient details</span>
                                <div class="fields">
                                    <div class="walkin-field">
                                        <div class="walkin">
                                            <div class="walkin2"><p>New</p></div>
                                            {/* <div style={{marginLeft:"400px",fontSize:"13px",fontWeight:"400",color:"#E3A55B"}}>New</div> */}
                                            <div class="txt">
                                                <h6 style={{ marginLeft: "10px", marginTop: "5px" }}>Akash Mandal</h6>
                                                <p style={{ marginLeft: "10px", fontSize: "13px", color: "#7D818B", fontWeight: "400" }}>Gender:</p>
                                                <p style={{ marginLeft: "70px", fontSize: "13px", color: "#616161", marginTop: "-36px", fontWeight: "400" }}>Male</p>
                                                <p style={{ marginLeft: "140px", fontSize: "13px", color: "#7D818B", marginTop: "-37px", fontWeight: "400" }}>Age: </p>
                                                <p style={{ marginLeft: "173px", fontSize: "13px", color: "#616161", marginTop: "-35px", fontWeight: "400" }}>23 </p>

                                                <p style={{ marginLeft: "230px", fontSize: "13px", color: "#7D818B", marginTop: "-35px", fontWeight: "400" }}>Phone:</p>
                                                <p style={{ marginLeft: "280px", fontSize: "13px", color: "#616161", marginTop: "-35px", fontWeight: "400" }}>+91-7488199311</p>
                                                <a href="#" class="walkin-btn">Walk In</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                            </div>


                        </div>
                        <div>
                            <a href="#" class="booking-details-btn">Booking Details</a>
                        </div>
                        <div>
                            <a href="#" class="view-prescription-btn">View Prescription</a>
                        </div>
                        <div>
                            <button class="share-prescription-btn" onClick={handleOpen}>Share Prescription</button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                            >
                                <div class="modal-box">
                                    <p class="modal-modal-title">
                                        Share Prescription
                                    </p>
                                    <button class="modal-btn">Share</button>
                                    <span class="dot"></span>
                                      <img src={message} class="modal-message" style={{height:"67px"}}/><span class="messages">Messages</span>
                                    <img src={gmail} class="modal-gmail" style={{height:"67px"}}/><span class="gmail">Gmail</span>
                                    <img src={whatsapp} class="modal-whatsapp" style={{height:"67px"}}/><span class="whatsapp">Whatsapp</span>
                                    <div class="all-modal" style={{height:"67px"}}>    
                                        <img src={all} class="modal-all"/><span class="all">All</span>
                                    </div>
                                


                                </div>
                            </Modal>
                        </div>


                        <hr style={{ marginTop: "-5px" }} />
                        <div>
                            <div class="services">Services</div>
                            <div class="consulation-fee">Consultation Fee</div>
                            <h6 class="rupees">₹ 700</h6>
                            <div>
                                <a href="#" class="edit-btn">Edit</a>

                            </div>
                            <div>
                                <a href="#" class="delete-btn">Delete</a>
                            </div>
                            <div class="add-new-services">Add new Services</div>
                            <div>
                                <input type="text" class="service-name" placeholder="Enter service name" />
                            </div>
                            <div>
                                <input type="text" class="price" placeholder="Price" />
                            </div>
                            <div>
                                <input type="text" class="gst" placeholder="GST(%)" />
                            </div>
                            <div>
                                <a href="#" class="save-btn">Save</a>
                            </div>
                        </div>
                        <hr style={{ marginTop: "-65px" }} />

                        <div>
                            <p class="title" style={{ paddingTop: "32px", marginTop: "-13px" }}>Invoice</p>
                            <div class="invoice">
                                <table>
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Service</th>
                                        <th>Total Charges</th>
                                    </tr>
                                    <tr>
                                        <td>01</td>
                                        <td>Diagnosis</td>
                                        <td>700/-</td>


                                    </tr>
                                    <tr>
                                        <td>02</td>
                                        <td>Diagnosis</td>
                                        <td>1000/-</td>

                                    </tr>


                                </table>
                                <hr />
                                <h6 style={{ marginLeft: "600px", marginTop: "-10px" }}>Grand Total : ₹ 1,700/- </h6>
                            </div>
                        </div>
                        <div class="payment-status">
                            <p class='title'>Payment Status</p>
                        </div>
                        <div>
                            <a href="#" class="unpaid-btn">Unpaid</a>

                        </div>
                        <input type="radio" value="collect cash" checked class="collect-cash" /><label for="collect cash" class="collect-txt">Collect Cash</label>
                    </form>
                    <hr style={{ marginTop: "103px" }} />
                    <hr style={{ marginTop: "258px" }} />
                    <p class="title" style={{ marginTop: "50px" }} >Mode of Payment</p>

                    <hr style={{ marginTop: "140px" }} />
                    <button class="save-btn-btn">Submit</button>






                </div>
            </div>
        </div>

    )
}

export default Summary