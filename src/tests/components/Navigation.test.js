import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'
import Navigation from '../../components/Navigation'

describe("Footer",()=>{
  it("Should match snapshot", ()=>{
    const wrapper= shallow(<Navigation/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
