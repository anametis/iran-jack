"use client";

import { PieChart, Pie, Label } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData7Days = [
  { name: "Section1", value: 20, fill: "#a3e1d4" },
  { name: "Section2", value: 10, fill: "#7caed9" },
  { name: "Section3", value: 10, fill: "#2f86c0" },
  { name: "Section4", value: 5, fill: "#1d5567" },   
  { name: "Section5", value: 5, fill: "#F5F5F5" },   
];

const chartData30Days = [
  { name: "Section1", value: 25, fill: "#a3e1d4" },
  { name: "Section2", value: 15, fill: "#7caed9" },
  { name: "Section3", value: 10, fill: "#2f86c0" },
  { name: "Section4", value: 5, fill: "#1d5567" },
  { name: "Section5", value: 20, fill: "#F5F5F5" },
];

const chartData60Days = [
  { name: "Section1", value: 30, fill: "#a3e1d4" },
  { name: "Section2", value: 20, fill: "#7caed9" },
  { name: "Section3", value: 15, fill: "#2f86c0" },
  { name: "Section4", value: 10, fill: "#1d5567" },
  { name: "Section5", value: 50, fill: "#F5F5F5" },
];

const chartConfig: ChartConfig = {
  section1: {
    label: "Section1",
    color: "#a3e1d4",
  },
  section2: {
    label: "Section2",
    color: "#7caed9",
  },
  section3: {
    label: "Section3",
    color: "#2f86c0",
  },
  section4: {
    label: "Section4",
    color: "#1d5567",
  },
  section5: {
    label: "Section5",
    color: "#F5F5F5",
  },
};

const PieChartTab = ({ data, totalValue }: { data: typeof chartData7Days, totalValue: number }) => (
  <ChartContainer config={chartConfig} className="h-80 w-96 flex items-center justify-center">
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        innerRadius={60}
        outerRadius={80}
        stroke="none"
      >
        <Label
          value={totalValue}
          position="center"
          className="text-3xl font-bold fill-foreground"
        />
      </Pie>
    </PieChart>
  </ChartContainer>
);

const Tab1 = () => <PieChartTab data={chartData7Days} totalValue={1000} />;
const Tab2 = () => <PieChartTab data={chartData30Days} totalValue={1500} />;
const Tab3 = () => <PieChartTab data={chartData60Days} totalValue={2000} />;

export function Chart5() {
  return (
    <Tabs defaultValue="7days" className="w-full">
      <TabsList className="h-16">
        <TabsTrigger value="7days">7 days</TabsTrigger>
        <TabsTrigger value="30days">30 days</TabsTrigger>
        <TabsTrigger value="60days">60 days</TabsTrigger>
      </TabsList>

      <TabsContent value="7days">
        <Tab1 />
      </TabsContent>
      <TabsContent value="30days">
        <Tab2 />
      </TabsContent>
      <TabsContent value="60days">
        <Tab3 />
      </TabsContent>
    </Tabs>
  );
}
