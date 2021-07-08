import React from 'react'
import CitiesList from "../components/SideBarComponents/FilterComponent/CitiesList";
import JobPositionsList from "../components/SideBarComponents/FilterComponent/JobPositionsList";
import { Dropdown, Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'

export default function Filters() {
  return (
    <div>
      <Container>
        <Menu vertical >

          <Dropdown item text='Şehirler'>
            <Dropdown.Menu>
              <Dropdown.Item>Istanbul</Dropdown.Item>
              <Dropdown.Item>Izmir</Dropdown.Item>
              <Dropdown.Item>Antalya</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


        </Menu>
      </Container>

      <Container>
        <Menu vertical>

          <Dropdown item text='İş Posizyonları'>
            <Dropdown.Menu>
              <Dropdown.Item>Java Developer</Dropdown.Item>
              <Dropdown.Item>C# Developer</Dropdown.Item>
              <Dropdown.Item>Yazılım Uzmanı</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


        </Menu>
      </Container>



    </div>
  )
}
