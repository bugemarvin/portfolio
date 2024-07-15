import React, { useState } from "react";
import emailjs from "emailjs-com";
import emailjsConfig from "./emailjsConfig";
import './contactForm.css';
import { FormControl, FormLabel, Input, useToast, Button, Textarea, VStack } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .send(
        "default_service",
        emailjsConfig.templateId,
        {
          name,
          email,
          message,
        },
        emailjsConfig.userId,
      )
      .then(
        (response) => {
          if (response){
            setIsSubmitting(false);
            toast({
              title: "Email sent successfully!",
              description: response.text,
              status: "info",
              colorScheme: "primary",
              duration: 5000,
              isClosable: true,
              position: "top-right",
            });
            setName("");
            setEmail("");
            setMessage("");
          }
        },
        (error) => {
          if (error){
            setIsSubmitting(false);
            toast({
              title: "Error sending email!",
              description: error.text,
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "top-right",
            });
        }
      });
      
  };

  return (
    <form onSubmit={handleSubmit} className="Contact-form">
      <VStack gap={12} w={'100%'}>
        <FormControl id="name" isRequired w={'100%'}>
          <FormLabel mb={6}>Name</FormLabel>
          <Input
            type="text"
            value={name}
            placeholder="Name"
            required
            w={'100%'}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired w={'100%'}>
          <FormLabel mb={6}>Email</FormLabel>
          <Input
            type="email"
            value={email}
            required
            placeholder="Email"
            w={'100%'}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="message" isRequired  w={'100%'}>
          <FormLabel mb={6}>Message</FormLabel>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Enter your message here ...'
            w={'100%'}
            className="Msg"
          />
        </FormControl>
        <Button
          variant='solid'
          type="submit"
        >
          {isSubmitting ? <Spinner size={16} color='white' />: "Send"}
        </Button>
      </VStack>
    </form>
  );
}
