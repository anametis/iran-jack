import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, ChevronRight, Ellipsis, SquareArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Home from "@/components/tabs/Home";
import Subtract from "../../../public/Subtract.svg";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import MobileHome from "@/components/tabs/MobileHome";

type Props = {};
const Statistics = (props: Props) => {
  return (
    <div className="w-full">
      <div className="hidden md:flex justify-between items-center w-full">
        <Tabs defaultValue="home" className="w-full">
          <div className="flex justify-between w-full">
            <TabsList className="h-16">
              <div className="flex items-center gap-2 mx-4">
                <Image src={Subtract} alt="logo" width={32} height={32} />
                <h2 className="text-xl font-bold text-black">Van Arsdel</h2>
              </div>
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="assignment">Assigned to you</TabsTrigger>
            </TabsList>
            <TabsList className="h-16">
              <Button
                variant="outline"
                size="icon"
                className="border-none shadow-none"
              >
                <SquareArrowUpRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-none shadow-none"
              >
                <Ellipsis className="h-4 w-4" />
              </Button>
            </TabsList>
          </div>
          <TabsContent value="home">{<Home />}</TabsContent>
          <TabsContent value="password">ange your password here.</TabsContent>
          <TabsContent value="timeline">this is timeline</TabsContent>
          <TabsContent value="chat">this is chat</TabsContent>
          <TabsContent value="assignment">this is assignment</TabsContent>
        </Tabs>
      </div>
      <div className="block md:hidden w-full">
        <div className="flex justify-between items-center w-full px-2">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="mx-auto my-auto">VA</AvatarFallback>
            </Avatar>
            <span className="text-xl font-bold">Van Arsdel</span>
          </div>
          <div className="flex shrink-0 gap-3">
            <Bot className="text-active"/>
            <Ellipsis />
          </div>
        </div>
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList className="h-16 w-full flex justify-between">
            <TabsTrigger value="tab1" className="w-full">
              Tab1
            </TabsTrigger>
            <TabsTrigger value="tab2" className="w-full">
              Tab2
            </TabsTrigger>
            <TabsTrigger value="tab3" className="w-full">
              Tab3
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tab1">{<MobileHome />}</TabsContent>
          <TabsContent value="tab2">ange your password here.</TabsContent>
          <TabsContent value="tab3">this is timeline</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default Statistics;
