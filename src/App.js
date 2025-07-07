import React, { useState, useEffect } from 'react';
import {
  Layout,
  Menu,
  Typography,
  Select,
  ConfigProvider,
  Anchor,
} from 'antd';
import {
  AppstoreOutlined,
} from '@ant-design/icons';
import { initialContent, componentData } from './content';
import DocPage from './components/DocPage';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;
const { Link: AnchorLink } = Anchor;

const App = () => {
  const [selectedKey, setSelectedKey] = useState('overview');
  const [content, setContent] = useState({ ...initialContent, currentLang: 'en' });
  const [isEditing, setIsEditing] = useState(false);
  const [tempContent, setTempContent] = useState(null);
  const [toc, setToc] = useState([]);

  const t = content[content.currentLang];
  const descriptionKey = `${selectedKey}Description`;

  useEffect(() => {
    const currentDescription = t[descriptionKey] || '';
    const headingRegex = /^(#{1,6})\s+(.*)/gm;
    const newToc = [];
    let match;
    while ((match = headingRegex.exec(currentDescription)) !== null) {
        const title = match[2].trim();
        const href = '#' + title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
        newToc.push({ level: match[1].length, title, href });
    }
    if (componentData[selectedKey]?.demo) {
        newToc.push({ level: 2, title: t.liveDemo, href: '#demo' });
    }
    setToc(newToc);
  }, [selectedKey, content, t, descriptionKey]);

  const handleEdit = () => {
      const currentCode = componentData[selectedKey]?.code || '';
      setTempContent({ ...content, code: currentCode });
      setIsEditing(true);
  };
  
  const handleSave = () => {
      componentData[selectedKey].code = tempContent.code;
      setContent(tempContent);
      setIsEditing(false);
      setTempContent(null);
  };

  const handleCancelEdit = () => {
      setIsEditing(false);
      setTempContent(null);
  };

  const handleContentChange = (key, value) => {
      if (key === 'code') {
          setTempContent(prev => ({ ...prev, code: value }));
      } else {
          setTempContent(prev => ({
              ...prev,
              [content.currentLang]: {
                  ...prev[content.currentLang],
                  [key]: value,
              }
          }));
      }
  };

  const getFontFamily = () => {
      return content.currentLang === 'zh' ? "'Source Han Sans CN', sans-serif" : "'Quicksand', sans-serif";
  };

  const pageContent = {
      demo: componentData[selectedKey]?.demo,
      code: componentData[selectedKey]?.code,
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Source+Han+Sans+CN:wght@400;700&display=swap');
        body { font-family: ${getFontFamily()}; }
        .markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6 {
            font-family: ${getFontFamily()};
        }
        .markdown-body img { max-width: 100%; }
      `}</style>
      <ConfigProvider 
        theme={{ 
          token: { 
            colorPrimary: '#27ae60', 
            colorLink: '#27ae60',
            fontFamily: getFontFamily(),
          },
          components: {
            Typography: {
              fontSizeHeading1: 38, lineHeightHeading1: 46/38,
              fontSizeHeading2: 30, lineHeightHeading2: 38/30,
              fontSizeHeading3: 24, lineHeightHeading3: 32/24,
              fontSizeHeading4: 20, lineHeightHeading4: 28/20,
              fontSizeHeading5: 16, lineHeightHeading5: 24/16,
            }
          }
        }}
      >
        <Layout style={{ minHeight: '100vh' }}>
          <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', borderBottom: '1px solid #f0f0f0', padding: '0 24px' }}>
              <Title level={3} style={{ color: '#27ae60', margin: 0 }}><AppstoreOutlined style={{marginRight: 8}}/>{t.appTitle}</Title>
              <Select value={content.currentLang} onChange={(lang) => setContent({ ...content, currentLang: lang })}>
                  <Option value="en">English</Option>
                  <Option value="zh">中文</Option>
              </Select>
          </Header>
          <Layout>
            <Sider width={240} style={{ background: '#fff', borderRight: '1px solid #f0f0f0' }}>
              <Menu mode="inline" selectedKeys={[selectedKey]} style={{ height: '100%', borderRight: 0 }} onClick={({key}) => setSelectedKey(key)}>
                <Menu.Item key="overview">{t.overview}</Menu.Item>
                <Menu.ItemGroup key="g1" title={t.general}><Menu.Item key="button">{t.button}</Menu.Item><Menu.Item key="icon">{t.icon}</Menu.Item><Menu.Item key="typography">{t.typography}</Menu.Item></Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title={t.layout}><Menu.Item key="grid">{t.grid}</Menu.Item><Menu.Item key="space">{t.space}</Menu.Item></Menu.ItemGroup>
                <Menu.ItemGroup key="g3" title={t.dataDisplay}><Menu.Item key="table">{t.table}</Menu.Item><Menu.Item key="tag">{t.tag}</Menu.Item><Menu.Item key="dropdown">{t.dropdown}</Menu.Item></Menu.ItemGroup>
                <Menu.ItemGroup key="g4" title={t.dataEntry}><Menu.Item key="form">{t.form}</Menu.Item><Menu.Item key="checkbox">{t.checkbox}</Menu.Item></Menu.ItemGroup>
              </Menu>
            </Sider>
            <Content style={{ padding: '24px', background: '#fff', display: 'flex' }}>
               <div style={{ flex: 1, minWidth: 0, paddingRight: '24px' }}>
                    <DocPage 
                        pageKey={selectedKey}
                        content={pageContent}
                        isEditing={isEditing}
                        tempContent={tempContent}
                        handleContentChange={handleContentChange}
                        handleSave={handleSave}
                        handleCancelEdit={handleCancelEdit}
                        handleEdit={handleEdit}
                        t={t}
                        currentLang={content.currentLang}
                    />
               </div>
               <div style={{ width: 200, flexShrink: 0 }}>
                    <Anchor affix={true} offsetTop={80} targetOffset={80}>
                        <AnchorLink href="#overview" title={t[selectedKey]} />
                        {toc.map(item => (
                            <AnchorLink key={item.href} href={item.href} title={item.title} style={{ paddingLeft: (item.level - 1) * 16 }} />
                        ))}
                    </Anchor>
               </div>
            </Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    </>
  );
};

export default App;
