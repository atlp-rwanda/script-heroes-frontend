import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'
import Card from '../../components/Card'

describe("Service card", ()=>{
    const property={
        _id: "0",
        index: 0,
        description: "This is the service",
        title: "Test Service",
        img: "imgsrc"
    }
    it("Should match snapshot", ()=>{
        const wrapper= shallow(<Card key={property._id} 
          property={property}/>)
        expect(toJSON(wrapper)).toMatchSnapshot()
    })   
})


