import { startupFormSchema } from "@/schema/StartupFormSchema";
import z from "zod";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";


export interface Author {
  _id: number;
  name: string;
  username: string;
  image: string;
  email:string,
  bio:string
}

export interface StartupTypeCard {
  _id: number;
  _createAt: Date;
  views: number;
  author: Author;
  description: string;
  image: string;
  category: string;
  title: string;
  patch:string
}

export type Input = {
  error?: FieldError;
  registration: UseFormRegisterReturn;
} & React.ComponentProps<"input">;


export type TextArea = {
   error?: FieldError;
  registration: UseFormRegisterReturn;
}  & React.ComponentProps<"textarea">


export type StartupFromType = z.infer<typeof startupFormSchema >


