import './App.scss';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Recent from './components/Recent/Recent';
import CaseStudie from './components/Studie/CaseStudie';
import Testimonials from './components/Testimonials/Testimonials';
import WorkSection from './components/WorkSection/WorkSection';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<WorkSection />
			<CaseStudie />
			<Testimonials />
			<Recent />
			<Form />
			<Footer />
		</>
	);
}

export default App;
