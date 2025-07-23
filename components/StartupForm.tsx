"use client";

import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { StartupFromType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { startupFormSchema } from "@/schema/StartupFormSchema";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { useActionState, useState } from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { useRouter } from "next/router";
// import { createPitch } from "@/lib/actions";

const StartupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<StartupFromType>({ resolver: zodResolver(startupFormSchema) });

  const [pitch, setPitch] = useState("");
  const [errorPitch, setErrorPitch] = useState("");
  // const router = useRouter()

  const onSubmit = async (data: StartupFromType) => {
    try {
      console.log(data);

      if (pitch.length < 10) {
        setErrorPitch("Patch must be at least 10 characters long.");
        toast.error("Patch is required", {
          description: "Your item is now live.",
          style: { background: "#ff5555", color: "#fff" },
          position: "top-center",
        });

        return;
      }
      setErrorPitch("");

      // const result = await createPitch(data ,pitch);

    //   if (result.status === "SUCCESS") {
    //   toast.success("Success",{
    //     description: "Your startup pitch has been created successfully",
    //   });

    //   router.push(`/startup/${result._id}`);
    //   return result
    //   } else {

    // toast.error("Error", {
    //   description: "Please check your inputs and try again",
    //   style: { background: "#ff5555", color: "#fff" },
    // });
    //   }
    } catch (error) {

    toast.error("Error", {
      description: "Please check your inputs and try again",
      style: { background: "#ff5555", color: "#fff" },
      position: "top-center",
    });

  }}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          error={errors.title}
          registration={register("title")}
          id="title"
          name="title"
          className="startup-form_input"
          placeholder="Startup Title"
        />
      </div>
      <div>
        <label htmlFor="description" className="startup-form_label">
          Description{" "}
        </label>
        <Textarea
          error={errors.description}
          registration={register("description")}
          id="description"
          name="description"
          className="startup-form_textarea"
          placeholder="startup description"
        />
      </div>
      <div>
        <label htmlFor="category" className="startup-form_label">
          category
        </label>
        <Input
          error={errors.category}
          registration={register("category")}
          id="category"
          name="category"
          className="startup-form_input"
          placeholder="Startup Category (Tech , Health , education ... )"
        />
      </div>
      <div>
        <label htmlFor="link" className="startup-form_label">
          image URL
        </label>
        <Input
          registration={register("image")}
          error={errors.image}
          id="link"
          name="image"
          className="startup-form_input"
          placeholder="Startup image Url"
        />
      </div>

      <div data-color-mode="light">
        <label className="startup-form_label">Pitch</label>
        <MDEditor
          value={pitch}
          onChange={(val) => setPitch(val || "")}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder:
              "Briefly describe your idea and what problem it solves",
            required: true,
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />
        {errorPitch && <span className="startup-form_error">{errorPitch}</span>}
      </div>

      <Button
        type="submit"
        className="startup-form_btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting..." : "submit your pitch"}
        <Send className="size-6 ml-2" />
      </Button>
    </form>
  );
};

export default StartupForm;
