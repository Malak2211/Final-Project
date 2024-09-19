import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../styles/Home.css'; // Add your CSS styles here

const Home = () => (
  <div>
  {/* Hero Section */}
  <div className="hero-section" style={{ backgroundImage: `url('/image.jpg')`, height: '100vh' }}>
    <Container className="text-center text-white d-flex flex-column align-items-center justify-content-center h-100">
      <h1 className="display-4">WELCOME TO Wagapat Gpt</h1>
      <Button variant="outline-light" className="mt-3" href="#diet-nutrition">Read More</Button>
    </Container>
  </div>

  {/* Diet & Nutrition Section */}
  <Container id="diet-nutrition" className="my-5">
    <div className="content row align-items-center">
      <div className="col-md-8">
        <h1>Diet & Nutrition</h1>
        <p>Food and beverages provide the energy and nutrients you need to improve health, manage disease, and reduce the risk of disease.</p>
        <p>Find resources on nutrition to help you pay attention to what, when, how often, why, and how much you eat and drink, as well as help manage diseases and conditions such as diabetes, obesity, kidney disease, and others.</p>
      </div>
        <div className="col-md-4">
        <img
  alt="stomach"
  className="img-fluid"
  height="200"
  width="300"
  src="/stomach.jpg"
/>
        </div>
      </div>
      <h2>Balanced Diet and Nutritional Guidelines</h2>
      <section className="content">
        <p>Balanced Diet: A balanced diet includes the right proportions of carbohydrates, proteins, fats, vitamins, and minerals. It ensures the body gets all the essential nutrients for optimal functioning.</p>
        <p>Nutritional Guidelines: Many countries provide dietary guidelines, such as the USDA's "MyPlate" in the U.S. or the Mediterranean Diet, promoting whole grains, lean proteins, healthy fats, and plenty of fruits and vegetables.</p>
        <p>Macronutrients: Focus on the right balance of carbohydrates (45-65%), proteins (10-35%), and fats (20-35%) of total daily caloric intake.</p>
        <p>Micronutrients: Include vitamins (A, B, C, D, E, K) and minerals (iron, calcium, potassium), which are vital for metabolism, bone health, and disease prevention.</p>
      </section>
      <h2> Personalized Nutrition</h2>
      <section className="content">
        <p>Dietary Customization: Based on factors like age, gender, activity level, and personal health goals (e.g., weight loss, muscle building).</p>
        <p>Genetic and Metabolic Factors: Advances in nutrition science suggest that genetic predisposition and metabolic profiles affect how individuals respond to different diets. This has led to the growth of personalized diet plans and nutrigenomics (nutrition tailored to one's genetic makeup).</p>
      </section>
      <h2>Calorie Management</h2>
      <section className="content">
        <p>Calorie Counting: Managing caloric intake is crucial for weight management. Tools like calorie calculators and apps (MyFitnessPal, Cronometer) help track daily calorie consumption based on activity level and metabolism.</p>
        <p>Energy Balance: The key to weight maintenance is balancing calories consumed with calories burned (through physical activity and metabolism).</p>
        <p>Portion Control: Paying attention to portion sizes can help manage calorie intake without the need for drastic dieting.</p>
      </section>
      <h2>Popular Diet Plans</h2>
      <section className="content">
        <p>Ketogenic (Keto) Diet: High in fats, low in carbs, promoting ketosis (burning fat for energy). Effective for short-term weight loss but can be difficult to sustain.</p>
        <p>Intermittent Fasting: Cycling between eating and fasting periods (e.g., 16:8 method), which helps with calorie restriction and metabolic health.</p>
        <p>Paleo Diet: Focuses on consuming foods similar to what ancient humans ate, primarily meats, fruits, and vegetables, avoiding processed foods, grains, and legumes.</p>
        <p>Vegan and Vegetarian Diets: Plant-based diets that avoid or minimize animal products. These can be nutrient-dense but may require supplementation (e.g., vitamin B12, iron).</p>
        <p>Mediterranean Diet: High in fruits, vegetables, whole grains, olive oil, and lean proteins, often linked with heart health benefits.</p>
      </section>
      <h2>Role of Nutrition in Disease Prevention</h2>
      <section className="content">
        <p>Chronic Diseases: Poor diet can lead to chronic diseases like obesity, heart disease, diabetes, and certain cancers. A nutrient-rich diet, low in processed foods and sugars, can reduce the risk of these diseases.</p>
        <p>Gut Health: Fiber-rich diets (whole grains, fruits, vegetables) improve digestion and support healthy gut bacteria, which play a role in immune function and mental health.</p>
        <p>Mental Health: Nutrition impacts brain function. Omega-3 fatty acids (from fish), vitamins (like B-vitamins), and minerals (magnesium, zinc) support mood regulation and cognitive function.</p>
      </section>
      <h2>Hydration and Sleep</h2>
      <section className="content">
        <p>Water Intake: Proper hydration is essential for digestion, circulation, and temperature regulation. The general recommendation is 8 cups (about 2 liters) of water daily, but individual needs vary.</p>
        <p>Sleep and Nutrition: Sleep affects hunger-regulating hormones (ghrelin and leptin), and poor sleep can lead to increased appetite and unhealthy food choices. A balanced diet can promote better sleep quality.</p>
      </section>
      <h2>Global Food Movements</h2>
      <section className="content">
        <p>Sustainability in Diets: There is a growing movement toward sustainable eating practices, reducing food waste, and choosing locally sourced and organic foods. Plant-based diets are often promoted as environmentally friendly.</p>
        <p>Malnutrition and Global Health: In many developing countries, malnutrition remains a significant issue. Global organizations like WHO and UNICEF are working to promote better nutrition education and food security.</p>
      </section>
      <h2>Nutritional Supplements</h2>
      <section className="content">
        <p>Vitamin and Mineral Supplements: For those who have difficulty obtaining certain nutrients from diet alone, supplements (e.g., vitamin D, omega-3, iron) can help fill gaps.</p>
        <p>Protein Supplements: Commonly used by athletes and individuals looking to build muscle, protein powders (whey, plant-based) are popular.</p>
        <p>Caution: Over-reliance on supplements without proper diet can lead to imbalances or health issues, and whole foods are generally preferred.</p>
      </section>
    </Container>
  </div>
);


export default Home;
