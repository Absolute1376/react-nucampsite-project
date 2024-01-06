import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateCommentForm } from "../../utils/validateCommentForm";

const RATINGS = [1, 2, 3, 4, 5];

const ErrorText = ({ children }) => <p className='text-danger'>{children}</p>;

const CommentForm = ({ campsiteId }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values) => {
        const comment = {
            campsiteId: Number(campsiteId),
            rating: values.rating,
            author: values.author,
            text: values.commentText
        };
        console.log('comment:', comment);
        setModalOpen(false);
    }

    return (
        <div>
            <Button outline onClick={() => setModalOpen(true)} aria-label="Add Comment">
                <i className='fa fa-pencil fa-lg' />
            </Button>

            <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
                <ModalHeader toggle={() => setModalOpen(false)}>Add Comment</ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{ rating: '', author: '', commentText: '' }}
                        validate={validateCommentForm}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <FormGroup>
                                <Label for="rating">Rating</Label>
                                <Field name="rating" as="select" className="form-control">
                                    <option>Select...</option>
                                    {RATINGS.map(rating => (
                                        <option key={rating} value={rating}>{rating}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="rating" component={ErrorText} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="author">Your Name</Label>
                                <Field name="author" placeholder="Your Name" className="form-control" />
                                <ErrorMessage name="author" component={ErrorText} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="commentText">Comment</Label>
                                <Field name="commentText" as="textarea" rows="6" className="form-control" />
                            </FormGroup>

                            <Button type="submit" color="primary">Submit</Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default CommentForm;