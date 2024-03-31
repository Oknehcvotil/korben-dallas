import Advantages from 'components/Advantages/Advantages';
import AppBar from 'components/AppBar/AppBar';
import AppFooter from 'components/AppFooter/AppFooter';
import Community from 'components/Community/Community';
import Hero from 'components/Hero/Hero';
import Partners from 'components/Part/Partners';
import RunningText from 'components/RunningText/RunningText';
import ServicesSection from 'components/ServicesSection/ServicesSection';
import useResize from 'hooks/useResize';

const App = () => {
  const windowSize = useResize();
  const isDesktop = windowSize.width >= 1440;

  return (
    <>
      {isDesktop && <AppBar />}
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
