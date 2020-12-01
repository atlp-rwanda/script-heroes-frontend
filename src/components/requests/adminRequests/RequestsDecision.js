import React, {useState} from 'react'
import {
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem
} from 'reactstrap'

const RequestsDecision= () =>{
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm">
            <DropdownToggle caret>
                Decision 
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Choose Decision</DropdownItem>
                <DropdownItem>Accept</DropdownItem>
                <DropdownItem>Reject</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default RequestsDecision
