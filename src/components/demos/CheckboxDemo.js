import { Card, Checkbox, Space } from 'antd';

const CheckboxDemo = () => (
    <Card>
        <Space direction="vertical">
            <Checkbox>Single Checkbox</Checkbox>
            <Checkbox.Group 
                options={['Apple', 'Pear', 'Orange']} 
                defaultValue={['Apple']} 
            />
        </Space>
    </Card>
);

export default CheckboxDemo;
