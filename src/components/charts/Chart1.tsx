"use client";

import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData7Days = [{ month: "January", desktop: 60, mobile: 570 }];
const chartData30Days = [{ month: "February", desktop: 120, mobile: 430 }];
const chartData60Days = [{ month: "March", desktop: 200, mobile: 600 }];

const chartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    color: "gray",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

const RadialChartTab = ({ data }: { data: typeof chartData7Days }) => {
  const totalVisitors = data[0].desktop + data[0].mobile;

  return (
    <div className="flex flex-col">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square w-60 md:w-80 h-80"
      >
        <RadialBarChart
          data={data}
          endAngle={180}
          innerRadius={80}
          outerRadius={130}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 16}
                        className="fill-foreground text-2xl font-bold"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 4}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  );
                }
                return null;
              }}
            />
          </PolarRadiusAxis>
          <RadialBar
            dataKey="desktop"
            stackId="a"
            cornerRadius={5}
            fill={chartConfig.desktop.color}
            className="stroke-transparent stroke-2"
          />
          <RadialBar
            dataKey="mobile"
            fill={chartConfig.mobile.color}
            stackId="a"
            cornerRadius={5}
            className="stroke-transparent stroke-2"
          />
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
};

const Tab1 = () => <RadialChartTab data={chartData7Days} />;

const Tab2 = () => <RadialChartTab data={chartData30Days} />;

const Tab3 = () => <RadialChartTab data={chartData60Days} />;

export function Chart1() {
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
