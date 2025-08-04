"use client";

import {
  Button,
  FileInput,
  Image,
  Input,
  Modal,
  TextInput,
} from "@mantine/core";
import { hasLength, isNotEmpty, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { string, z } from "zod/v4";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { error } from "console";

const schema = z.object({
  text: z.string().max(40, { error: "letters must be less than 40 words" }),
});

const fileSchema = z.file({ error: "Image file is required" });
fileSchema.mime(["image/png", "image/jpeg"]);

export default function CreateView() {
  const [opened, { open, close }] = useDisclosure(false);
  // const [inputText, setInputText] = useState<string>("");
  // const [fileUpload, setFileUpload] = useState<File | null>(null);

  const form = useForm({
    initialValues: { text: "", image: null },
    validate: {
      text: hasLength({ max: 40 }, "Text must not be longer than 40 letters"),
      image: isNotEmpty("File is required"),
    },
  });

  const saveView = (values: any) => {
    console.log(form.values);
  };

  return (
    <div className="">
      <Modal
        opened={opened}
        onClose={close}
        size="lg"
        withCloseButton={false}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        className="px-12 py-10"
      >
        <h1 className="text-center font-josefin text-xl">
          Create a View here!
        </h1>
        <form onSubmit={form.onSubmit((values) => saveView(values))}>
          <TextInput
            radius="md"
            label="Text"
            withAsterisk
            description="Input text"
            // value={inputText}
            // onChange={(e) => setInputText(e.target.value)}
            {...form.getInputProps("text")}
            className="mt-6 mb-4"
          />
          <FileInput
            accept="image/png,image/jpeg"
            radius="md"
            label="Image"
            description="Image upload"
            className="mt-6 mb-4"
            // value={fileUpload}
            // onChange={setFileUpload}
            {...form.getInputProps("image")}
            leftSection={
              <Image src="/icons/image.svg" alt="" className="w-6" />
            }
            placeholder="Upload your image here!"
          />
          <Button type="submit" fullWidth className="" color="green">
            Save view
          </Button>
        </form>
      </Modal>
      <Button
        onClick={open}
        variant="outline"
        color="dark"
        size="lg"
        radius="lg"
      >
        Create VIEW!
      </Button>
    </div>
  );
}
