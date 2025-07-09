import { Card, Row, Col, Divider } from 'antd';

const style = { background: '#27ae6033', padding: '8px 0', textAlign: 'center', borderRadius: 4 };

const GridDemo = () => (
    <Card>
        <Divider orientation="left">Basic Grid</Divider>
        <Row>
            <Col span={24}><div style={style}>col</div></Col>
        </Row>
        <Row>
            <Col span={12}><div style={style}>col-12</div></Col>
            <Col span={12}><div style={style}>col-12</div></Col>
        </Row>
        <Row>
            <Col span={8}><div style={style}>col-8</div></Col>
            <Col span={8}><div style={style}>col-8</div></Col>
            <Col span={8}><div style={style}>col-8</div></Col>
        </Row>

        <Divider orientation="left">Grid Gutter</Divider>
        <Row gutter={16}>
            <Col className="gutter-row" span={6}><div style={style}>col-6</div></Col>
            <Col className="gutter-row" span={6}><div style={style}>col-6</div></Col>
            <Col className="gutter-row" span={6}><div style={style}>col-6</div></Col>
            <Col className="gutter-row" span={6}><div style={style}>col-6</div></Col>
        </Row>

        <Divider orientation="left">Column Offset</Divider>
        <Row>
            <Col span={8}><div style={style}>col-8</div></Col>
            <Col span={8} offset={8}><div style={style}>col-8</div></Col>
        </Row>
    </Card>
);

export default GridDemo;
