import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { name: 'Mon', sales: 120 },
  { name: 'Tue', sales: 210 },
  { name: 'Wed', sales: 150 },
];

const Widget = ({ title, data }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <LineChart width={300} height={100} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      </LineChart>
    </CardContent>
  </Card>
);
