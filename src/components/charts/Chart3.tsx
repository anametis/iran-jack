"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  ChartStyle,
} from "@/components/ui/chart";

const chartData7Days = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartData30Days = [
  { month: "July", desktop: 200, mobile: 90 },
  { month: "August", desktop: 250, mobile: 150 },
  { month: "September", desktop: 300, mobile: 200 },
  { month: "October", desktop: 100, mobile: 180 },
  { month: "November", desktop: 230, mobile: 120 },
  { month: "December", desktop: 240, mobile: 160 },
];

const chartData60Days = [
  { month: "January", desktop: 180, mobile: 100 },
  { month: "February", desktop: 270, mobile: 140 },
  { month: "March", desktop: 220, mobile: 120 },
  { month: "April", desktop: 150, mobile: 170 },
  { month: "May", desktop: 280, mobile: 150 },
  { month: "June", desktop: 260, mobile: 190 },
];

const chartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

const AreaChartTab = ({ data }: { data: typeof chartData7Days }) => {
  return (
    <ChartContainer config={chartConfig} className="w-96 h-80">
      <AreaChart
        accessibilityLayer
        data={data}
        margin={{
          left: -20,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickCount={3}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Area
          dataKey="mobile"
          type="linear"
          fill={chartConfig.mobile.color}
          fillOpacity={0.4}
          stroke={chartConfig.mobile.color}
          stackId="a"
        />
        <Area
          dataKey="desktop"
          type="linear"
          fill={chartConfig.desktop.color}
          fillOpacity={0.4}
          stroke={chartConfig.desktop.color}
          stackId="a"
        />
        <ChartLegend className="ml-0" content={<ChartLegendContent />} />
      </AreaChart>
    </ChartContainer>
  );
};

const Tab1 = () => <AreaChartTab data={chartData7Days} />;

const Tab2 = () => <AreaChartTab data={chartData30Days} />;

const Tab3 = () => <AreaChartTab data={chartData60Days} />;

export function Chart3() {
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
