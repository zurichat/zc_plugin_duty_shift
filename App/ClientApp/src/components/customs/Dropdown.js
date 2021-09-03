import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faClock } from '@fortawesome/free-solid-svg-icons'

const DropdownCustom = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={dropdownOpen}
                    style={{ color: '#fff' }}
                >
                    <FontAwesomeIcon icon={faClock} style={{ marginLeft: '1px', marginRight: '5px' }} />
                    Clock in
                    <FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: '5px' }} />

                </DropdownToggle>
                <DropdownMenu style={{}}>
                    <div style={{ alignItems: 'center', marginLeft: '3px', marginBottom: '1px' }} onClick={toggle}>Clock in</div>
                    <div style={{ width: '100%', backgroundColor: '#ccc', height: '1px' }}></div>
                    <div style={{ alignItems: 'center', marginLeft: '3px', marginBottom: '1px' }} onClick={toggle}>Clock Out</div>
                    <div style={{ width: '100%', backgroundColor: '#ccc', height: '1px' }}></div>
                    <div style={{ alignItems: 'center', marginLeft: '3px', marginBottom: '1px' }} onClick={toggle}>View Time</div>
                </DropdownMenu>
            </Dropdown>
        </>
    );
}

export default DropdownCustom;