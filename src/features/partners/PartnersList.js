import { useSelector } from 'react-redux';
import React from 'react';
import { Col } from 'reactstrap';
import Partner from '../partners/Partner';
import { selectAllPartners } from './/partnersSlice'; // Replace with actual path

function PartnersList() {
    const partners = useSelector(selectAllPartners);

    return (
        <Col className='mt-4'>
            {partners.map(partner => (
                <div className='d-flex mb-5' key={partner.id}>
                    <Partner partner={partner} />
                </div>
            ))}
        </Col>
    );
}

export default PartnersList;