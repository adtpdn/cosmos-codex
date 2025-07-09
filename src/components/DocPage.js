import {
  Typography,
  Space,
  Input,
  Button,
  Divider,
} from 'antd';
import {
  EditOutlined,
  SaveOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import CodeBlock from './CodeBlock';

const { Title, Text } = Typography;
const { TextArea } = Input;

const DocPage = ({
    pageKey,
    content,
    isEditing,
    tempContent,
    handleContentChange,
    handleSave,
    handleCancelEdit,
    handleEdit,
    t,
    currentLang,
}) => {
    const DemoComponent = content.demo;

    // Guard against tempContent being null on initial render
    if (isEditing && !tempContent) {
        return null; 
    }

    return (
        <>
            <Space style={{ marginBottom: 16 }}>
                {isEditing ? (
                    <Input 
                        value={tempContent[currentLang][pageKey]} 
                        onChange={(e) => handleContentChange(pageKey, e.target.value)} 
                        style={{ width: 300 }} 
                    />
                ) : (
                    <Title id="overview" style={{ margin: 0 }}>{t[pageKey]}</Title>
                )}
                {isEditing ? (
                    <Space>
                        <Button type="primary" icon={<SaveOutlined />} onClick={handleSave}>Save</Button>
                        <Button icon={<CloseOutlined />} onClick={handleCancelEdit}>Cancel</Button>
                    </Space>
                ) : (
                    <Button type="text" icon={<EditOutlined />} onClick={handleEdit} />
                )}
            </Space>

            {isEditing ? (
                <>
                    <TextArea 
                        rows={15} 
                        value={tempContent[currentLang][`${pageKey}Description`]} 
                        onChange={(e) => handleContentChange(`${pageKey}Description`, e.target.value)} 
                    />
                    <Text type="secondary">{t.editHint}</Text>
                    <Divider />
                    <Title level={4}>Edit Code Snippet</Title>
                    <TextArea 
                        rows={10} 
                        value={tempContent.code}
                        onChange={(e) => handleContentChange('code', e.target.value)}
                    />
                </>
            ) : (
                <div className="markdown-body">
                    <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSlug]}>{t[`${pageKey}Description`]}</ReactMarkdown>
                </div>
            )}

            {content.demo && (
                <>
                    <Title level={2} id="demo" style={{ marginTop: 24 }}>{t.liveDemo}</Title>
                    {/* Simplified the props passed to the demo component */}
                    {typeof DemoComponent === 'function' ? <DemoComponent t={t} /> : DemoComponent}
                    <Text type="secondary" style={{display: 'block', marginTop: '1rem'}}>Note: The live demo does not update in real-time from the editor. This requires a local development environment.</Text>
                </>
            )}
            
            {content.code && <CodeBlock>{content.code}</CodeBlock>}
        </>
    );
};

export default DocPage;
