"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import Container from "@/components/Container";

const formSchema = z.object({
  productName: z.string().min(2, "Product name must be at least 2 characters."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters."),
  image: z.instanceof(File).optional(),
  price: z.coerce.number().min(1, "Price must be greater than 0."),
  negotiable: z.boolean(),
  condition: z.enum(["New", "Fairly Used"]),
  pickupLocation: z.string().min(2, "Pickup location is required."),
});

function CreatePage() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      description: "",
      image: "",
      price: "",
      negotiable: false,
      condition: "New",
      pickupLocation: "",
    },
  });

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setSelectedFile(file);
      form.setValue("image", file, { shouldValidate: true });
    }
  };

  const removeImage = () => {
    setPreview(null);
    setSelectedFile(null);
    form.setValue("image", undefined);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  // 2. Define a submit handler.
  const onSubmit = (values) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    // Do something with the form values.
    setProducts([...products, values]);
    console.log("Form Data:", values);
    router.push("/kasuwa");
  };

  return (
    <Container>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="productName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter product name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe your product..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Image</FormLabel>
                <div
                  {...getRootProps()}
                  className="border-dashed border-2 border-gray-300 p-6 text-center cursor-pointer hover:bg-gray-100"
                >
                  <Input {...getInputProps()} />
                  {preview ? (
                    <div className="flex flex-col items-center gap-2">
                      <Image
                        src={preview}
                        alt="Preview"
                        width={200}
                        height={200}
                        className="rounded-md"
                      />
                      <Button variant={"destructive"} onClick={removeImage}>
                        Remove image
                      </Button>
                    </div>
                  ) : (
                    <p>Drag & drop an image, or click to select a file</p>
                  )}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-16 items-center">
            <div>
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter price"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="negotiable"
                render={({ field }) => (
                  <FormItem className="flex">
                    <FormLabel>Negotiable</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="condition"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Condition</FormLabel>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <RadioGroupItem value="New" /> New
                      </label>
                      <label className="flex items-center gap-2">
                        <RadioGroupItem value="Fairly Used" /> Fairly Used
                      </label>
                    </div>
                  </FormControl>
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pickupLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </Container>
  );
}

export default CreatePage;
