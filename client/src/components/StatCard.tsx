import { Card } from "antd";

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  color,
}) => {
  return (
    <Card title={title} bordered={false} className={`${color} text-white`}>
      <div className="text-2xl">{value}</div>
      <div className="text-sm">{description}</div>
    </Card>
  );
};

export default StatCard;
