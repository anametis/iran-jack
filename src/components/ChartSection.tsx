import React from "react";
import ChartCard from "@/components/ui/chart-card";
import { Chart1 } from "@/components/charts/Chart1";
import { Chart2 } from "@/components/charts/Chart2";
import { Chart3 } from "@/components/charts/Chart3";
import { Chart4 } from "@/components/charts/Chart4";
import { Chart5 } from "@/components/charts/Chart5";
import { Chart6 } from "@/components/charts/Chart6";

type Props = {};
const ChartSection: React.FC<Props> = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-4 w-auto">
      <ChartCard title="Card1 title" description="Description">
        <Chart1 />
      </ChartCard>
      <ChartCard title="Card2 title" description="Description">
        <Chart2 />
      </ChartCard>
      <ChartCard title="Card3 title" description="Description">
        <Chart3 />
      </ChartCard>
      <ChartCard title="Card4 title" description="Description">
        <Chart4 />
      </ChartCard>
      <ChartCard title="Card5 title" description="Description">
        <Chart5 />
      </ChartCard>
      <ChartCard title="Card6 title" description="Description">
        <Chart6 />
      </ChartCard>
      {/* <ChartCard title="Card1 title" description="Description">
        <Chart1 />
      </ChartCard> */}
    </div>
  );
};
export default ChartSection;
