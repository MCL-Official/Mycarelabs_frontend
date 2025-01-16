import React from 'react';
import { Modal, Toggle, SelectPicker } from 'rsuite';
import { Button, Card, CardBody, Col, Form, Input, Label, Row } from 'reactstrap';
import { size } from 'underscore';
const BannerModal = (props) => {
    return (
        <Modal open={props.open} onClose={() => props.close()} style={{ padding: '0' }} size='md'>
            {/* <Modal.Header>
                <Modal.Title></Modal.Title>
            </Modal.Header> */}

            <>
                <Row>
                    <Col
                        sm='12'
                        style={{ height: '33rem', marginTop: '0rem', paddingRight: '0rem', paddingLeft: '0rem' }}
                    >
                        <div
                            className='mb-3 font-weight-bold'
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <div style={{ height: '33rem' }}>
                                <img
                                    src='https://img.freepik.com/free-photo/high-angle-doctor-explaining-anatomy_23-2149389044.jpg?uid=R151986775&ga=GA1.1.1935502767.1713794465&semt=ais_hybrid'
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </div>
                            <div style={{ position: 'absolute', bottom: '2rem' }}>
                                <Button
                                    style={{
                                        marginTop: '2rem',
                                        backgroundColor: 'red',
                                        border: 'none',
                                        color: 'white',
                                    }}
                                >
                                    See More
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </>
        </Modal>
    );
};

export default BannerModal;
