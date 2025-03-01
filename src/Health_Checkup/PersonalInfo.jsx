import React, { useState } from "react";
import { Form, Button, ProgressBar } from "react-bootstrap";
import "../Health_Checkup/PersonalInfo.css";

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    // Handle Next and Previous
    const handleNext = () =>
        setStep((prev) => (prev < totalSteps ? prev + 1 : prev));
    const handlePrev = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

    return (
        <div className="container my-5">
            <div className="card shadow-lg p-4 rounded-4">
                {/* Step Indicator */}
                <div className="progress-container" style={{ width: "100%" }}>
                    <div className="progress-bar-custom" style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                        {[1, 2, 3].map((num) => (
                            <div key={num} className="step">
                                <div className={`circle ${step >= num ? "active" : ""}`}>{num}</div>
                                {num !== 3 && (
                                    <div className={`line ${step > num ? "filled" : step === num ? "partial" : ""}`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Content */}
                <Form>
                    {step === 1 && (
                        <>
                            <h4><b>Personal Information</b></h4>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <Form.Control type="text" placeholder="Full Name" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Form.Control type="email" placeholder="Email Address" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <Form.Control type="text" placeholder="Phone Number" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <Form.Control type="number" placeholder="Age" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <Form.Control type="text" placeholder="Weight (kg)" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Form.Select>
                                        <option>Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Form.Select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Form.Control type="text" placeholder="Blood Group" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Form.Control type="text" placeholder="Address" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Any existing health condition?"
                                    />
                                </div>
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h4>Medical History</h4>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <Form.Control type="text" placeholder="Known Allergies" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Form.Control type="text" placeholder="Ongoing Medications" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Form.Control type="text" placeholder="Past Surgeries" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Form.Control type="text" placeholder="Chronic Diseases" />
                                </div>
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <h4>Review & Submit</h4>
                            <p>Confirm your details before submitting.</p>
                            <Form.Check
                                type="checkbox"
                                label="I confirm that all information provided is correct."
                            />
                        </>
                    )}

                    {/* Navigation Buttons */}
                    <div className="d-flex justify-content-between mt-4">
                        {step > 1 && (
                            <Button
                                variant="success"
                                className="text-center justify-content-center d-flex"
                                onClick={handlePrev}
                                style={{ width: "30%", display: "block", margin: "0 auto" }}
                            >
                                Back
                            </Button>
                        )}
                        <Button variant="success" onClick={handleNext} style={{ width: "30%", display: "block", margin: "0 auto" }}>
                            {step === totalSteps ? "Submit" : "Next"}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default MultiStepForm;
