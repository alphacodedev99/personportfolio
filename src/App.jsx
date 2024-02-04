import './App.scss';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import CaseStudie from './components/Studie/CaseStudie';
import WorkSection from './components/WorkSection/WorkSection';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<WorkSection />
			<CaseStudie />
			{/* testimonials */}
			{/* recentwork */}
			{/* getInTouchs */}
		</>
	);
}

export default App;
