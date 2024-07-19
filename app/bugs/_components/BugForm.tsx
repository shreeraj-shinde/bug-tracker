"use client";

import { ErrorMessage, Spinner } from "@/app/components";
import { bugSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bug } from "@prisma/client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
type BugFormData = z.infer<typeof bugSchema>;

const BugForm = ({ bug }: { bug?: Bug }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BugFormData>({
    resolver: zodResolver(bugSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      await axios.post("/api/bugs", data);
      router.push("/bugs");
    } catch (error) {
      setIsSubmitting(false);
      setError("Please Fill the fields correctly");
    }
  });

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-5" onSubmit={onSubmit}>
        <TextField.Root
          defaultValue={bug?.title}
          placeholder="Title"
          {...register("title")}
        />
        {/* IF Error Exists */}
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <Controller
          name="description"
          control={control}
          defaultValue={bug?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button disabled={isSubmitting}>
          Submit New Bug
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default BugForm;
