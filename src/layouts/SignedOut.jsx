import React from 'react'
import { Button, Icon, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={props.signIn} animated color="green">
                    <Button.Content visible>Giriş Yap</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
                <Button animated color='grey' style={{ marginLeft: "0.3em" }}>
                    <Button.Content visible>Kayıt Ol</Button.Content>
                    <Button.Content hidden>
                        <Icon name='signup' />
                    </Button.Content>
                </Button>
            </Menu.Item>

        </div>
    )
}
