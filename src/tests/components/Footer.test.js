import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'
import Footer from '../../components/Footer'

describe("Footer", ()=>{
  it("Should match snapshot", ()=>{
    const wrapper= shallow(<Footer/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})