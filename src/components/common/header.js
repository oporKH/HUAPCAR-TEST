import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
        <i class="fas fa-car"></i>
          <a href="#"><b>Car Managament</b></a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#homecar" title="Home" />
            <Link href="#carlist" title="Car List" />
            <Link href="#createcar" title="Create Car" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#homeCar" title="Home" />
              <Link href="#carlist" title="Car List" />
              <Link href="#createcar" title="Create Car" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;