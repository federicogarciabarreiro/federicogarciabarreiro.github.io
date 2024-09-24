import { useState, useEffect, FormEvent } from "react";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Toaster } from "sonner";
import { toast } from "sonner";

import { CircleCheckSVG, CircleXSVG } from "./ui/icons";
const MAIL_KEY = process.env.NEXT_PUBLIC_MAIL_KEY;

export const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [isInvalidName, setIsInvalidName] = useState<boolean>(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState<boolean>(false);
  const [isInvalidMessage, setIsInvalidMessage] = useState<boolean>(false);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (name !== "") setIsInvalidName(false);
    if (
      email.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    )
      setIsInvalidEmail(false);
    if (message !== "") setIsInvalidMessage(false);
  }, [name, email, message]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "") setIsInvalidName(true);
    if (email === "") setIsInvalidEmail(true);
    if (message === "") setIsInvalidMessage(true);

    if (!name || !email || !message) {
      return;
    }

    fetch(`https://formcarry.com/s/${MAIL_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name: name, email: email, message: message }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  };

  if (error) {
    toast("El correo no se ha enviado.", {
      className: "my-classname",
      duration: 3000,
      icon: <CircleXSVG />,
    });
  }

  if (submitted) {
    toast("Correo enviado correctamente.", {
      className: "my-classname",
      duration: 3000,
      icon: <CircleCheckSVG />,
    });
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2 className="text-3xl font-bold">¡Contactame!</h2>
      <p className="text-0.5xl font-bold text-center">
        Si estas interesado en escribirme puedes hacerlo en el siguiente panel.
      </p>
      <Input
        id="name"
        type="text"
        label="Nombre"
        placeholder="Mi nombre"
        isInvalid={isInvalidName}
        value={name}
        onChange={(e) => setName(e.target.value)}
        errorMessage={isInvalidName && "Ingresa tu nombre."}
      />
      <Input
        type="email"
        name="email"
        id="email"
        label="Correo electronico"
        placeholder="minombre@ejemplo.com"
        isInvalid={isInvalidEmail}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={isInvalidEmail && "Ingrese un correo electronico valido."}
      />
      <Textarea
        id="message"
        type="text"
        label="Mensaje"
        placeholder="Escribe aqui..."
        minRows={4}
        isInvalid={isInvalidMessage}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        errorMessage={isInvalidMessage && "Escribe tu mensaje."}
      />
      <Button type="submit">Enviar</Button>

      <Toaster theme="dark" />
    </form>
  );
};
