import React from 'react';
import {
    Form,
    Input,
    Button,
    Row,
    Col,
    DatePicker,
    Upload,
    message,
  } from 'antd';


  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


function CreateCar() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div id="createcar" className="createcar">
            <div className="titleHolder">
                <h2>Create Car</h2>
            </div>
            <div className="container">
                <Row>
                    <Col span={12} offset={6}>
                        <Form
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}>
                            <Form.Item label="Date">
                                <DatePicker />
                            </Form.Item>
                            <Form.Item label="Upload Image">
                                <Upload {...props}>
                                    <Button> <i class="fas fa-upload"></i>&nbsp; Click to Upload</Button>
                                </Upload>
                            </Form.Item>
                            <Form.Item label="License Plate (ทะเบียนรถยนต์)">
                                <Input placeholder="License..."
                                    rules={[
                                    {
                                      required: true,
                                      message: 'Please input License Plate!',
                                    },
                                  ]}/>
                            </Form.Item>
                            <Form.Item label="Make (ยี่ห้อรถยนต์)">
                                <Input placeholder="Make..."/>
                            </Form.Item>       
                            <Form.Item label="Model (รุ่นรถยนต์)">
                                <Input placeholder="Model..." />
                            </Form.Item>
                            <Form.Item label="Note">
                                <Input.TextArea placeholder="Note..."/>
                            </Form.Item>
                            <Form.Item className="btnHolder">
                                <Button type="primary">
                                    Submit
                                </Button>&nbsp;&nbsp;
                                <Button>
                                    Reset
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default CreateCar;