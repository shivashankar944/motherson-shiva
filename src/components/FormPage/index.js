import {Component} from 'react'

import ProjectPage from '../ProjectPage'
import './index.css'

const initialSlidesList = [
  {
    id: 1,
    name: 'Fashion Trendz',
    image:
      'https://res.cloudinary.com/dojn2omox/image/upload/v1704393205/vnkg5zfgctao7q1b8b6h.png',
    description:
      'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
    link: 'https://sherifashion.ccbp.tech',
  },

  {
    id: 2,
    name: 'Todo-list',
    image:
      'https://res.cloudinary.com/dojn2omox/image/upload/v1704396948/ceaguwhwati5jmn1iokq.png',
    description:
      'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
    link: 'https://shivasheritodos.ccbp.tech',
  },
]

class FormPage extends Component {
  state = {
    listDetails: initialSlidesList,
    projectName: '',
    projectLink: '',
    projectDescription: '',
  }

  onSubmittingForm = event => {
    event.preventDefault()
    const {projectName, projectLink, projectDescription} = this.state

    const random1 = Math.floor(Math.random() * 1000)
    const random2 = Math.floor(Math.random() * 100000)

    const newForm = {
      id: random1 + random2,
      name: projectName,
      link: projectLink,
      description: projectDescription,
      image:
        'https://res.cloudinary.com/dojn2omox/image/upload/v1704393205/vnkg5zfgctao7q1b8b6h.png',
    }

    this.setState(prevState => ({
      listDetails: [...prevState.listDetails, newForm],
      projectName: '',
      projectLink: '',
      projectDescription: '',
    }))
  }

  onChangingName = event => this.setState({projectName: event.target.value})

  onChangingLink = event => this.setState({projectLink: event.target.value})

  onChangingDescription = event =>
    this.setState({projectDescription: event.target.value})

  render() {
    const {
      listDetails,
      projectName,
      projectLink,
      projectDescription,
    } = this.state
    return (
      <div id="project" className="formPageDetails">
        <h1 class="add-project">Add Project</h1>
        <form onSubmit={this.onSubmittingForm}>
          <label htmlFor="forProjectN">Project Name</label>
          <br />
          <input
            type="text"
            id="forProjectN"
            value={projectName}
            placeholder="enter project name"
            onChange={this.onChangingName}
          />
          <br />
          <label htmlFor="forProjectL">Project Link</label>
          <br />
          <input
            type="text"
            id="forProjectL"
            placeholder="enter link"
            onChange={this.onChangingLink}
            value={projectLink}
          />
          <br />
          <label htmlFor="forProjectD">Description</label>
          <br />
          <textarea
            cols="30"
            rows="10"
            id="forProjectD"
            onChange={this.onChangingDescription}
            value={projectDescription}
            placeholder="enter decription"
          />
          <br />
          <div className="align-right">
            <button type="submit" className="addButtonDetails">
              Add
            </button>
          </div>
        </form>
        <img
          src="https://res.cloudinary.com/dojn2omox/image/upload/v1704392370/z0p5flr9o5k2jxb1tmri.png"
          alt="border"
        />
        <br />
        <h1 className="head-details-of-project">Projects</h1>
        <ul className="detailsOfProjects">
          {listDetails.map((eachItem, index) => (
            <ProjectPage eachItem={eachItem} key={eachItem.id} number={index} />
          ))}
        </ul>
      </div>
    )
  }
}

export default FormPage