import '../css/Portfolio.css'
import FlashcardGeneratorApp from '../assets/Flashcard-Generator-App.png';
import AferisShoeStore  from '../assets/Aferis-Shoe-Store.png';
import ConferenceTicketGenerator  from '../assets/ConferenceTicketGenerator.png';
import SimpleCalculator  from '../assets/SimpleCalculator.png';
import BlogCardPreview  from '../assets/Blog-card-preview.png';
import MultiStepForm  from '../assets/MultiStepForm.png';
import ProductListCartComponent  from '../assets/ProductListCartComponent.png';
import BentoGridChallenge  from '../assets/BentoGridChallenge.png';
import RandomQuoteGenerator  from '../assets/RandomQuoteGenerator.png';
import { useState } from 'react';



export default function Portfolio({ isActive }) {

    const [selectedCategory, setSelectedCategory] = useState('All');

    const projects = [
        { id: 1, title: 'Flashcard Generator application', category: 'Web development', img: FlashcardGeneratorApp, url: 'https://flashcard-app-woad-zeta.vercel.app' },
        { id: 2, title: 'Aferis Shoe Store', category: 'Web development', img: AferisShoeStore, url: 'https://aferis-client.vercel.app/' },
        { id: 3, title: 'Conference Ticket Generator', category: 'Web development', img: ConferenceTicketGenerator, url: 'https://conference-ticket-generator-three.vercel.app' },
        { id: 4, title: 'SimpleCalculator', category: 'Web development', img: SimpleCalculator, url: 'https://simple-calculator-six-self.vercel.app' },
        { id: 5, title: 'Blog Card Preview', category: 'Web development', img: BlogCardPreview, url: 'https://blog-preview-card-three-theta.vercel.app' },
        { id: 6, title: 'Multi Step Form', category: 'Web development', img: MultiStepForm, url: 'https://multi-step-form-three-psi.vercel.app/' },
        { id: 7, title: 'Product List Cart Component', category: 'Web development', img: ProductListCartComponent, url: 'https://product-cart-wheat-two.vercel.app/' },
        { id: 8, title: 'Bento Grid Challenge', category: 'Web development', img: BentoGridChallenge, url: 'https://robinjames25.github.io/Bento-Grid-Challenge/' },
        { id: 9, title: 'Random Quote Generator', category: 'Web development', img: RandomQuoteGenerator, url: 'https://quote-generator-nine-mu.vercel.app/' },
    ]

    const filteredProjects = projects.filter(project =>
        selectedCategory === 'All' || project.category === selectedCategory
    )

    const categories = ['All', 'Web design', 'Applications', 'Web development'];

    const [isSelectOpen, setIsSelectOpen] = useState(false);

    return (
        <article className={`portfolio ${isActive ? 'active' : ''}`} data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>
        <section className="projects">
          <ul className='filter-list'>
            {categories.map(category => (
                <li key={category} className='filter-item'>
                    <button className={selectedCategory === category ? 'active' : ''} onClick={() => setSelectedCategory(category)}>{category}</button>
                </li>
            ))}
          </ul>
            {/* Mobile Filter Dropdown */}
            <div className={`filter-select-box ${isSelectOpen ? 'active' : ''}`}>
                <button className='filter-select' onClick={() => setIsSelectOpen(!isSelectOpen)}>
                    <div className='select-value'>{selectedCategory}</div>
                    <div className='select-icon'>
                        <ion-icon name="chevron-down" role="img" className="md hydrated" aria-label="chevron down">
                            <div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Chevron Down</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144" className="ionicon-fill-none"></path></svg></div>
                        </ion-icon>
                    </div>
                </button>
                <ul className='select-list'>
                    {categories.map(category => (
                        <li key={category} className='select-item'>
                            <button onClick={() => {
                                setSelectedCategory(category);
                                setIsSelectOpen(false);
                            }}>
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
          <ul className="project-list">
            {filteredProjects.map((project) => (
                <li key={project.id} className='project-item active'>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <figure className="project-img">
                            <div className="project-item-icon-box">
                                <ion-icon name="eye-outline" role="img" className="md hydrated" aria-label="eye outline"></ion-icon>
                            </div>
                            <img src={project.img} alt={project.title} loading="lazy" />
                        </figure>
                        <h3 className='project-title'>{project.title}</h3>
                        <p className='project-category'>{project.category}</p>
                    </a>
                </li>
            ))}
          </ul>
        </section>
      </article>  
    )
}