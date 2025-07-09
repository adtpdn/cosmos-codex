import { Button, Card, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
        <Menu.Item key="1">Item 1</Menu.Item>
        <Menu.Item key="2">Item 2</Menu.Item>
    </Menu>
);

const DropdownDemo = () => (
    <Card>
        <Dropdown overlay={menu}>
            <Button>
                Hover me <DownOutlined />
            </Button>
        </Dropdown>
    </Card>
);

export default DropdownDemo;
