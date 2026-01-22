import '../css/Portfolio.css'
import FlashcardGeneratorApp from '../assets/Flashcard-Generator-App.png';
import AferisShoeStore  from '../assets/Aferis-Shoe-Store.png';
import ConferenceTicketGenerator  from '../assets/ConferenceTicketGenerator.png';
import project4  from '../assets/project-4.png';
import project5  from '../assets/project-5.png';
import project6  from '../assets/project-6.png';
import project7  from '../assets/project-7.png';
import project8  from '../assets/project-8.jpg';
import project9  from '../assets/project-9.png';
import { useState } from 'react';


export default function Portfolio({ isActive }) {

    const [selectedCategory, setSelectedCategory] = useState('All');

    const projects = [
        { id: 1, title: 'Flashcard Generator application', category: 'Web development', img: FlashcardGeneratorApp, url: 'https://flashcard-app-woad-zeta.vercel.app' },
        { id: 2, title: 'Aferis Shoe Store', category: 'Web development', img: AferisShoeStore, url: 'https://aferis-client.vercel.app/' },
        { id: 3, title: 'ConferenceTicketGenerator', category: 'Web development', img: ConferenceTicketGenerator, url: 'https://conference-ticket-generator-three.vercel.app' },
        { id: 4, title: 'Brawlhalla', category: 'Applications', img: project4 },
        { id: 5, title: 'DSM.', category: 'Web design', img: project5 },
        { id: 6, title: 'MetaSpark', category: 'Web design', img: project6 },
        { id: 7, title: 'Summary', category: 'Web development', img: project7 },
        { id: 8, title: 'Task Manager', category: 'Applications', img: project8 },
        { id: 9, title: 'Arrival', category: 'Web development', img: project9 },
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