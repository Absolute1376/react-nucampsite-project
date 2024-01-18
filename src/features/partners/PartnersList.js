import { useSelector } from 'react-redux';
import React from 'react';
import { Col, Row } from 'reactstrap';
import Partner from '../partners/Partner';
import { selectAllPartners } from './/partnersSlice'; // Replace with actual path
import Loading from '../../components/Loading';
import Error from '../../components/Error';


function PartnersList() {
    const partners = useSelector(selectAllPartners);

    const isLoading = useSelector((state) => state.partners.isLoading);
    const errMsg = useSelector((state) => state.partners.errMsg);

    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Col className='mt-4'>
            <Row>
                {partners.map((partner) => {
                    return (
                        <div className='d-flex mb-5' key={partner.id}>
                            <Partner partner={partner} />
                        </div>
                    );
                })}
            </Row>
        </Col>
    );


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