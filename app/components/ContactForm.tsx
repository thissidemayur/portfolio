"use client";

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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

// Zod validation schema
const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Please enter at least 2 characters" }),
  email: z.string().email({ message: "Enter a valid email" }),
  projectDetails: z
    .string()
    .min(20, { message: "Describe your project in at least 20 characters" }),
  budget: z.enum(["₹10k – ₹25k", "₹25k – ₹40k", "₹40k – ₹75k", "₹75k – ₹100k"]),
  timeline: z.enum(["2-3 weeks", "3-4 weeks", "1-2 months"]),
  letsTalk: z.enum(["Let's talk", "I like the above ranges"]),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      projectDetails: "",
      budget: "₹10k – ₹25k",
      timeline: "2-3 weeks",
      letsTalk: "Let's talk",
    },
  });

  // Handle WhatsApp submission
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const whatsappMessage = `Hi Mayur,%0A%0AI am interested in working with you. Here are my details:%0A
Full Name: ${data.fullName}%0A
Email: ${data.email}%0A
Project Details: ${data.projectDetails}%0A
Budget: ${data.budget}%0A
Timeline: ${data.timeline}%0A
Preference: ${data.letsTalk}%0A%0APlease get back to me.`;

    window.open(`https://wa.me/916283750133?text=${whatsappMessage}`, "_blank");
  };

  // Email link fallback
  const onEmailClick = () => {
    const subject = encodeURIComponent("New Project Inquiry");
    const body = encodeURIComponent(
      "Hi Mayur,\n\nI am interested in working with you. Please get back to me."
    );
    window.open(
      `mailto:thissidemayur@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <Card className="max-w-3xl mx-auto p-6 rounded-xl shadow-md mt-12">
      <h1 className="text-3xl font-bold mb-2 text-gray-700 dark:text-slate-300">
        Let’s Build Something Together
      </h1>
      <p className="text-muted-foreground mb-8">
        Fill out this simple form, or reach me directly via WhatsApp or Email. I
        respond quickly and keep everything clear and easy.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <FormField
            name="fullName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>
                  Your name so I know who I’m talking to
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your email to get a fast reply
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Project Details */}
          <FormField
            name="projectDetails"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Details</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe your project..." {...field} />
                </FormControl>
                <FormDescription>
                  Tell me what you want to build and why
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Budget */}
          <FormField
            name="budget"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>{field.value}</SelectTrigger>
                    <SelectContent>
                      <SelectItem value="₹10k – ₹25k">₹10k – ₹25k</SelectItem>
                      <SelectItem value="₹25k – ₹40k">₹25k – ₹40k</SelectItem>
                      <SelectItem value="₹40k – ₹75k">₹40k – ₹75k</SelectItem>
                      <SelectItem value="₹75k – ₹100k">₹75k – ₹100k</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Choose a budget that works for you
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Timeline */}
          <FormField
            name="timeline"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Timeline</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>{field.value}</SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2-3 weeks">2-3 weeks</SelectItem>
                      <SelectItem value="3-4 weeks">3-4 weeks</SelectItem>
                      <SelectItem value="1-2 months">1-2 months</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  How soon you want the project done
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Lets Talk / Preference */}
          <FormField
            name="letsTalk"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>How should we proceed?</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>{field.value}</SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Let's talk">
                        Let&apos;s talk
                      </SelectItem>
                      <SelectItem value="I like the above ranges">
                        I like the above ranges
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Pick if you want to discuss or agree with the options
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {/* Email Button */}
            <Button
              onClick={onEmailClick}
              type="button"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </Button>

            {/* WhatsApp Button */}
            <Button
              onClick={form.handleSubmit(onSubmit)}
              type="button"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-md transition-all duration-200"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp Me
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
