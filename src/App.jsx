import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";


function App() {
  return ( 
    
    
    <div>
      
      <Header/>
      <Section title="What is react?">
        <p>
          React is a JavaScript library used for building user interfaces.
          It allows developers to create reusable UI components and efficiently
          update and render components when data changes.
        </p>  
      </Section>

      <Section title="Benefits of react">
        <ul>
          <li>Component-based architecture</li>
          <li>Efficient rendering with the virtual DOM</li>
          <li>Reusable and maintainable code</li>
          <li>Strong community and ecosystem</li>
          <li>Declarative and predictable UI updates</li>
        </ul>
      </Section>

      <Section title="Helpful resources">
        <HelpfulResource
          label="React Official Documentation"
          link="https://react.dev/learn"
        />
        <HelpfulResource
          label="React Crash Course by Traversy Media"
          link="https://www.youtube.com/watch?v=bMknfKXIFA8"
        />
        <HelpfulResource
          label="freeCodeCamp React Course"
          link="https://www.freecodecamp.org/learn/front-end-development-libraries/react/"
        />
      </Section>

      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
