import React from 'react';
import '../styles/exercises.css';
import { useNavigate } from 'react-router-dom';

const Exercises = () => {
  const navigate = useNavigate();
  const gotogif = () => {
    navigate('/gif'); 
  };

  return (
    <div className="exercises-container">
      <h1>Some Exercises Around the World!</h1>
      <h2>Simple Exercise Suggestions for a Healthy Lifestyle</h2>
      
      <section className="exercise">
        <h2>Walking</h2>
        <h3>Impact on Your Health</h3>
        <p>
          Walking offers many physical and mental health benefits and can be done by people
          of all ages and fitness levels. Regular walking can help boost mood and energy levels, 
          prevent certain diseases, burn calories, and even prolong your life. It is easy to fit 
          into your routine, can be done anywhere, and requires nothing more than a good pair of shoes.
          Studies indicate that walking reduces the symptoms of depression. It may also help with anxiety and loneliness.
        </p>
        
        <h3>Impact on Your Body</h3>
        <p>
          Walking helps maintain a healthy weight and is one of the best exercises for losing weight. 
          It’s easy on the joints and something we have to do every day.
        </p>
      </section>

      <section className="exercise">
        <h2>Jumping Rope</h2>
        <h3>Impact on Your Health</h3>
        <p>
          Jumping rope can increase your heart rate and help decrease your risk 
          of cardiovascular disease. It is an excellent exercise to cultivate endurance.
        </p>
        
        <h3>Impact on Your Body</h3>
        <p>
          Jumping rope is a full-body workout that can improve your cardio health and strengthen your muscles. 
          You may burn about 100 calories in just 10 minutes.
        </p>
      </section>

      <section className="exercise">
        <h2>Cycling</h2>
        <h3>Impact on Your Health</h3>
        <p>
          Cycling is mainly an aerobic activity, providing a workout for your heart, blood vessels, and lungs.
        </p>
        
        <h3>Impact on Your Body</h3>
        <p>
          It's a great way to shed extra pounds, burning a significant number of calories while cycling.
        </p>
      </section>

      <section className="exercise">
        <h2>Pilates</h2>
        <h3>Impact on Your Health</h3>
        <p>
          Pilates promotes mobility and strength of all major muscle groups in a balanced fashion, 
          with a focus on deep core muscles. It improves posture, flexibility, strength, and body awareness.
        </p>

        <h3>Impact on Your Body</h3>
        <p>
          While it doesn’t burn a significant number of calories, it can help reduce body weight and belly fat.
        </p>
      </section>

      <section className="exercise">
        <h2>Yoga</h2>
        <h3>Impact on Your Health</h3>
        <p>
          Research shows yoga can improve physical health by lowering inflammation, aiding digestion, 
          and increasing strength. It may also offer mental health benefits.
        </p>

        <h3>Impact on Your Body</h3>
        <p>
          Yoga can greatly improve body shape and help with weight loss.
        </p>
      </section>

      <section className="exercise">
        <h2>High-Intensity Interval Training (HIIT)</h2>
        <h3>Impact on Your Health</h3>
        <p>
          HIIT provides the same health benefits as regular exercise in less time, 
          improving blood sugar levels and insulin sensitivity.
        </p>

        <h3>Impact on Your Body</h3>
        <p>
          HIIT burns more calories and fat, enhancing athletic endurance and fat-burning potential.
        </p>
      </section>

      <section className="exercise">
        <h2>Strength Training</h2>
        <h3>Impact on Your Health</h3>
        <p>
          Strength training can boost your mood and help you perform daily tasks more easily.
        </p>

        <h3>Impact on Your Body</h3>
        <p>
          It improves athletic performance in sports that require speed, power, and strength.
        </p>
      </section>

      <section>
        <button type="button" onClick={gotogif}>Click Here for More Home Exercises</button>
      </section>
    </div>
  );
};

export default Exercises;
