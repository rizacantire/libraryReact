import React from "react";
import { Button, Menu } from 'semantic-ui-react'
import Categories from './Categories'

export default function Navi() {
  return (
    <div>
      <Menu size="huge">
        <Menu.Item
          name="home"
        />
        <Menu.Item
          name="messages"
        />

        <Menu.Menu position="right">
          <Categories/>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
