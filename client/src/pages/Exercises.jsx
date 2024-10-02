import React from 'react';
import '../styles/exercises.css';
import { useNavigate } from 'react-router-dom';

const Exercises = () => {
  const navigate = useNavigate();
  const goToGif = () => {
    navigate("/gif");
  };

  return (
    <div className="exercises-container">
      <h1>Some Exercises Around the World!</h1>
      <h2>Simple Exercise Suggestions for a Healthy Lifestyle</h2>

      <article className="exercise">
        <h1>Walking</h1>
        <h3>Impact on Your Health:</h3>
        <p>
          Walking offers many physical and mental health benefits and can be done by people
          of all ages and fitness levels. Regular walking can help boost mood and energy levels, 
          prevent certain diseases and conditions, burn calories, and even prolong your life.
          Walking is easy to fit into your routine, can be done anywhere, and requires nothing more than 
          a good pair of shoes. Studies indicate that walking reduces the symptoms of depression. 
          It may also help with anxiety and loneliness.
        </p>
        
        <h3>Impact on Your Body:</h3>
        <p>
          Walking is an approachable exercise that can help you maintain a healthy weight, whether or not 
          you have time for long walks. Walking is also one of the best exercises for losing weight. 
          It’s relatively easy to do, easy on the joints, it’s free, and you have to do it every day anyway.
        </p>
      </article>

      <article className="exercise">
        <h1>Jumping Rope</h1>
        <h3>Impact on Your Health:</h3>
        <p>
          Jumping rope can be a good form of cardio, which increases your heart rate and can help decrease your risk 
          of cardiovascular disease. Almost half of all adults have at least one form of heart disease. 
          Jumping rope is a terrific route to cultivating endurance because it involves both aerobic exercise and strengthening,
          making it an excellent, simple exercise to increase endurance.
        </p>
        
        <h3>Impact on Your Body:</h3>
        <p>
          Jumping rope is a full-body workout that can improve your cardio health and strengthen your muscles.
          When you increase your heart rate, you also burn more calories; someone may burn about 100 calories 
          jumping rope for only 10 minutes.
        </p>
      </article>

      <article className="exercise">
        <h1>Cycling</h1>
        <h3>Impact on Your Health:</h3>
        <p>
          Cycling is mainly an aerobic activity, which means that your heart, blood vessels, and 
          lungs all get a workout. You will breathe deeper, perspire, and experience increased body 
          temperature, which will improve your overall fitness level.
        </p>
        
        <h3>Impact on Your Body:</h3>
        <p>
          It's a good way to help you shed extra pounds. That's because you can burn an impressive number of calories while you're pedaling, especially if you cycle beyond a leisurely pace.
        </p>
      </article>

      <article className="exercise">
        <h1>Pilates</h1>
        <h3>Impact on Your Health:</h3>
        <p>
          Pilates (or the Pilates method) is a series of exercises inspired by calisthenics, yoga, and ballet.
          Pilates promotes mobility and strength of all the major muscle groups in the body in a balanced fashion,
          while also having a key focus on the deep core muscles. It improves posture, flexibility, strength,
          balance, and body awareness.
        </p>
        
        <h3>Impact on Your Body:</h3>
        <p>
          Unlike many high-intensity workouts, Pilates does not burn a significant amount of
          calories, but studies have found that it can reduce body weight.
          It’s also effective for losing and burning body and belly fat.
        </p>
      </article>

      <article className="exercise">
        <h1>Yoga</h1>
        <h3>Impact on Your Health:</h3>
        <p>
          Research shows that yoga can improve physical health by lowering inflammation, 
          aiding digestion, and increasing strength. It may also have mental health benefits, 
          including stress relief, improved self-confidence, curbing emotional eating, and creating a community 
          of support.
        </p>
        
        <h3>Impact on Your Body:</h3>
        <p>
          One of the little-known benefits of yoga is that it can greatly improve your body shape and 
          also help you lose extra fats.
        </p>
      </article>

      <article className="exercise">
        <h1>High-Intensity Interval Training (HIIT)</h1>
        <h3>Impact on Your Health:</h3>
        <p>
          "HIIT" may provide the same health benefits as regular exercise in less time, reducing body fat,
          heart rate, and blood pressure. It may even help improve blood sugar levels and insulin sensitivity.
        </p>
        
        <h3>Impact on Your Body:</h3>
        <p>
          It burns more calories and fat. It also causes metabolic adaptations that enable you to use more fat as fuel under a variety of 
          conditions, which can improve your athletic endurance as well as your fat-burning potential.
        </p>
      </article>

      <article className="exercise">
        <h1>Strength Training</h1>
        <h3>Impact on Your Health:</h3>
        <p>
          Strength training can improve your mood in many ways. The act of committing to a goal, building habits, 
          and sticking to a routine can help boost your mood. Endorphins released through strength 
          training can give you a jolt of feel-good chemicals that help you see the brighter side of life.
        </p>
        
        <h3>Impact on Your Body:</h3>
        <p>
          Strength training helps you become stronger. 
          According to researchers, gaining strength allows you to perform daily tasks much 
          easier, such as carrying heavy groceries or running around with your kids.
          Research has also found that it helps improve athletic performance in sports that 
          require speed, power, and strength. One study found that strength training may increase lean muscle mass.
        </p>
      </article>

      <section>
        <button type="button" onClick={goToGif}>Click Here for More Home Exercises</button>
      </section>
    </div>
  );
};

export default Exercises;