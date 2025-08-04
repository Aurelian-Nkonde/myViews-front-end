import { accordionData } from "@/instances/accordion-data";
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Button,
  ButtonGroup,
  Grid,
  GridCol,
  Image,
} from "@mantine/core";
import { url } from "inspector";

export default function Index() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto mt-5 ">
        <Grid gutter="" style={{ height: "550px" }}>
          <GridCol
            span={6}
            className=" h-[550px] flex flex-col justify-center px-4"
          >
            <h1 className="font-josefin text-5xl font-bold pb-8">
              My Views! is the perfect place to share views..
            </h1>
            <p className="font-josefin text-lg pb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae consequuntur rerum nulla laudantium nihil odio ipsa.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                color="dark"
                className="shadow-2xl"
              >
                Why us?
              </Button>
              <Button size="lg" color="dark" className="shadow-2xl">
                Get started
              </Button>
            </div>
          </GridCol>
          <GridCol span={6} className=" flex items-center h-[550px]">
            <Image className="w-[500px] mx-auto" src="/images/bg2.jpg" alt="" />
          </GridCol>
        </Grid>
      </div>

      <div className="max-w-6xl mx-auto my-40">
        {/* why myViews */}
        <h1 className="text-center text-4xl font-josefin mb-12 font-bold">
          Why myViews?
        </h1>
        <Grid gutter="md">
          <GridCol
            span={3}
            className="flex flex-col items-center p-2 font-josefin"
          >
            <div className="mb-4">
              <Image
                src="/icons/money.svg"
                alt=""
                className="h-20 w-20 mx-auto"
              />
            </div>
            <h1 className="text-2xl font-serif mb-4">Accessing free views!</h1>
            <p className="text-lg text-center text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              veniam, expedita sed quia dolorem recusandae.
            </p>
          </GridCol>
          <GridCol
            span={3}
            className="flex flex-col items-center p-2 font-josefin"
          >
            <div className="mb-4">
              <Image
                src="/icons/mobile.svg"
                alt=""
                className="h-20 w-20 mx-auto"
              />
            </div>
            <h1 className="text-2xl font-serif mb-4">Mobile friendly site!</h1>
            <p className="text-lg text-center text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              veniam, expedita sed quia do
            </p>
          </GridCol>
          <GridCol
            span={3}
            className="flex flex-col items-center p-2 font-josefin"
          >
            <div className="mb-4">
              <Image
                src="/icons/sun.svg"
                alt=""
                className="h-20 w-20 mx-auto"
              />
            </div>
            <h1 className="text-2xl font-serif mb-4">Amazing views!</h1>
            <p className="text-lg text-center text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              veniam, expedita sed quia dolorem recusandae.
            </p>
          </GridCol>
          <GridCol
            span={3}
            className="flex flex-col items-center p-2 font-josefin"
          >
            <div className="mb-4">
              <Image
                src="/icons/video.svg"
                alt=""
                className="h-20 w-20 mx-auto"
              />
            </div>
            <h1 className="text-2xl font-serif mb-4">
              Experience great views!
            </h1>
            <p className="text-lg text-center text-gray-600">
              Lorem ipsum dolor, sit amet consectet Tenetur , expedita sed quia
              dolorem recusandae
            </p>
          </GridCol>
        </Grid>
      </div>

      <div className="max-w-6xl mx-auto my-40">
        <Grid gutter="md">
          <GridCol span={6}>
            <Image radius={10} src="/images/two.jpg" alt="" />
          </GridCol>
          <GridCol span={6} className="pl-10 font-roboto text-gray-700">
            <h1 className="pb-5 text-2xl font-josefin font-bold">
              Join myViews today!
            </h1>
            <div className="flex flex-col">
              <div className="flex items-center mb-3">
                <Image className="w-6 mr-3" src="/icons/check.svg" alt="" />
                <p className="text-lg">
                  Join other Lorem ipsum dolor sit amet. million users today
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-3">
                <Image className="w-6 mr-3" src="/icons/check.svg" alt="" />
                <p className="text-lg">
                  Join other million Lorem, ipsum users today
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-3">
                <Image className="w-6 mr-3" src="/icons/check.svg" alt="" />
                <p className="text-lg">
                  Join other million Lorem ipsum dolor sit. users today
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-3">
                <Image className="w-6 mr-3" src="/icons/check.svg" alt="" />
                <p className="text-lg">
                  Join other million Lorem, ipsum. users today
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-3">
                <Image className="w-6 mr-3" src="/icons/check.svg" alt="" />
                <p className="text-lg">
                  Join other million users Lorem ipsum dolor sit. today
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <div className="flex items-center mb-3">
                <Image className="w-6 mr-3" src="/icons/check.svg" alt="" />
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
            <Button size="lg" variant="outline" color="dark">
              Get Started!
            </Button>
          </GridCol>
        </Grid>
      </div>

      <div className="max-w-6xl mx-auto my-44">
        <h1 className="text-center font-josefin text-4xl mb-6 font-bold">
          Frequently Asked Questions
        </h1>
        <Accordion variant="filled">
          <AccordionItem value="one">
            <AccordionControl>
              <h1 className="font-josefin text-lg">
                Lorem ipsum, Lorem ipsum dolor sit amet. dolor sit amet
                consectetur adipisicing elit. Adipisci.?
              </h1>
            </AccordionControl>
            <AccordionPanel className="font-josefin text-gray-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda accusamus reiciendis reprehenderit? Lorem ipsum dolor
              sit amet consectetur.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="two">
            <AccordionControl>
              <h1 className="font-josefin text-lg">
                Lorem ipsum, Lorem, ipsum dolor. dolor sit amet consectetur
                adipisicing elit. Adipisci.?
              </h1>
            </AccordionControl>
            <AccordionPanel className="font-josefin text-gray-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda accusamus reiciendis reprehenderit? Lorem ipsum, dolor
              sit amet consectetur adipisicing elit.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="three">
            <AccordionControl>
              <h1 className="font-josefin text-lg">
                Lorem ipsum,Lorem ipsum dolor sit amet. dolor sit amet
                consectetur adipisicing elit. Adipisci.?
              </h1>
            </AccordionControl>
            <AccordionPanel className="font-josefin text-gray-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda accusamus reiciendis reprehenderit? Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Alias, aspernatur!
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="four">
            <AccordionControl>
              <h1 className="font-josefin text-lg">
                Lorem ipsum, Lorem, ipsum dolor. dolor sit amet consectetur
                adipisicing elit. Adipisci.?
              </h1>
            </AccordionControl>
            <AccordionPanel className="font-roboto text-gray-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda accusamus reiciendis reprehenderit? Lorem ipsum dolor
              sit amet consectetur.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      <div
        className="flex flex-col justify-center items-center"
        style={{
          height: "530px",
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/images/one.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center">
          <h1 className="font-josefin text-3xl text-white pb-4 font-bold text-center">
            Create a free account and start sharing views!
          </h1>
          <p className="max-w-4xl mx-auto font-josefin text-white text-lg pb-8 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
            doloribus aspernatur id incidunt? Nam laudantium saepe deleniti odio
            Lorem ipsum dolor sit amet consectetur adipisicing. placeat
            reiciendis.
          </p>
          <div className="">
            <Button variant="outline" size="xl" color="gray">
              Get started!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
