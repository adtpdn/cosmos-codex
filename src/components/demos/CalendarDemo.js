import { Calendar, Card, Alert } from 'antd';
import dayjs from 'dayjs';

const CalendarDemo = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <Card>
      <Alert message={`Current date: ${dayjs().format('YYYY-MM-DD')}`} />
      <Calendar onPanelChange={onPanelChange} />
    </Card>
  );
};
export default CalendarDemo;
