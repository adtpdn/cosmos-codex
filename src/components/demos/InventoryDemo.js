import React, { useState } from 'react';
import { Button, Modal, Card } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import InventoryStandalone from './InventoryStandalone';

const InventoryDemo = ({ t }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Card>
                <p>This component demonstrates a full-page inventory management interface, launched in a wide modal.</p>
                <Button type="primary" icon={<SendOutlined />} onClick={showModal}>
                    Launch Inventory Demo
                </Button>
            </Card>

            <Modal
                open={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                closable={false}
                width="95%" // Make the modal wider
                style={{ top: 20, padding: 0 }}
                bodyStyle={{ padding: 0 }}
            >
                {/* The InventoryStandalone component is now rendered inside the modal */}
                <InventoryStandalone t={t} onClose={handleCancel} />
            </Modal>
        </>
    );
};

export default InventoryDemo;
