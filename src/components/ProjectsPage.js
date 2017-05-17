import React from 'react';
import Radium from 'radium';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/data';

class ProjectsPage extends React.Component {

  getStyles() {
    const wrapper = {
      position: "absolute",
      height: "65vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexWrap: "wrap",
      textAlign: "center",
      zIndex: "900",
      bottom: "5vh",
      paddingLeft: "3%",
      paddingRight: "3%",
    };

    return {
      wrapper,
    };
  }

  render() {
    const { wrapper } = this.getStyles();
    const { portrait } = this.props;

    return (
      <div style={wrapper}>
        {PROJECTS.map(project => {
            return (
              <ProjectCard
                project={project}
                portrait={portrait}
                key={project.id} />
            );
          })}
      </div>
    );
  }
}

export default Radium(ProjectsPage);
