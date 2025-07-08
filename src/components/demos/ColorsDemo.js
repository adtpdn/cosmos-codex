import React from 'react';
import { Card, Row, Col, Typography, message, Divider } from 'antd';

const { Title, Text } = Typography;

// --- Helper function to generate a color palette ---
// This is a simplified version. A real design system might use a more complex algorithm.
const generatePalette = (baseHex) => {
  const palette = [];
  // A simple approach to generate tints and shades
  for (let i = -4; i <= 5; i++) {
    let newHex = '#';
    for (let j = 0; j < 3; j++) {
      const sub = baseHex.substring(1 + j * 2, 3 + j * 2);
      let dec = parseInt(sub, 16);
      dec = Math.min(255, Math.max(0, dec + i * 20)); // Adjust brightness
      newHex += dec.toString(16).padStart(2, '0');
    }
    palette.push(newHex.toUpperCase());
  }
  return palette;
};

const colors = [
    { name: 'Link', hex: '#2949BB' },
    { name: 'Success', hex: '#48723F' },
    { name: 'Warning', hex: '#C26831' },
    { name: 'Error', hex: '#B44432' },
    { name: 'Green', hex: '#16A34A' },
    { name: 'Blue', hex: '#2563EB' },
];

const ColorSwatch = ({ colorHex }) => {
  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = colorHex;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    message.success(`Copied ${colorHex} to clipboard!`);
  };

  // Determine if text should be light or dark for contrast
  const getTextColor = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? '#000000' : '#FFFFFF';
  };

  return (
    <Col span={24 / 10} key={colorHex}>
      <div
        onClick={copyToClipboard}
        style={{
          background: colorHex,
          height: 80,
          borderRadius: 4,
          display: 'flex',
          alignItems: 'flex-end',
          padding: 8,
          cursor: 'pointer',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <Text style={{ color: getTextColor(colorHex), fontSize: 12, fontWeight: 'bold' }}>{colorHex}</Text>
      </div>
    </Col>
  );
};

const ColorsDemo = () => (
  <Card>
    {colors.map((color, index) => (
      <div key={color.name}>
        <Title level={4}>{color.name}</Title>
        <Row gutter={[8, 8]}>
          {generatePalette(color.hex).map(hex => (
            <ColorSwatch key={hex} colorHex={hex} />
          ))}
        </Row>
        {index < colors.length - 1 && <Divider />}
      </div>
    ))}
  </Card>
);

export default ColorsDemo;
