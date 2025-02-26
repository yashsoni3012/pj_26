import React from 'react'
import '../Experience/Experience.css'
import exp1 from '../../assets/experience1.jpeg';
import exp2 from '../../assets/experience2.jpeg';
import exp3 from '../../assets/experience3.jpeg';
import exp4 from '../../assets/experience4.jpeg';

const Experience = () => {
    return (
        <div>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-md-12 experienceTitle text-center'>
                        <h1>Experience the Power of Ayurveda with Us</h1>
                    </div>
                </div>
                {/* content1 */}
                
                    <div className='row mt-5 d-flex justify-content-center'>
                        <div className='col-lg-5 experience-container'>
                            <img src={exp1} />
                        </div>

                        <div className='col-lg-7 text-center mt-5'>
                            <h2 className='experienceTitle'>Specialized Wellness Programs</h2>
                            <h3 className='experienceText'>Ayurveda-based detox, immunity-boosting, and
                                lifestyle improvement programs.
                                Focus on both preventive and curative healthcare.</h3>
                        </div>
                    </div>

                    {/* content2 */}
                    <div className='row mt-5 d-flex justify-content-center'>
                        <div className='col-lg-7 text-center mt-5'>
                            <h2 className='experienceTitle'>Trained Ayurveda Experts</h2>
                            <h3 className='experienceText'>Highly experienced practitioners with deep
                                knowledge of Ayurvedic treatments.
                                Certified professionals guiding patients through
                                traditional healing practices.</h3>
                        </div>

                        <div className='col-lg-5 experience-container'>
                            <img src={exp2} />
                        </div>
                    </div>
                    {/* content3 */}
                    <div className='row mt-5 d-flex justify-content-center'>
                        <div className='col-lg-5 experience-container'>
                            <img src={exp3} />
                        </div>

                        <div className='col-lg-7  text-center  mt-5'>
                            <h2 className='experienceTitle'>Proven & Time-Tested</h2>
                            <h3 className='experienceText'>Ayurveda, offers natural, time-tested remedies for overall wellness. Ayurveda treats the root cause, restores balance, prevents diseases. With pure herbs, Ayurveda promotes long-term healing, immunity, helping you live healthier, naturally.</h3>
                        </div>
                    </div>
                    {/* content4 */}
                    <div className='row mt-5 d-flex justify-content-center'>
                        <div className='col-lg-7 text-center  mt-5'>
                            <h2 className='experienceTitle'>Natural Therapies & Treatments</h2>
                            <h3 className='experienceText'>Treatments include herbal medicines,
                                Panchakarma detox, and oil massages.Use of
                                organic and chemical-free ingredients for healing.</h3>
                        </div>

                        <div className='col-lg-5 experience-container'>
                            <img src={exp4} />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Experience
