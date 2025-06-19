import React, { useState } from 'react';
import { User, Users } from 'lucide-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'BMI History Track',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const dataLine = {
  labels,
  datasets: [
    {
      label: 'BMI',
      data: [69,70,10,16,29,34,39,44,49,54,59,64], 
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};


const BMICalc = () => {

  const [gender, setGender] = useState('female');
  const [weight, setWeight] = useState(65);
  const [age, setAge] = useState(26);
  const [height, setHeight] = useState(170);
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [bmiExplanation, setBmiExplanation] = useState('');
  const [waistLine, setWaistLine] = useState(70);
  const [neckCircumference, setNeckCircumference] = useState(35);
  const [hipCircumference, setHipCircumference] = useState(95);
  const [bodyFat, setBodyFat] = useState(null);
  const [bodyChart, setBodyChart] = useState(
    {
    labels: ['Fat Mass', 'Bone Mass', 'Muscle Mass'],
    datasets: [
      {
        label: '% Body Composition',
        data: [50, 50, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  })

  const handleWeightChange = (increment) => {
    setWeight(prev => Math.max(0, prev + increment));
  };

  const handleWeightInput = (e) => {
    const value = parseInt(e.target.value) || 0;
    setWeight(Math.max(0, value));
  };

  const handleAgeChange = (increment) => {
    setAge(prev => Math.max(0, prev + increment));
  };

  const handleAgeInput = (e) => {
    const value = parseInt(e.target.value) || 0;
    setAge(Math.max(0, value));
  };

  const handleHeightChange = (e) => {
    setHeight(parseInt(e.target.value));
  };


  const bmiExplanations = {
    'Underweight' : 
    "You are currently under the recommended weight range for your height. Being underweight can sometimes indicate underlying nutritional deficiencies, a fast metabolism, or other health conditions that may need medical attention. It’s important to ensure you're getting enough essential nutrients to support your body's basic functions and energy needs. If you're unintentionally underweight, it may be helpful to speak with a healthcare provider or a nutritionist. A balanced diet rich in healthy fats, complex carbohydrates, and lean proteins can help you reach a healthier weight safely. Remember, health isn't just about weight—it's about feeling strong, energetic, and well-nourished.",
    'Normal Weight' :
    "Congratulations! Your BMI falls within the normal, healthy range. This suggests that your body weight is well-balanced for your height and that you're likely maintaining a healthy ratio of muscle and fat. Staying in this range is associated with a lower risk of chronic diseases like diabetes, heart disease, and high blood pressure. To keep up the good work, continue following a lifestyle that includes a balanced diet, regular physical activity, good sleep hygiene, and stress management. Health is a lifelong journey, not a one-time achievement—so keep supporting your body with healthy habits that you enjoy.",
    'Overweight' :
    "Your BMI is in the overweight range, which means your weight is slightly higher than the recommended level for your height. While this doesn't automatically mean you're unhealthy, it may indicate an increased risk of developing conditions like heart disease or type 2 diabetes, especially if weight gain is accompanied by other health concerns. Small, sustainable changes in your daily routine—like increasing physical activity, reducing processed food intake, or improving sleep quality—can make a big difference over time. Consider this a checkpoint, not a judgment. Every step toward balance counts, and your future health will thank you for it.",
    'Obese Class I':
    "Your BMI falls into the Obese Class I category. This level of body weight is associated with a higher risk of health complications such as high blood pressure, cardiovascular disease, joint problems, and metabolic conditions. However, it’s important to approach this with compassion and care rather than self-criticism. Many factors contribute to weight gain, including genetics, environment, stress, and hormonal imbalances. Reaching out to a healthcare provider can help you build a sustainable plan tailored to your needs. Focus on small, manageable changes that support your physical and mental well-being.",
    'Obese Class II':
    "You are currently in the Obese Class II category. At this level, your body weight is likely to be having a significant impact on your overall health and quality of life. It’s not just about numbers—carrying excess weight can strain your joints, heart, and immune system, and increase your risk for many chronic conditions. But remember: progress is possible, and you’re not alone. With the right guidance, such as from a medical professional or dietitian, many people successfully reduce health risks and improve their energy, confidence, and wellbeing. It’s never too late to start investing in your health—every positive step counts.",
    'Obese Class III' :
    "Your BMI places you in Obese Class III, sometimes referred to as morbid obesity. This classification indicates a serious health risk, as it greatly increases the chance of developing life-threatening conditions like heart disease, type 2 diabetes, and certain cancers. It can also impact your mobility, energy, and emotional well-being. This isn’t a verdict—it's a signal for support. Many people in this category have found hope and health through personalized treatment plans involving medical, nutritional, and psychological care. Reaching out for help is a strong and empowering first step. You deserve to feel strong, capable, and well."
  };

  /* calculating the BMI, and storing it into bmi variable */
  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const roundedBmi = bmi.toFixed(1);
    setBmiResult(roundedBmi);

    /* determining the category of BMI */
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal Weight';
    else if (bmi < 30) category = 'Overweight';
    else if (bmi < 35) category = 'Obese Class I';
    else if (bmi < 40) category = 'Obese Class II';
    else category = 'Obese Class III';
    
    setBmiCategory(category);
    setBmiExplanation(bmiExplanations[category]);

    {/* Body fat percentage calculation*/}
    const log10 = (value) => Math.log10(value);
    let bf = 0;

    try {
      if (gender === 'male') {
        bf = 86.010 * log10(waistLine - neckCircumference) - 70.041 * log10(height) + 36.76;
      }
      else {
        bf = 163.205 * log10(waistLine + hipCircumference - neckCircumference) - 97.684 * log10(height) - 78.387;
      }

      const bfFixed = parseFloat(bf.toFixed(1));
      setBodyFat(bfFixed);

      const leanBodyMass = weight - (bf / 100) * weight;
      const boneMass = gender === 'male' ? leanBodyMass * 0.15
      : leanBodyMass * 0.12;
      const muscleMass = leanBodyMass - boneMass;

      console.log({ leanBodyMass, boneMass, muscleMass });
      setBodyChart({
        labels: ['Fat Mass', 'Bone Mass', 'Muscle Mass'],
        datasets: [
        {
          label: '% Body Composition',
          data: [bf, boneMass, muscleMass],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(90, 224, 126, 0.2)',
        ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(90, 224, 126, 1)',
        ],
          borderWidth: 1,
      },
    ],
  })

    }
    catch {
      setBodyFat(null);
    }

    fetch ('http://localhost:8000/api/calculate-bmi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: '1',
        gender: gender,
        age: age,
        weight: weight,
        height: height,
        bmi: bmi
      })
    })

  };

/* Original Code: 
  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    alert(`Your BMI is: ${bmi.toFixed(1)}`);
  };
*/


  return (
    <div className="min-h-screen bg-[#A4B465]">

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 ">
        <div className="w-full max-w-4xl">
          {/* Main Card Container */}
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Left Side - Instructions and Gender Selection */}
              <div className="bg-[#626F47] rounded-2xl p-6 text-white text-center flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">Measure your BMI now!</h2>
                <p className="text-sm mb-8 opacity-90">
                  BMI, or Body Mass Index, is a measure that uses your height and weight to work out if your weight is healthy. BMI checks if you're underweight, overweight, or obese.
                </p>
                
                {/* Gender Selection */}
                <div className="flex justify-center space-x-8">
                  <button
                    onClick={() => setGender('female')}
                    className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                      gender === 'female' 
                        ? 'bg-yellow-400 text-green-800' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <User size={32} />
                    <span className="mt-2 font-medium">Female</span>
                  </button>
                  
                  <button
                    onClick={() => setGender('male')}
                    className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                      gender === 'male' 
                        ? 'bg-yellow-400 text-green-800' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Users size={32} />
                    <span className="mt-2 font-medium">Male</span>
                  </button>
                </div>
              </div>

              {/* Right Side - Input Controls */}
              <div className="bg-[#F5ECD5] rounded-2xl p-6">
                <div className="text-[#626F47] mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Current Gender: {gender.charAt(0).toUpperCase() + gender.slice(1)}
                  </h3>
                </div>

                {/* Weight Control */}
                <div className="mb-6">
                  <label className="block text-[#626F47] font-medium mb-2">Weight (kg)</label>
                  <div className="flex items-center justify-between bg-white rounded-xl p-4">
                    <button
                      onClick={() => handleWeightChange(-1)}
                      className="w-10 h-10 bg-[#626F47] text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-2xl font-bold text-[#626F47]">{weight}</span>
                    <button
                      onClick={() => handleWeightChange(1)}
                      className="w-10 h-10 bg-[#626F47] text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Age Control */}
                <div className="mb-6">
                  <label className="block text-[#626F47] font-medium mb-2">Age</label>
                  <div className="flex items-center justify-between bg-white rounded-xl p-4">
                    <button
                      onClick={() => handleAgeChange(-1)}
                      className="w-10 h-10 bg-[#626F47] text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-2xl font-bold text-[#626F47]">{age}</span>
                    <button
                      onClick={() => handleAgeChange(1)}
                      className="w-10 h-10 bg-[#626F47] text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Height Slider */}
                <div className="mb-6">
                  <label className="block text-[#626F47] font-medium mb-2">Height (cm)</label>
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-[#626F47]">{height}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="300"
                      value={height}
                      onChange={handleHeightChange}
                      className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #16a34a 0%, #16a34a ${height / 3}%, #bbf7d0 ${height / 3}%, #bbf7d0 100%)`
                        //* original code: background: `linear-gradient(to right, #16a34a 0%, #16a34a ${(height - 100) / 1.5}%, #bbf7d0 ${(height - 100) / 1.5}%, #bbf7d0 100%)` */
                      }}
                    />
                    <div className="flex justify-between text-xs text-[#626F47] mt-1">
                      <span>0cm</span> 
                      <span>300cm</span>
                    </div>
                  </div>
                </div>

                  {/* Waist line input */}
                <div className='mb-6'>
                  <label className='block text-[#626F47] font-medium mb-2'>Waist (cm)</label>
                  <div className='bg-white rounded-xl p-4'>
                    <input
                      type="number"
                      value={waistLine}
                      onChange={(e) => setWaistLine(parseInt(e.target.value) || 0)}
                      className='w-full text-center text-2xl font-bold text-[#626F47] outline-none'
                      min={0}
                    />
                  </div>
                </div>

                  {/* Neck circumference input */}
                <div className='mb-6'>
                  <label className='block text-[#626F47] font-medium mb-2'>Neck (cm)</label>
                  <div className='bg-white rounded-xl p-4'>
                  <input
                    type="number"
                    value={neckCircumference}
                    onChange={(e) => setNeckCircumference(parseInt(e.target.value) || 0)}
                    className='w-full text-center text-2xl font-bold text-[#626F47] outline-none'
                    min={0}
                  />
                  </div>
                </div>

                  {/* Hip circumference input (for females only) */}
                {gender === 'female' && (
                  <div className='mb-6'>
                  <label className='block text-[#626F47] font-medium mb-2'>Hip (cm)</label>
                    <div className='bg-white rounded-xl p-4'>
                      <input
                        type="number"
                        value={hipCircumference}
                        onChange={(e) => setHipCircumference(parseInt(e.target.value) || 0)}
                        className='w-full text-center text-2xl font-bold text-[#626F47] outline-none'
                        min={0}
                      />
                    </div>
                  </div>
  )}
              </div>
            </div>

            {/* Calculate Button */}
            <div className="text-center mt-8">
              <button
                onClick={calculateBMI}
                className="bg-[#626F47] text-white px-12 py-4 rounded-2xl text-lg font-semibold hover:bg-green-800 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
              >
                Check your BMI!
              </button>
            </div>
            {/* added this to display BMI in a different box */}
            {bmiResult && (
              <div className="mt-6 text-center">
                <div className='inline-block bg-white/70 text-[#626F47] px-6 py-4 rounded-2xl shadow-md'>
                  <p className='text-lg font-semibold'> Your BMI is: <span className='font-bold'>{bmiResult}</span></p>
                  <p className='text-md mt-2'>
                    Category: <span className='italic font-medium'>{bmiCategory}</span></p>
                    {bmiExplanation && (
                      <p className='text-sm mt-4 text-[#444]'>
                      {bmiExplanation}
                      </p>
                    )}

              <div className='w-1/2 mx-auto my-4'>
                <Doughnut data={bodyChart} />
              </div>

              {bodyFat && (
              <p className='text-md mt-2'>
                Estimated Body Fat: <span className='font=semibold'>{bodyFat}%</span>
              </p>
            )}

                </div>
              </div>
  )}
              <div className="mt-6 text-center w-full">
              <div className='inline-block bg-white/70 text-[#626F47] px-6 py-4 rounded-2xl shadow-md w-full'>
                <Line options={options} data={dataLine} />
              </div>
              </div>
            

          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #16a34a;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #16a34a;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default BMICalc;