"use client";
import React from "react";
import emailjs from "@emailjs/browser";

// export const ContactUs = () => {
//   const form = useRef<HTMLFormElement>(null);

//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!form.current) return;

//     emailjs
//       .sendForm(
//         "service_jkey46b",
//         "template_s3u8tqp",
//         form.current,
//         "YM9zqCMorDLfTxNVn",
//       )
//       .then(
//         function (response) {
//           console.log("SUCCESS!", response.status, response.text);
//         },
//         function (error) {
//           console.log("FAILED...", error);
//         },
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <div className="g-recaptcha" data-sitekey="your_site_key"></div>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactUs() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });
  const [successFull, setSuccessFull] = React.useState(false);
  const [isSending, setIsSending] = React.useState(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsSending(true);

    emailjs
      .send("service_jkey46b", "template_s3u8tqp", values, "YM9zqCMorDLfTxNVn")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        },
      )
      .finally(() => {
        setSuccessFull(true);
        form.reset();
        setIsSending(false);
      });
  }

  return (
    <div className="mx-auto my-4 max-w-lg rounded-md border p-4 shadow-md ">
      <Form {...form}>
        <h2 className="my-4 text-2xl font-semibold">Contact Us</h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input placeholder="Etienne" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="formation.etienne.re@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <textarea
                    className="w-full rounded-md border border-gray-300 p-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <div className="g-recaptcha" data-sitekey="your_site_key"></div> */}
          <Button type="submit" disabled={isSending}>
            Envoyer
          </Button>
          {successFull && (
            <FormMessage className="text-primary">
              Votre message a bien été envoyé.
            </FormMessage>
          )}
        </form>
      </Form>
    </div>
  );
}
