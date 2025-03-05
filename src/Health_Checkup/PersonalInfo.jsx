import React, { useState } from "react";
import { Form, Button, ProgressBar, Container, Row, Col } from "react-bootstrap";
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
                                    <Form.Control type="text" placeholder="Full Name" className="personalInfoInput" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Form.Control type="email" placeholder="Email Address" className="personalInfoInput" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <Form.Control type="text" placeholder="Phone Number" className="personalInfoInput" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <Form.Control type="number" placeholder="Age" className="personalInfoInput" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <Form.Control type="text" placeholder="Weight (kg)" className="personalInfoInput" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Form.Select className="personalInfoInput">
                                        <option>Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Form.Select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Form.Control type="text" placeholder="Blood Group" className="personalInfoInput" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Form.Control type="text" placeholder="Address" className="personalInfoInput" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Any existing health condition?"
                                        className="personalInfoInput"
                                    />
                                </div>
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h4 className="fw-bold">Medical Information</h4>
                            <Row className="mt-4">
                                <Col xs={6} sm={4} md={3}> {/* Controls width */}
                                    <Form.Group controlId="sufferingFrom" className="mb-3 small-dropdown">
                                        <Form.Select className="small-select">
                                            <option>Seffering From</option>
                                            <option>Diabetes</option>
                                            <option>Hypertension</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <h5 className="mb-3 fw-bold">Health Parameters for Diabetes Patients</h5>

                            <Row className="mb-4">
                                <Col xs={12} sm={6} md={6} lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Select className="small-select">
                                            <option>Type Of Diabetes</option>
                                            <option>Type 1</option>
                                            <option>Type 2</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} sm={6} md={6} lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Select className="small-select">
                                            <option>Body Mass</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-4">
                                <Col xs={12} sm={6} md={6} lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Select className="small-select">
                                            <option>Existing Medication & Treatment</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} sm={6} md={6} lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Select className="small-select">
                                            <option>Blood Sugar Levels</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} sm={6} md={6} lg={6}>
                                    <Form.Group className="mb-5">
                                        <Form.Select className="small-select">
                                            <option>Symptoms & Complications</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} sm={6} md={6} lg={6}>
                                    <Form.Group className="mb-5">
                                        <Form.Select className="small-select">
                                            <option>Associated Health Conditions (Co-morbidities)</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
                                    <Form.Group controlId="additionalInfo" className="mb-3 mt-2 medicalTextArea">
                                        <Form.Control as="textarea" rows={7} placeholder="Describe your symptoms, health concerns, or any ongoing treatments..." />
                                    </Form.Group>
                                </Col>

                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <Form.Group controlId="fileUpload" className="mb-3 mt-2 p-0 text-center">
                                        {/* <Form.Label>Upload your report (PDF, up to 50MB)</Form.Label>
                                        <Form.Control type="file" accept=".pdf" style={{maxWidth:"80%"}}/> */}
                                        <div class="container d-flex justify-content-center align-items-center vh-50">
                                            <div class="col-md-6">
                                                <div class="upload-box" id="dropZone">
                                                    <i class="fa-solid fa-cloud-arrow-up text-dark"></i>
                                                    <p class="mt-2">Upload your report or drag & drop it here</p>
                                                    <small class="text-muted">Only PDF formats, up to 50MB</small>
                                                    <br />
                                                    <label class="btn btn-outline-dark mt-2">
                                                        Browse File <input type="file" id="fileInput" accept=".pdf" />
                                                    </label>
                                                    <p id="fileName" class="mt-2 text-muted"></p>
                                                </div>
                                            </div>
                                        </div>

                                    </Form.Group>
                                </Col>
                            </Row>


                            {/* <div className="row">
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
                            </div> */}
                        </>
                    )}

                    {step === 3 && (
                        <>
                            {/* <h4>Lifestyle & Dietry Information</h4>
                            <p>Dietary Preferences</p>
                            <Form.Check
                                type="checkbox"
                                label="I confirm that all information provided is correct."
                            /> */}

                            <Container className="p-4 border rounded shadow-sm bg-white">
                                <h4 className="mb-3">Lifestyle & Dietary Information</h4>

                                {/* Dietary Preferences */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Dietary Preferences</Form.Label>
                                    <Row>
                                        {["Vegetarian", "Vegan", "Non-Vegetarian"].map((item) => (
                                            <Col key={item} xs={4} className="mb-2">
                                                <Button variant="outline-success" className="w-100">
                                                    🥦 {item}
                                                </Button>
                                            </Col>
                                        ))}
                                    </Row>
                                </Form.Group>

                                {/* Allergies */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Allergies</Form.Label>
                                    <Row>
                                        {["Dairy", "Nuts", "Soy", "Gluten", "Shellfish"].map((item) => (
                                            <Col key={item} xs={4} md={2} className="mb-2">
                                                <Button variant="outline-success" className="w-100">
                                                    ⚠ {item}
                                                </Button>
                                            </Col>
                                        ))}
                                    </Row>
                                </Form.Group>

                                {/* Exercise Level */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Exercise Level</Form.Label>
                                    <Row>
                                        {["Sedentary", "Light", "Moderate", "Active", "Very Active"].map((item) => (
                                            <Col key={item} xs={4} md={2} className="mb-2">
                                                <Button variant="outline-success" className="w-100">
                                                    🏃 {item}
                                                </Button>
                                            </Col>
                                        ))}
                                    </Row>
                                </Form.Group>

                                {/* Sleep Hours & Stress Level */}
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Average Sleep Hours</Form.Label>
                                            <Form.Select>
                                                <option>Select hours</option>
                                                {["Less than 4", "4-6", "6-8", "More than 8"].map((item) => (
                                                    <option key={item}>{item}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Stress Level</Form.Label>
                                            <Row>
                                                {["Low", "Medium", "High"].map((item) => (
                                                    <Col key={item} xs={4} className="mb-2">
                                                        <Button variant="outline-success" className="w-100">
                                                            ⚖ {item}
                                                        </Button>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {/* Buttons */}
                                <Row>
                                    <Col className="text-start">
                                        <Button variant="success">Back</Button>
                                    </Col>
                                    <Col className="text-end">
                                        <Button variant="success">Submit</Button>
                                    </Col>
                                </Row>
                            </Container>
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
