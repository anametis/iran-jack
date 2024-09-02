import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Home from "@/components/tabs/Home";
import Subtract from "../../public/Subtract.svg";

type Props = {};
const Header = (props: Props) => {
  return (
    <div className="flex justify-between items-center w-full">
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
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
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
  );
};
export default Header;
