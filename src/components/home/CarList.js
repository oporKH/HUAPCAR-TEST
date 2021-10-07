import React from 'react';

import toyotaAltis from '../../assets/images/toyotaAltis.jpg';
import isuzuMU7 from '../../assets/images/isuzuMU7.jpg';
import nisanMarch from '../../assets/images/nisanMarch.jpg';
import mazda2 from '../../assets/images/mazda2.jpg';
import MGZS from '../../assets/images/MGZS.jpg';
import fommOne from '../../assets/images/fommOne.jpg';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;


function AppCarList() {
  return (
    <div id="carlist" className="block carlistBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Car Managament</h2>
          <a href="#createcar"> Create Car <i class="fas fa-plus"></i></a>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Toyota Altis" src={toyotaAltis} />}
            >
              <Meta title="Toyota Altis" />
              <span>License Plate (ทะเบียนรถยนต์) : 11กก111</span><br />
              <span>Make (ยี่ห้อรถยนต์) : Toyota</span><br />
              <span>Model (รุ่นรถยนต์) : Altis</span>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Isuzu MU7" src={isuzuMU7} />}
            >
              <Meta title="Isuzu MU7" />
              <span>License Plate (ทะเบียนรถยนต์) : 1กข123</span><br />
              <span>Make (ยี่ห้อรถยนต์) : Isuzu</span><br />
              <span>Model (รุ่นรถยนต์) : MU7</span>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Nisan March" src={nisanMarch} />}
            >
              <Meta title="Nisan March" />
              <span>License Plate (ทะเบียนรถยนต์) : 1กค432</span><br />
              <span>Make (ยี่ห้อรถยนต์) : Nisan</span><br />
              <span>Model (รุ่นรถยนต์) : March</span>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Mazda 2" src={mazda2} />}
            >
              <Meta title="Mazda 2" />
              <span>License Plate (ทะเบียนรถยนต์) : 2ขก111</span><br />
              <span>Make (ยี่ห้อรถยนต์) : Mazda</span><br />
              <span>Model (รุ่นรถยนต์) : Mazda 2</span>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="MG ZSEV" src={MGZS} />}
            >
              <Meta title="MG ZSEV" />
              <span>License Plate (ทะเบียนรถยนต์) : 2ขข222</span><br />
              <span>Make (ยี่ห้อรถยนต์) : MG</span><br />
              <span>Model (รุ่นรถยนต์) : ZSEV</span>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Fomm One" src={fommOne} />}
            >
              <Meta title="Fomm One" />
              <span>License Plate (ทะเบียนรถยนต์) : 2ขค123</span><br />
              <span>Make (ยี่ห้อรถยนต์) : Fomm</span><br />
              <span>Model (รุ่นรถยนต์) : Fomm One</span>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppCarList;