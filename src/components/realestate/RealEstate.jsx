import React from 'react'
import './realestate.css';

const RealEstate = () => {
    return (
        <div className='RealAll'>
            <div className='Realestate'>
            <h2 className='RealHead'>We aspire to be Oman's most admired real <br />
            estate company</h2><br /><br />

            <div className='RealContent'>
                
                <div className='realcon'>45<p className='Realpara'>Years in Business</p></div>

                <div className='realcon'>4,000,000/sqf<p className='Realpara'>Constructed</p></div>

                <div className='realcon'>2,500+<p className='Realpara'>Units under managemenet</p></div>

                <div className='realcon'>OMR100,000,000<p className='Realpara'>Assets under management</p></div>

                <div className='realcon'>3,000<p className='Realpara'>Valuations per Year</p></div>

            </div>
            </div>
        </div>
    )
}

export default RealEstate