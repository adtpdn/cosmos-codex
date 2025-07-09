import { Tooltip, Button, Card, Space } from 'antd';

const TooltipDemo = () => (
    <Card>
        <Space wrap>
            <Tooltip title="prompt text">
                <span>Tooltip will show on hover.</span>
            </Tooltip>
            <Tooltip title="Thanks for using antd. Have a nice day!">
                <Button>Hover me</Button>
            </Tooltip>
        </Space>
    </Card>
);

export default TooltipDemo;
