import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loginImg from "../../../static/assets/images/auth/tempLogin.jpg";

export default function() {
    return (
        <div className='content-page-wrapper'>
            <div className='left-image' style={{background:"url("+ loginImg +") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }} />

            <div className='right-contents'>
                <div className='contact-bullet-points'>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon="phone" />
                        </div>
                        <div className='text'>1 (602)-602-6002</div>
                    </div>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon="envelope" />
                        </div>
                        <div className='text'>mccall.alan.dee@gmail.com</div>
                    </div>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>
                        <div className='text'>Glendale, AZ</div>
                    </div>
                </div>

            </div>
        </div>
    );
}