import CreateView from "@/components/create-view";
import {
  Badge,
  Button,
  ButtonGroup,
  Group,
  Image,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
} from "@mantine/core";

const data = [
  {
    id: 1,
    text: "the goerge!",
    likes: 12,
    unlikes: 20,
    createdAt: "10/02/2025",
  },
  {
    id: 12,
    text: "the yellow road!",
    likes: 22,
    unlikes: 2,
    createdAt: "13/04/2025",
  },
  {
    id: 3,
    text: "river deep north!",
    likes: 88,
    unlikes: 10,
    createdAt: "10/02/2025",
  },
];

const infoRequest = [
  {
    id: 12324,
    postId: 53545545,
    status: "PENDING",
    createdAt: "10/04/2025",
  },
  {
    id: 874343434,
    postId: 53545545,
    status: "CLOSSED",
    createdAt: "10/04/2025",
  },
  {
    id: 552211,
    postId: 53545545,
    status: "PENDING",
    createdAt: "10/04/2025",
  },
];

const notifications = [
  {
    id: 7232323,
    type: "REQUEST_info",
    status: "UNREAD",
    message: "someone wants to meet you!",
    createdAt: "10/03/2025",
  },
  {
    id: 877773,
    type: "REQUEST_info",
    status: "READ",
    message: "someone wants to meet you!",
    createdAt: "10/03/2025",
  },
];

export default function Profile() {
  return (
    <div className="max-w-6xl mx-auto my-40">
      <h1 className="font-josefin text-3xl font-bold mb-3">Hello, tom!</h1>
      <CreateView />

      <div className="mt-20">
        <h1 className="font-josefin text-2xl font-bold underline">
          Views and Info-Request management
        </h1>
        <Tabs className="mt-8" defaultValue="views">
          <TabsList>
            <TabsTab
              leftSection={
                <Image src="/icons/posts.svg" alt="" className="h-8" />
              }
              value="views"
              className="font-josefin text-lg"
            >
              Posted Views
            </TabsTab>
            <TabsTab
              leftSection={
                <Image src="/icons/info.svg" alt="" className="h-8" />
              }
              value="info"
              className="font-josefin text-lg"
            >
              More info requests
            </TabsTab>
            <TabsTab
              leftSection={
                <Image src="/icons/notifications.svg" alt="" className="h-8" />
              }
              value="notifications"
            >
              Notifications
            </TabsTab>
          </TabsList>
          <TabsPanel value="views" className="font-josefin text-lg">
            <Table
              horizontalSpacing="md"
              verticalSpacing="md"
              striped
              className="font-josefin mt-4"
            >
              <TableThead>
                <TableTr>
                  <TableTh>ViewID</TableTh>
                  <TableTh>Text</TableTh>
                  <TableTh>Likes</TableTh>
                  <TableTh>Unlikes</TableTh>
                  <TableTh>CreatedAt</TableTh>
                </TableTr>
              </TableThead>
              <TableTbody>
                {data.map((data) => (
                  <TableTr key={data.id}>
                    <TableTd>{data.id}</TableTd>
                    <TableTd>{data.text}</TableTd>
                    <TableTd>{data.likes}</TableTd>
                    <TableTd>{data.unlikes}</TableTd>
                    <TableTd>{data.createdAt}</TableTd>
                  </TableTr>
                ))}
              </TableTbody>
            </Table>
          </TabsPanel>
          <TabsPanel value="info">
            <Table
              horizontalSpacing="md"
              verticalSpacing="md"
              striped
              className="font-josefin mt-4"
            >
              <TableThead>
                <TableTr>
                  <TableTh>InfoRequestID</TableTh>
                  <TableTh>PostID</TableTh>
                  <TableTh>Status</TableTh>
                  <TableTh>CreatedAt</TableTh>
                  <TableTh>Action</TableTh>
                </TableTr>
              </TableThead>
              <TableTbody>
                {infoRequest.map((data) => (
                  <TableTr key={data.id}>
                    <TableTd>{data.id}</TableTd>
                    <TableTd>{data.postId}</TableTd>
                    <TableTd>
                      <Badge variant="dot" color="green">
                        {data.status}
                      </Badge>
                    </TableTd>
                    <TableTd>{data.createdAt}</TableTd>
                    <TableTd>
                      <Group>
                        <Button
                          rightSection={
                            <Image src="/icons/accept.svg" alt="" />
                          }
                          color="green"
                        >
                          Accept
                        </Button>
                        <Button
                          rightSection={
                            <Image src="/icons/reject.svg" alt="" />
                          }
                          color="red"
                        >
                          Reject
                        </Button>
                      </Group>
                    </TableTd>
                  </TableTr>
                ))}
              </TableTbody>
            </Table>
          </TabsPanel>
          <TabsPanel value="notifications">
            <Table
              horizontalSpacing="md"
              verticalSpacing="md"
              striped
              className="font-josefin mt-4"
            >
              <TableThead>
                <TableTr>
                  <TableTh>NotificationID</TableTh>
                  <TableTh>Status</TableTh>
                  <TableTh>Type</TableTh>
                  <TableTh>Message</TableTh>
                  <TableTh>CreatedAt</TableTh>
                  <TableTh>Action</TableTh>
                </TableTr>
              </TableThead>
              <TableTbody>
                {notifications.map((data) => (
                  <TableTr key={data.id}>
                    <TableTd>{data.id}</TableTd>
                    <TableTd>
                      <Badge variant="dot" color="green">
                        {data.status}
                      </Badge>
                    </TableTd>
                    <TableTd>
                      <Badge variant="outline" color="green">
                        {data.type}
                      </Badge>
                    </TableTd>
                    <TableTd>{data.message}</TableTd>
                    <TableTd>{data.createdAt}</TableTd>
                    <TableTd>
                      <Group>
                        <Button
                          rightSection={<Image src="/icons/read.svg" alt="" />}
                          color="green"
                        >
                          Mark as read!
                        </Button>
                      </Group>
                    </TableTd>
                  </TableTr>
                ))}
              </TableTbody>
            </Table>
          </TabsPanel>
        </Tabs>
      </div>
    </div>
  );
}
