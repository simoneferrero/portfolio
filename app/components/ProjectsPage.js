import React from 'react';
import Radium from 'radium';
import ProjectCard from './ProjectCard';

class ProjectsPage extends React.Component {

  getStyles() {
    const wrapper = {
      position: "absolute",
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexWrap: "wrap",
      textAlign: "center",
      zIndex: "900",
      padding: "5%",
      bottom: "2.5vh",
    };
    return {
      wrapper,
    };
  }

  getProjects() {
    const projects = [
      {
        id: "yahtzee",
        name: "Yahtzee Point Scorer",
        icon: "img/yahtzee.png",
        link: "yahtzee/index.html",
        description: `(Work in Progress)
          An easier way to count Yahtzee points.

          Technologies: ReactJS, Bootstrap, SASS`,
      },
      {
        id: "blackjack",
        name: "Super Awesome Blackjack",
        icon: "img/blackjack.png",//resize/reduce icons
        link: "blackjack/index.html",
        description: `(Work in Progress)
          Test your luck in this full Blackjack game!

          Technologies: AngularJS 1, jQuery, SASS`,
      },
      {
        id: "recipes",
        name: "EasyRecipes",
        icon: "img/easyrecipes.png",
        link: "easyrecipes/index.html",
        description: `Get the perfect dosage for your recipes.

          Technologies: AngularJS 1, jQuery, SASS`,
      },
      {
        id: "decision",
        name: "Decision Maker",
        icon: "img/decisionmaker.png",
        link: "decisionmaker/index.html",
        description: `No more indecision: Let it choose for you!

          Technologies: jQuery, CSS`,
      },
      {
        id: "drawing",
        name: "CSS Drawing",
        icon: "img/cssdrawing.png",
        link: "cssdrawing/index.html",
        description: `Early *artistic* test of my CSS skills.

          Technologies: CSS`,
      },
    ];

    return projects;
  }

  render() {
    const { wrapper } = this.getStyles();
    const { portrait } = this.props;
    const projects = this.getProjects();

    return (
      <div style={wrapper}>
        {projects.map(project => {
            return (
              <ProjectCard key={project.id} project={project} portrait={portrait}/>
            );
          })}
      </div>
    );
  }

}

export default Radium(ProjectsPage);
