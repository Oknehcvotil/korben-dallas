import Advantages from 'components/Advantages/Advantages';
import AppFooter from 'components/AppFooter/AppFooter';
import Community from 'components/Community/Community';
import Hero from 'components/Hero/Hero';
import Partners from 'components/Part/Partners';
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
        <Partners />
      </main>
      <AppFooter />
    </>
  );
};

export default App;
