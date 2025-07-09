import { Popover, Button, Card, Space } from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const PopoverDemo = () => (
    <Card>
        <Space wrap>
            <Popover content={content} title="Title">
                <Button type="primary">Hover me</Button>
            </Popover>
            <Popover content={content} title="Title" trigger="focus">
                <Button>Focus me</Button>
            </Popover>
            <Popover content={content} title="Title" trigger="click">
                <Button>Click me</Button>
            </Popover>
        </Space>
    </Card>
);

export default PopoverDemo;
