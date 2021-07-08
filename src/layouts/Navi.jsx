import React from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>

            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        name="Hire"
                    />
                    <Menu.Item
                        name="messages"
                    />

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button primary>Log In</Button>
                        </Menu.Item>

                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>

            </Menu>


        </div>
    )
}
