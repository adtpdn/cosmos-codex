import AvatarDemo from './components/demos/AvatarDemo';
import BadgeDemo from './components/demos/BadgeDemo';
import ButtonDemo from './components/demos/ButtonDemo';
import CalendarDemo from './components/demos/CalendarDemo';
import CardDemo from './components/demos/CardDemo';
import CarouselDemo from './components/demos/CarouselDemo';
import CheckboxDemo from './components/demos/CheckboxDemo';
import CollapseDemo from './components/demos/CollapseDemo';
import DescriptionsDemo from './components/demos/DescriptionsDemo';
import DividerDemo from './components/demos/DividerDemo';
import DropdownDemo from './components/demos/DropdownDemo';
import EmptyDemo from './components/demos/EmptyDemo';
import FormDocumentation from './components/demos/FormDemo';
import GridDemo from './components/demos/GridDemo';
import IconDemo from './components/demos/IconDemo';
import ImageDemo from './components/demos/ImageDemo';
import LayoutDemo from './components/demos/LayoutDemo';
import ListDemo from './components/demos/ListDemo';
import PopoverDemo from './components/demos/PopoverDemo';
import SegmentedDemo from './components/demos/SegmentedDemo';
import SpaceDemo from './components/demos/SpaceDemo';
import StatisticDemo from './components/demos/StatisticDemo';
import TableDemo from './components/demos/TableDemo';
import TagDemo from './components/demos/TagDemo';
import TimelineDemo from './components/demos/TimelineDemo';
import TooltipDemo from './components/demos/TooltipDemo';
import TreeDemo from './components/demos/TreeDemo';
import TypographyDemo from './components/demos/TypographyDemo';
import InventoryDemo from './components/demos/InventoryDemo'; 
import { en } from "./data/languages/en";
import { zh } from "./data/languages/zh";

// This object holds the JSX for live demos and the corresponding code strings.
export const componentData = {
    overview: { demo: null, code: null },
    // General
    button: { demo: <ButtonDemo />, code: `import { Button } from 'antd';` },
    icon: { demo: <IconDemo />, code: `import { HomeOutlined } from '@ant-design/icons';` },
    typography: { demo: <TypographyDemo />, code: `import { Typography } from 'antd';` },
    // Layout
    divider: { demo: <DividerDemo />, code: `import { Divider } from 'antd';` },
    grid: { demo: <GridDemo />, code: `import { Row, Col } from 'antd';` },
    layout: { demo: <LayoutDemo />, code: `import { Layout } from 'antd';` },
    space: { demo: <SpaceDemo />, code: `import { Space } from 'antd';` },
    // Data Display
    inventory: { demo: InventoryDemo, code: `<Modal open={...} width="95%"><InventoryStandalone /></Modal>` },
    avatar: { demo: <AvatarDemo />, code: `import { Avatar } from 'antd';` },
    badge: { demo: <BadgeDemo />, code: `import { Badge } from 'antd';` },
    calendar: { demo: <CalendarDemo />, code: `import { Calendar } from 'antd';` },
    card: { demo: <CardDemo />, code: `import { Card } from 'antd';` },
    carousel: { demo: <CarouselDemo />, code: `import { Carousel } from 'antd';` },
    collapse: { demo: <CollapseDemo />, code: `import { Collapse } from 'antd';` },
    descriptions: { demo: <DescriptionsDemo />, code: `import { Descriptions } from 'antd';` },
    empty: { demo: <EmptyDemo />, code: `import { Empty } from 'antd';` },
    image: { demo: <ImageDemo />, code: `import { Image } from 'antd';` },
    list: { demo: <ListDemo />, code: `import { List } from 'antd';` },
    popover: { demo: <PopoverDemo />, code: `import { Popover } from 'antd';` },
    segmented: { demo: <SegmentedDemo />, code: `import { Segmented } from 'antd';` },
    statistic: { demo: <StatisticDemo />, code: `import { Statistic } from 'antd';` },
    table: { demo: <TableDemo />, code: `import { Table } from 'antd';` },
    tag: { demo: <TagDemo />, code: `import { Tag } from 'antd';` },
    timeline: { demo: <TimelineDemo />, code: `import { Timeline } from 'antd';` },
    tooltip: { demo: <TooltipDemo />, code: `import { Tooltip } from 'antd';` },
    tree: { demo: <TreeDemo />, code: `import { Tree } from 'antd';` },
    dropdown: { demo: <DropdownDemo />, code: `import { Dropdown } from 'antd';` },
    // Data Entry
    checkbox: { demo: <CheckboxDemo />, code: `import { Checkbox } from 'antd';` },
    form: { demo: FormDocumentation, code: `<Modal><Form>...</Form></Modal>` },
};

export const languages = { en, zh };
