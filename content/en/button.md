---
title: Button
category: general
order: 3
demo: true
---

# Button

To trigger an operation.

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

## Examples

### Basic Usage

Buttons are used to trigger actions. They can be styled in different ways to indicate their importance and function.

```jsx
import { Button } from 'antd';

export default function ButtonExample() {
  return (
    <div>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
}
```

### Button Types

- **Primary**: Used for the main action in a set of buttons
- **Default**: Used for secondary actions
- **Dashed**: Used for special actions
- **Link**: Used for navigation actions

### Button States

Buttons can be in different states:
- Normal
- Hover
- Active
- Disabled
- Loading

## API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| type | Button type | `primary` \| `default` \| `dashed` \| `link` | `default` |
| size | Button size | `large` \| `middle` \| `small` | `middle` |
| disabled | Disabled state | boolean | false |
| loading | Loading state | boolean | false |