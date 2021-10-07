import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'The Future of Mobility',
    content: "ฮ้อปสำหรับทุกการเดินทาง The Future of Mobility เช่ารถ Hatchback, Sedan, Executive car, SUV, Pick-up truck, Van, E-Scooter, E-Bike, EV และรถอีกหลากหลายรุ่นให้คุณเลือกเพื่อตอบสนองทุกไลฟ์สไตล์ของคุณ",
    content2:" สามารถเช่าและรับรถ 24 ชั่วโมงกว่า 1,000 จุดทั่วประเทศไทย"
  }
]

function AppHomecar() {
  return (
    <div id="homecar" className="homecarBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <p>{item.content2}</p>
                <br />
                <div className="btnHolder">
                  <a href="https://www.haupcar.com/"><Button type="primary" size="large">HUAP</Button></a>
                  <a href="https://www.haupcar.com/download"><Button size="large"><i class="fas fa-download"></i> Download</Button></a>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHomecar;