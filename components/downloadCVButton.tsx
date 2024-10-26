import React, { useRef } from 'react';
import { Button } from "@nextui-org/button";
import confetti from 'canvas-confetti';

const DownloadCVButton = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleConfetti = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: x / window.innerWidth, y: y / window.innerHeight }
      });
    }
  };

  return (
    <a href="/assets/Profile.pdf" download>
      <Button
        ref={buttonRef}
        disableRipple
        className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
        size="lg"
        onPress={handleConfetti}
      >
        ¡Descargar CV!
      </Button>
    </a>
  );
};

export default DownloadCVButton;
