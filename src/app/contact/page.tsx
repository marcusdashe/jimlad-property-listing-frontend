"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, MapPin, Phone, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log(values);

    setIsSubmitting(false);

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });

    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
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
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us what's on your mind..."
                          className="resize-none"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                      <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                      </>
                  ) : (
                      "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground rounded-full p-3">
                    <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Our Office</h3>
                  <p className="text-muted-foreground">123 Luxury Lane, Victoria Island, Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground rounded-full p-3">
                    <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">contact@jimladproperties.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground rounded-full p-3">
                    <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">(+234) 801 234 5678</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
