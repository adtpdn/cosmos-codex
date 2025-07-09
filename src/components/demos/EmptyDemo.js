import { Empty, Card, Button } from 'antd';

const EmptyDemo = () => (
    <Card>
        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
            height: 60,
            }}
            description={
            <span>
                Customize <a href="#API">Description</a>
            </span>
            }
        >
            <Button type="primary">Create Now</Button>
        </Empty>
    </Card>
);
export default EmptyDemo;
