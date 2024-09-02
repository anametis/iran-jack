import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AlignJustify, ChevronDown, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChartContainer } from "../ui/chart";
import ChartSection from "../ChartSection";
import TreeView from "../ui/treeview";

const FilterCheckbox = ({
  id,
  label,
  icon,
  className,
  checkboxStyles,
}: {
  id: string;
  label: string;
  icon?: ReactNode;
  className?: string;
  checkboxStyles?: string;
}) => (
  <div className={cn("flex items-center space-x-2", className)}>
    <Checkbox id={id} className={cn("rounded-full", checkboxStyles)} />
    <label
      htmlFor={id}
      className="text-xs font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {label}
    </label>
    {icon && <div className="h-4 w-4">{icon}</div>}
  </div>
);

const menuData = [
  {
    label: "Group title",
    items: [
      {
        label: "Option",
        items: [
          { label: "Item" },
          { label: "Item" },
          {
            label: "Item",
            items: [{ label: "Item" }, { label: "Item" }, { label: "Item" }],
          },
        ],
      },
      {
        label: "Option",
        items: [{ label: "Item" }, { label: "Item" }, { label: "Item" }],
      },
    ],
  },
];

const App = () => {
  return <TreeView menu={menuData} />;
};

type Props = {};
const Home = (props: Props) => {
  return (
    <div>
      <div className="sticky top-0 z-10 py-4 flex flex-wrap items-center gap-4 border-b border-t justify-between px-4 md:px-6">
        <nav className="hidden md:flex md:flex-wrap md:items-center md:gap-5 md:text-sm lg:gap-6 w-full lg:w-auto">
          <Button className=" bg-transparent shadow-none hover:bg-transparent hover:text-white">
            <AlignJustify className="text-black" />
          </Button>
          <FilterCheckbox
            id="text1"
            label="Text"
            className="bg-active px-4 py-2 rounded-sm text-white"
            icon={<ChevronDown className="h-4 w-4" />}
            checkboxStyles=" border-white"
          />
          <FilterCheckbox id="text2" label="Text" />
          <FilterCheckbox id="text3" label="Text" />
          <Separator orientation="vertical" className="h-5 hidden lg:block" />
          <FilterCheckbox id="text4" label="Text" />
          <FilterCheckbox id="text5" label="Text" />
          <FilterCheckbox id="text6" label="Text" />
          <Separator orientation="vertical" className="h-5 hidden lg:block" />
          <FilterCheckbox id="text7" label="Text" />
          <FilterCheckbox id="text8" label="Text" />
        </nav>

        <div className="flex items-center gap-4 md:gap-2 lg:gap-4 right-0">
          <form className="ml-auto flex items-center gap-2 w-full md:w-auto">
            <label htmlFor="search" className="hidden md:block">
              Filter
            </label>
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                type="search"
                placeholder="Find ..."
                className="pl-8 w-full sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex">
        <TreeView menu={menuData} className="w-48" />
        <ChartSection />
      </div>
    </div>
  );
};

export default Home;
