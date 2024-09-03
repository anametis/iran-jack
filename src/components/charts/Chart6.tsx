"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData7Days = [
  { month: "January", desktop: 186, mobile: 80, tablet: 100 },
  { month: "February", desktop: 305, mobile: 200, tablet: 200 },
  { month: "March", desktop: 237, mobile: 120, tablet: 210 },
  { month: "April", desktop: 73, mobile: 190, tablet: 100 },
  { month: "May", desktop: 209, mobile: 130, tablet: 140 },
  { month: "June", desktop: 214, mobile: 140, tablet: 200 },
];

const chartData30Days = [
  { month: "July", desktop: 200, mobile: 110, tablet: 130 },
  { month: "August", desktop: 320, mobile: 220, tablet: 180 },
  { month: "September", desktop: 250, mobile: 250, tablet: 190 },
  { month: "October", desktop: 120, mobile: 140, tablet: 120 },
  { month: "November", desktop: 270, mobile: 190, tablet: 170 },
  { month: "December", desktop: 240, mobile: 160, tablet: 180 },
];

const chartData60Days = [
  { month: "January", desktop: 190, mobile: 90, tablet: 120 },
  { month: "February", desktop: 280, mobile: 180, tablet: 140 },
  { month: "March", desktop: 220, mobile: 140, tablet: 200 },
  { month: "April", desktop: 150, mobile: 160, tablet: 130 },
  { month: "May", desktop: 300, mobile: 210, tablet: 180 },
  { month: "June", desktop: 260, mobile: 170, tablet: 200 },
];

const chartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    color: "blue",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  tablet: {
    label: "Tablet",
    color: "hsl(var(--chart-3))",
  },
};

const BarChartTab = ({ data }: { data: typeof chartData7Days }) => (
  <ChartContainer config={chartConfig} className="h-80 w-96">
    <BarChart accessibilityLayer data={data}>
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(value) => value.slice(0, 3)}
      />
      <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent indicator="dashed" />}
      />
      <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />
      <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />
      <Bar dataKey="tablet" fill={chartConfig.tablet.color} radius={4} />
    </BarChart>
  </ChartContainer>
);

const Tab1 = () => <BarChartTab data={chartData7Days} />;
const Tab2 = () => <BarChartTab data={chartData30Days} />;
const Tab3 = () => <BarChartTab data={chartData60Days} />;

export function Chart6() {
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
