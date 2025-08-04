import {
  Badge,
  Button,
  Card,
  CardSection,
  CheckIcon,
  Grid,
  GridCol,
  Group,
  Image,
  Text,
  TextInput,
} from "@mantine/core";

const data = [
  {
    id: 1,
    text: "the goerge!",
  },
  {
    id: 2,
    text: "the river streem!",
  },
  {
    id: 3,
    text: "the talest in my village!",
  },
  {
    id: 4,
    text: "some weird trees!",
  },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto my-40">
      <Grid>
        {data.map((data) => (
          <GridCol key={data.id} span={3}>
            <Card withBorder radius="md" shadow="md">
              <CardSection>
                <Image
                  src="/images/card.svg"
                  alt=""
                  radius="md"
                  className="h-52"
                />
              </CardSection>
              <Text className="font-josefin pt-3 pb-1 text-2xl">
                {data.text}
              </Text>
              <Text fw={200} className="text-md font-josefin mb-4">
                <span className="underline">Posted:</span> 10min ago!
              </Text>

              <Group justify="space-between" className="px-6 mb-3">
                <Badge size="lg" circle color="red" variant="outline">
                  2
                </Badge>
                <Badge size="lg" circle color="green" variant="outline">
                  10
                </Badge>
              </Group>
              <Group justify="space-between" className="pb-3">
                <Button variant="light" size="md">
                  <Image src="/icons/unlike+.svg" alt="" />
                </Button>
                <p>-</p>
                <Button variant="light" size="md">
                  <Image src="/icons/like+.svg" alt="" />
                </Button>
              </Group>
              <Button
                color="dark"
                variant="outline"
                fullWidth
                mt="md"
                radius="md"
              >
                Requst More info!
              </Button>
            </Card>
          </GridCol>
        ))}
      </Grid>
    </div>
  );
}
