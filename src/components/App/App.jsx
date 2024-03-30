import Advantages from 'components/Advantages/Advantages';
import Community from 'components/Community/Community';
import Hero from 'components/Hero/Hero';
import RunningText from 'components/RunningText/RunningText';
import ServicesSection from 'components/ServicesSection/ServicesSection';

const App = () => {
  return (
    <>
      <main>
        <Hero />
        <RunningText />
        <Advantages />
        <ServicesSection />
        <Community />
      </main>
    </>
  );
};

export default App;
