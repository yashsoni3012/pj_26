// import React from 'react'
// import '../Benifits/Benifits.css'
// import leafImg from '../../assets/leaf.png'
// import benifitImg from '../../assets/benifitImg.jpg'
// import descriptionImg from '../../assets/description.jpg'

// const Benifits = () => {
//     return (
//         <div>
//             <div className='container'>
//                 <div className='row mt-5'>
//                     <div className='col-lg-12 text-center benifitTitle'>
//                         <h1>Benefits of Ayurvedic Medicine</h1>
//                     </div>

//                     <div class="container benefits-container mt-5">
//                         {/* Left Side Benefits  */}
//                         <div class="benefits w-100">
//                             <p> <h4><strong>Natural & Holistic Healing</strong></h4> <p>Treats the root cause, not just symptoms.</p> <img src={leafImg} alt="" /></p>
//                             <p> <h4><strong>Boosts Immunity</strong></h4>  <p>Strengthens with Guduchi & Ashwagandha.</p> <img src={leafImg} alt="" /></p>
//                             <p> <h4><strong>Reduces Stress & Anxiety</strong></h4>  Calms with Brahmi & Jatamansi. <img src={leafImg} alt="" /></p>
//                             <p> <h4><strong>Enhances Skin & Hair</strong></h4>  Glow with Aloe Vera & Bhringraj. <img src={leafImg} alt="" /></p>
//                             <p> <h4><strong>No Harmful Chemicals</strong></h4>  Made from pure, plant-based ingredients. <img src={leafImg} alt="" /></p>
//                         </div>

//                         {/* Center Card  */}
//                         <div class="center-card benifitImage-container">
//                             <img src={benifitImg} />
//                         </div>

//                         {/* Right Side Benefits  */}
//                         <div class="benefits w-100">
//                             <p><img src={leafImg} alt="" /> <h4><strong>Balances Body & Mind</strong></h4>  Restores harmony through Dosha balancing.</p>
//                             <p><img src={leafImg} alt="" /> <h4><strong>Improves Digestion</strong></h4>  Aids gut health with Triphala, Ajwain, Hing.</p>
//                             <p><img src={leafImg} alt="" /> <h4><strong>Supports Detoxification</strong></h4>  Removes toxins with Neem & Manjistha.</p>
//                             <p><img src={leafImg} alt="" /> <h4><strong>Manages Lifestyle Disorders</strong></h4>  Helps with diabetes, thyroid, joint pain naturally.</p>
//                             <p><img src={leafImg} alt="" /> <h4><strong>Sustainable & Time-Tested</strong></h4>  A 5,000-year-old science.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div class="green-line mt-5"></div>

//             <div className='mt-5'>
//                 <img src={descriptionImg} className='w-100'/>
//             </div>

//             <div class="green-line"></div>
//         </div>
//     )
// }

// export default Benifits


import React from 'react';
import '../Benifits/Benifits.css';
import centerImage from '../../assets/benifitImg.jpg'; // Replace with your actual image
import leafIcon from '../../assets/leaf.png'; // Replace with actual icons


const AyurvedicBenefits = () => {
    const benefits = [
        { title: "Natural & Holistic Healing", desc: "Treats the root cause, not just symptoms.", icon: leafIcon },
        { title: "Boosts Immunity", desc: "Strengthens the body’s defense with Guduchi & Ashwagandha.", icon: leafIcon },
        { title: "Reduces Stress & Anxiety", desc: "Calms the mind with Brahmi & Jatamansi.", icon: leafIcon },
        { title: "Enhances Skin & Hair Health", desc: "Promotes glow with Aloe Vera & Bhringraj.", icon: leafIcon },
        { title: "No Harmful Chemicals", desc: "Made from pure, plant-based ingredients.", icon: leafIcon },
        
        { title: "Balances Body & Mind", desc: "Restores harmony through Dosha balancing.", icon: leafIcon },
        { title: "Improves Digestion", desc: "Aids gut health with Triphala, Ajwain, and Hing.", icon: leafIcon },
        { title: "Supports Detoxification", desc: "Removes toxins with Neem & Manjistha.", icon: leafIcon },
        { title: "Manages Lifestyle Disorders", desc: "Helps with diabetes, thyroid, and joint pain naturally.", icon: leafIcon },
        { title: "Sustainable & Time-Tested", desc: "A 5,000-year-old science for long-term well-being.", icon: leafIcon }
    ];

    return (
        <div className="container">
            <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#174D29" }}>Benefits of Ayurvedic Medicine</h2>
            
            <div className="row align-items-center mt-5">
                {/* Left Side (First 5 Benefits) */}
                <div className="col-lg-3 ">
                    {benefits.slice(0, 5).map((benefit, index) => (
                        <div className="d-flex align-items-center mb-3" key={index}>
                            <div>
                                <h5 className="mb-1" style={{ color: "#174D29", fontWeight: "bold" }}>{benefit.title}</h5>
                                <p className="mb-0">{benefit.desc}</p>
                            </div>
                            <img src={benefit.icon} alt="" className="me-3" style={{ width: "40px", height: "40px" }} />
                        </div>
                    ))}
                </div>

                {/* Center Image */}
                <div className="col-lg-6 text-center">
                    <img src={centerImage} alt="Ayurvedic Treatments" className="img-fluid" style={{height:"550px",width:"400px"}}/>
                </div>

                {/* Right Side (Next 5 Benefits) */}
                <div className="col-lg-3">
                    {benefits.slice(5, 10).map((benefit, index) => (
                        <div className="d-flex align-items-center mb-3" key={index}>
                            <img src={benefit.icon} alt="" className="me-3" style={{ width: "40px", height: "40px" }} />
                            <div>
                                <h5 className="mb-1" style={{ color: "#174D29", fontWeight: "bold" }}>{benefit.title}</h5>
                                <p className="mb-0">{benefit.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AyurvedicBenefits;
