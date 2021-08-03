import React from 'react'
import { NavLink } from 'react-router-dom'
import {  Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C4E03AQGA1ZT4ENriUw/profile-displayphoto-shrink_200_200/0/1623877996659?e=1632960000&v=beta&t=1-ybNBK3ygJUxTSiCaOR6HjhBeamp3AyM2X_YyD-Ego" />
                <Dropdown pointing="top right" text="Özge">
                    <Dropdown.Menu>
                        <Dropdown.Item as={NavLink} to="/myInfo" text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>

            </Menu.Item>
        </div>
    )
}

