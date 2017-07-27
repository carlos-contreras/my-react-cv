import React, { Component } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import sections from './objects/sections';
import './App.css';

const sectionCollections = sections.map(function(section, index) {
  return (<Section title={section.title} items={section.items} key={index} />);
});

class App extends Component {
  render() {
    return (
      <div className="cv-container">
        <Header title="Carlos Contreras" legend="Web Developer" />
        { sectionCollections }
      </div>
    );
  }
}

export default App;
