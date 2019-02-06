import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import Accordion from './Accordion.js';
import toJson from 'enzyme-to-json'


describe('Testing Accordion app', () => {
  // smoke test

  const sections = [{ title: 'Section 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
  { title: 'Section 2', content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!', },
  { title: 'Section 3', content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?', },]

  it('renders empty given sections', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('The component renders no sections as active by default', () => {
    const wrapper = shallow(<Accordion sections = {sections}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('The component opens a clicked section', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('li').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  
  it('only opens one section at a time', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('li').at(1).simulate('click')
    wrapper.find('li').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
});

/*
The component renders an empy li when the sections prop is not supplied
The component renders no sections as active by default
The component opens a clicked section
The component only opens the last section when multiple sections have been clicked.
*/