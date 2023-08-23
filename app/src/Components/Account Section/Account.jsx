import React from 'react';
import './account.css'

import {BiChevronRight, BiEdit} from 'react-icons/bi';
import {BsThreeDots} from 'react-icons/bs';

import user from '../../Assets/image.jpeg'


const Account = () => {
    return (
        <div className='account'>
            <div className="icons flex">
                <BiChevronRight className='icon'/>
                <BsThreeDots className='icon'/>
            </div>

            <div className="accountDetails">

                <div className="imageDiv">
                    <img src={user} alt="account user image" />
                    <span className='name'>Name</span>
                    <span className='position'>Student</span>
                    <button className="btn flex">
                        <BiEdit className='icon'/>
                        Edit Profile
                    </button>
                </div>

                <div className="hoursDiv">
                    <span className="title">Working Hours</span>
                    <div className="hoursCard flex">

                        <div className="right bg">
                            <span>Work Starts</span>
                            <h6>Time</h6>
                        </div>

                        <div className="left noBg">
                            <span>Work Ends</span>
                            <h6>Time</h6>
                        </div>

                    </div>
                </div>
                <h1 className='city'>City</h1>
                <span className="region">Country, Timezone</span>
            </div>
        </div>
    )
}

export default Account;