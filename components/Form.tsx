import { useState, useEffect, FormEvent } from "react";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Toaster } from "sonner";
import { toast } from "sonner";
import { CircleCheckSVG, CircleXSVG } from "./ui/icons";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidMessage, setIsInvalidMessage] = useState(false);
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const nameInvalid = !name;
    const emailInvalid = !isValidEmail(email);
    const messageInvalid = !message;

    setIsInvalidName(nameInvalid);
    setIsInvalidEmail(emailInvalid);
    setIsInvalidMessage(messageInvalid);

    if (nameInvalid || emailInvalid || messageInvalid) return;

    try {
      const response = await fetch(
        "https://servidor-web-three.vercel.app/api/sendEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        resetForm();
      } else {
        const res = await response.json();
        setError(res.message || "Ocurrió un error inesperado.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setError("Error al enviar el correo.");
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setError("");
  };

  useEffect(() => {
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
  }, [error, submitted]);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold">¡Contactame!</h2>
      <p className="text-0.5xl font-bold text-center">
        Si estás interesado en escribirme, puedes hacerlo en el siguiente panel.
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
        id="email"
        label="Correo electrónico"
        placeholder="minombre@ejemplo.com"
        isInvalid={isInvalidEmail}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={isInvalidEmail && "Ingrese un correo electrónico válido."}
      />
      <Textarea
        id="message"
        label="Mensaje"
        placeholder="Escribe aquí..."
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
