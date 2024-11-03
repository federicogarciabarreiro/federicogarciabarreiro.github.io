import * as React from "react";

import { IconSvgProps } from "@/types/IconSVGProps";
import { useIconColor } from "./useIconColor";

import { useState, useEffect } from "react";

export const Logo: React.FC<IconSvgProps> = React.memo(({
  size = 36,
  height,
  color,
  ...props
}) => {
  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (<svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || height}
    height={size || height}
    viewBox="0 0 322.000000 322.000000"
    preserveAspectRatio="xMidYMid meet"
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "scale(1)" : "scale(0.9)",
      transition: "opacity 0.5s ease, transform 0.5s ease"
    }}
    {...props}
  >
    <g
      transform="translate(0.000000,322.000000) scale(0.100000,-0.100000)"
      fill={iconColor}
      stroke="none"
    >
      <path d="M1322 2656 c-564 -108 -944 -619 -901 -1212 18 -251 106 -477 254
      -657 66 -80 88 -88 41 -14 -48 74 -109 200 -141 287 -151 419 -64 860 229
      1155 173 174 392 265 638 265 162 0 264 -36 352 -124 60 -59 52 -66 -52 -43
      -107 24 -191 30 -279 17 -419 -57 -701 -402 -680 -830 10 -202 70 -363 192
      -517 237 -301 639 -427 1025 -322 336 91 620 372 733 724 47 146 52 183 52
      355 0 139 -4 177 -22 240 -23 79 -52 155 -57 149 -2 -2 3 -44 11 -94 18 -113
      12 -338 -12 -450 -9 -44 -34 -124 -55 -178 -121 -302 -363 -515 -670 -588 -78
      -19 -270 -17 -349 4 -94 25 -230 103 -210 121 2 2 38 -1 79 -6 92 -12 253 -4
      340 16 311 73 535 314 597 641 20 104 13 271 -17 380 -89 328 -362 586 -710
      670 -93 22 -298 28 -388 11z m342 -436 c107 -27 190 -73 261 -145 158 -159
      200 -398 104 -587 -28 -54 -113 -143 -167 -175 -98 -58 -229 -77 -341 -51 -28
      6 -54 8 -58 4 -14 -14 78 -86 130 -101 104 -31 239 -11 358 51 132 70 252 232
      290 394 32 136 6 321 -67 467 -29 60 -31 64 -8 38 39 -48 82 -143 105 -234 18
      -70 21 -105 17 -200 -7 -187 -63 -315 -193 -446 -168 -169 -413 -225 -631
      -144 -75 28 -188 111 -233 172 -81 109 -113 202 -113 327 0 209 120 380 312
      446 42 15 82 19 173 19 69 -1 116 3 114 9 -8 24 -107 67 -177 75 -101 13 -178
      -1 -279 -50 -203 -100 -320 -305 -321 -563 0 -49 -2 -87 -5 -84 -3 3 -10 41
      -15 85 -30 262 113 529 343 643 142 71 262 86 401 50z"/>
    </g>
  </svg>)
});

export const InstagramIcon: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease"
      }}
      {...props}
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 6L18 6.01"
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});


export const LinkedinIcon: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease"
      }}
      {...props}
    >
      <path
        d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-3v-10.5h3v10.5zm-1.5-12c-.967 0-1.75-.783-1.75-1.75s.783-1.75 1.75-1.75 1.75.783 1.75 1.75-.783 1.75-1.75 1.75zm13.5 12h-3v-5.5c0-3.037-4-2.804-4 0v5.5h-3v-10.5h3v1.75c1.396-2.586 7-2.777 7 2.476v6.274z"
        fill={iconColor}
      />
    </svg>
  );
});

export const GithubIcon: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease"
      }}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill={iconColor}
        fillRule="evenodd"
      />
    </svg>
  );
});

export const MoonFilledIcon = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}: IconSvgProps) => {
  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease"
      }}
      {...props}
    >
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
        fill={iconColor}
      />
    </svg>
  )
});

export const SunFilledIcon = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}: IconSvgProps) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease"
      }}
      {...props}
    >
      <g fill={iconColor}>
        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
      </g>
    </svg>
  )
});

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);



export const VSCodeIcon: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 32 32"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "90%",
        height: "90%"
      }}
      {...props}
    >
      <path
        d="M17.319 9.414c-2.444 2.444-4.5 4.435-4.597 4.435-.081 0-1.424-.987-2.962-2.185L6.976 9.479 4.71 10.612v11.331l2.266 1.133 2.574-2.007c1.425-1.117 2.736-2.12 2.914-2.234.324-.194.647.097 4.84 4.274l4.484 4.484 2.752-1.117 2.752-1.101V7.18l-2.104-.842c-1.149-.47-2.396-.955-2.768-1.101l-.664-.259-4.435 4.435zm4.387 6.864c0 2.493-.032 4.532-.097 4.532-.227 0-5.73-4.435-5.682-4.581.049-.178 5.471-4.468 5.666-4.468.065-.016.114 2.023.114 4.516zM8.837 14.659l1.619 1.619-1.619 1.619c-.89.89-1.667 1.619-1.732 1.619-.081 0-.13-1.457-.13-3.237s.048-3.238.13-3.238c.065 0 .842.729 1.732 1.619z"
        fill={iconColor}
      />
    </svg>
  );
});

export const UnrealIcon: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "95%",
        height: "95%"
      }}
      {...props}
    >
      <path
        d="M2 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2 10 10 0 002 12m3.24 6.76A9.493 9.493 0 012.44 12c0-2.55.99-4.95 2.8-6.76A9.493 9.493 0 0112 2.44c2.55 0 4.95.99 6.76 2.8a9.493 9.493 0 012.8 6.76c0 2.55-.99 4.95-2.8 6.76a9.493 9.493 0 01-6.76 2.8c-2.55 0-4.95-.99-6.76-2.8M6.35 9.5c-2.01 2.29-1.62 4.18-1.62 4.18s.55-1.3 1.88-2.68c.64-.63 1.11-.85 1.43-.85.36 0 .53.26.53.5v4.64c0 .46-.3.56-.57.55-.23 0-.45-.08-.45-.08C8.92 17.73 12.19 18 12.19 18l1.44-1.5h.04L15 17.63c2.39-1.42 3.55-4.05 3.55-4.05-1.05 1.12-1.76 1.39-2.16 1.38-.36 0-.51-.21-.51-.21-.01-.1-.06-5.85.01-5.85.42-.77 1.74-2.34 1.74-2.34-2.47.49-3.82 2.1-3.82 2.1-.4-.31-1.22-.26-1.22-.26.38.21.76.81.76 1.32v4.93s-.85.73-1.47.73c-.38 0-.61-.21-.74-.38-.09-.12-.14-.21-.14-.21v-6.1c-.07.06-.18.11-.29.11-.14-.01-.28-.07-.37-.27-.08-.15-.12-.38-.12-.7 0-1.13 1.28-1.87 1.28-1.87-1.63.43-3.14 1.26-5.15 3.54"
        fill={iconColor}
      />
    </svg>
  );
});

export const CSharpIcon: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "95%",
        height: "95%"
      }}
      {...props}
    >
      <path
        d="M11.5 15.97l.41 2.44c-.26.14-.68.27-1.24.39-.57.13-1.24.2-2.01.2-2.21-.04-3.87-.7-4.98-1.96C2.56 15.77 2 14.16 2 12.21c.05-2.31.72-4.08 2-5.32C5.32 5.64 6.96 5 8.94 5c.75 0 1.4.07 1.94.19s.94.25 1.2.4l-.58 2.49-1.06-.34c-.4-.1-.86-.15-1.39-.15-1.16-.01-2.12.36-2.87 1.1-.76.73-1.15 1.85-1.18 3.34 0 1.36.37 2.42 1.08 3.2.71.77 1.71 1.17 2.99 1.18l1.33-.12c.43-.08.79-.19 1.1-.32M13.89 19l.61-4H13l.34-2h1.5l.32-2h-1.5L14 9h1.5l.61-4h2l-.61 4h1l.61-4h2l-.61 4H22l-.34 2h-1.5l-.32 2h1.5L21 15h-1.5l-.61 4h-2l.61-4h-1l-.61 4h-2m2.95-6h1l.32-2h-1l-.32 2z"
        fill={iconColor}
      />
    </svg>
  );
});


export const UnityIcon: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "90%",
        height: "90%"
      }}
      {...props}
    >
      <path
        d="M10.4 17.8l1.21 2.07L19.77 22 22 14.08 20.72 12 22 10l-2.23-8-8.16 2.13L10.4 6.2H8L2 12l6 5.81zm9.92-5.8l-1.73 6L15 12l3.59-6zM10.6 6.54L16.84 5l-3.59 6H6.08zM13.27 13l3.59 6-6.26-1.55L6.1 13z"
        fill={iconColor}
      />
    </svg>
  );
});


export const GodotIcon: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%"
      }}
      {...props}
    >
      <path
        d="M9.56.683c-1.096.244-2.181.583-3.199 1.095.023.898.081 1.758.2 2.632-.396.253-.81.47-1.179.766-.375.288-.758.564-1.097.901a21.147 21.147 0 00-2.135-1.24C1.353 5.692.608 6.618 0 7.654c.458.74.936 1.435 1.452 2.094h.014v6.356c.012 0 .023 0 .035.003l3.896.376a.42.42 0 01.378.39l.12 1.72 3.4.241.234-1.587a.419.419 0 01.415-.358h4.111c.208 0 .385.152.415.358l.234 1.587 3.4-.242.12-1.72a.42.42 0 01.377-.389l3.896-.376c.012 0 .023-.003.035-.003v-.507h.002V9.75h.014c.516-.66.994-1.353 1.452-2.094-.608-1.036-1.354-1.961-2.151-2.82-.74.372-1.457.793-2.135 1.242-.34-.337-.721-.613-1.096-.901-.37-.296-.785-.514-1.179-.767.117-.874.175-1.734.2-2.632-1.018-.512-2.102-.85-3.199-1.095a22.815 22.815 0 00-1.187 2.312 8.145 8.145 0 00-1.246-.099h-.016c-.417.005-.832.03-1.246.1A22.6 22.6 0 009.557.682zM6.476 9.989a2.349 2.349 0 11.001 4.697 2.349 2.349 0 010-4.697zm11.05 0a2.349 2.349 0 11-.001 4.697 2.349 2.349 0 010-4.697zm-10.824.93a1.559 1.559 0 100 3.118 1.559 1.559 0 000-3.118zm10.598 0a1.558 1.558 0 100 3.116 1.558 1.558 0 000-3.116zM12 11.372c.417 0 .757.308.757.687v2.162c0 .38-.339.687-.757.687s-.756-.308-.756-.687V12.06c0-.379.339-.687.756-.687zm-10.54 5.574c.001.377.005.79.005.871 0 3.702 4.695 5.48 10.527 5.5h.014c5.832-.02 10.526-1.798 10.526-5.5 0-.084.005-.495.007-.87l-3.502.338-.121 1.729a.421.421 0 01-.39.39l-4.18.296a.42.42 0 01-.416-.358l-.238-1.614h-3.386l-.238 1.614a.42.42 0 01-.445.357l-4.151-.296a.42.42 0 01-.39-.39l-.12-1.729-3.504-.337z"
        fill={iconColor}
      />
    </svg>
  );
});

export const CPPIcon: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "90%",
        height: "90%"
      }}
      {...props}
    >
      <path
       d="M10.5 15.97l.41 2.44c-.26.14-.68.27-1.24.39-.57.13-1.24.2-2.01.2-2.21-.04-3.87-.7-4.98-1.96C1.56 15.77 1 14.16 1 12.21c.05-2.31.72-4.08 2-5.32C4.32 5.64 5.96 5 7.94 5c.75 0 1.4.07 1.94.19s.94.25 1.2.4l-.58 2.49-1.06-.34c-.4-.1-.86-.15-1.39-.15-1.16-.01-2.12.36-2.87 1.1-.76.73-1.15 1.85-1.18 3.34 0 1.36.37 2.42 1.08 3.2.71.77 1.71 1.17 2.99 1.18l1.33-.12c.43-.08.79-.19 1.1-.32M11 11h2V9h2v2h2v2h-2v2h-2v-2h-2v-2m7 0h2V9h2v2h2v2h-2v2h-2v-2h-2v-2z"
        fill={iconColor}
      />
    </svg>
  );
});

export const GDScriptIcon: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 384 512"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%",
      }}
      {...props}
    >
       <path 
       d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zm192 0v128h128L256 0zM153 289l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L71 337c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zm112-34l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
       fill={iconColor}/>

    </svg>
  );
});

export const GMakerIcon: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 32 32"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%",
      }}
      {...props}
    >
       <path 
       d="M 14.216 24.167 h -0.989 a 3.24 3.24 0 0 1 -2.811 -1.649 L 6.667 16 l 4.681 -8.167 H 16.2 l -4.34 8.176 l 0.057 0.032 L 13.936 19.5 H 16.82 Z M 8.455 10.535 l -1.27 -2.21 a 1 1 0 0 0 -0.859 -0.492 H 2 l 4 6.992 Z M 21.54 9.482 a 3.239 3.239 0 0 0 -2.812 -1.649 H 17.523 L 15.045 12.5 H 18.02 L 20.083 16 l -4.531 8.167 h 5.056 L 25.333 16 Z M 26 17.172 l -2.47 4.27 l 1.283 2.233 a 1 1 0 0 0 0.859 0.492 H 30 Z"
       fill={iconColor}/>
    </svg>
  );
});

export const GameIcon: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 512 512"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "80%",
        height: "80%",
      }}
      {...props}
    >
       <path 
        d="M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 00352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 00-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0018.64 3.22c29.93 0 53.93-24.93 70.33-45.34 18.53-23.1 40.22-34.82 107.34-34.82 59.95 0 84.76 8.13 106.19 34.82 13.47 16.78 26.2 28.52 38.9 35.91 16.89 9.82 33.77 12 50.16 6.37 25.82-8.81 40.62-32.1 44-69.24 2.57-28.48-1.39-65.89-12.12-114.37zM208 240h-32v32a16 16 0 01-32 0v-32h-32a16 16 0 010-32h32v-32a16 16 0 0132 0v32h32a16 16 0 010 32zm84 4a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-19.95A20 20 0 01336 288zm0-88a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20z"
       fill={iconColor}/>

    </svg>
  );
});
export const WEBFrontendIcon 
 : React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 384 512"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%",
      }}
      {...props}
    >
       <path 

fill={iconColor}/>

    </svg>
  );
});
export const 
ReactIcon 
 : React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 30 30"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "85%",
        height: "85%",
      }}
      {...props}
    >
       <path 
        d="M 10.679688 4.1816406 C 10.068687 4.1816406 9.502 4.3184219 9 4.6074219 C 7.4311297 5.5132122 6.8339651 7.7205462 7.1503906 10.46875 C 4.6127006 11.568833 3 13.188667 3 15 C 3 16.811333 4.6127006 18.431167 7.1503906 19.53125 C 6.8341285 22.279346 7.4311297 24.486788 9 25.392578 C 9.501 25.681578 10.067687 25.818359 10.679688 25.818359 C 11.982314 25.818359 13.48785 25.164589 15 24.042969 C 16.512282 25.164589 18.01964 25.818359 19.322266 25.818359 C 19.933266 25.818359 20.499953 25.681578 21.001953 25.392578 C 22.570814 24.486793 23.167976 22.279432 22.851562 19.53125 C 25.388297 18.431178 27 16.81094 27 15 C 27 13.188667 25.387299 11.568833 22.849609 10.46875 C 23.165872 7.7206538 22.56887 5.5132122 21 4.6074219 C 20.499 4.3174219 19.932312 4.1816406 19.320312 4.1816406 C 18.017686 4.1816406 16.51215 4.8354109 15 5.9570312 C 13.487763 4.8354109 11.981863 4.1816406 10.679688 4.1816406 z M 10.679688 5.9316406 C 11.461321 5.9316406 12.49496 6.3472486 13.617188 7.1171875 C 12.95737 7.7398717 12.311153 8.4479321 11.689453 9.2363281 C 10.681079 9.3809166 9.7303472 9.5916908 8.8496094 9.8554688 C 8.8448793 9.7943902 8.8336776 9.7303008 8.8300781 9.6699219 C 8.7230781 7.8899219 9.114 6.5630469 9.875 6.1230469 C 10.1 5.9930469 10.362688 5.9316406 10.679688 5.9316406 z M 19.320312 5.9316406 C 19.636312 5.9316406 19.9 5.9930469 20.125 6.1230469 C 20.886 6.5620469 21.276922 7.8899219 21.169922 9.6699219 C 21.166295 9.7303008 21.155145 9.7943902 21.150391 9.8554688 C 20.2691 9.5915252 19.317669 9.3809265 18.308594 9.2363281 C 17.686902 8.4480417 17.042616 7.7397993 16.382812 7.1171875 C 17.504962 6.3473772 18.539083 5.9316406 19.320312 5.9316406 z M 15 8.2285156 C 15.27108 8.4752506 15.540266 8.7360345 15.8125 9.0214844 C 15.542718 9.012422 15.274373 9 15 9 C 14.726286 9 14.458598 9.0124652 14.189453 9.0214844 C 14.461446 8.7363308 14.729174 8.4750167 15 8.2285156 z M 15 10.75 C 15.828688 10.75 16.614128 10.796321 17.359375 10.876953 C 17.813861 11.494697 18.261774 12.147811 18.681641 12.875 C 19.084074 13.572033 19.439938 14.285488 19.753906 15 C 19.439896 15.714942 19.084316 16.429502 18.681641 17.126953 C 18.263078 17.852044 17.816279 18.500949 17.363281 19.117188 C 16.591711 19.201607 15.800219 19.25 15 19.25 C 14.171312 19.25 13.385872 19.203679 12.640625 19.123047 C 12.186139 18.505303 11.738226 17.854142 11.318359 17.126953 C 10.915684 16.429502 10.560194 15.714942 10.246094 15 C 10.559972 14.285488 10.915926 13.572033 11.318359 12.875 C 11.737083 12.149909 12.183612 11.499051 12.636719 10.882812 C 13.408289 10.798393 14.199781 10.75 15 10.75 z M 19.746094 11.291016 C 20.142841 11.386804 20.524253 11.490209 20.882812 11.605469 C 20.801579 11.97252 20.702235 12.346608 20.589844 12.724609 C 20.461164 12.483141 20.336375 12.240903 20.197266 12 C 20.054139 11.752196 19.895244 11.529558 19.746094 11.291016 z M 10.251953 11.292969 C 10.103305 11.530776 9.9454023 11.752991 9.8027344 12 C 9.6636666 12.240944 9.5387971 12.483106 9.4101562 12.724609 C 9.29751 12.345829 9.1965499 11.971295 9.1152344 11.603516 C 9.4803698 11.48815 9.86083 11.385986 10.251953 11.292969 z M 7.46875 12.246094 C 7.6794464 13.135714 7.9717297 14.057918 8.3476562 14.998047 C 7.9725263 15.935943 7.6814729 16.856453 7.4707031 17.744141 C 5.7292327 16.903203 4.75 15.856373 4.75 15 C 4.75 14.121 5.701875 13.119266 7.296875 12.322266 C 7.3513169 12.295031 7.4131225 12.272692 7.46875 12.246094 z M 22.529297 12.255859 C 24.270767 13.096797 25.25 14.143627 25.25 15 C 25.25 15.879 24.298125 16.880734 22.703125 17.677734 C 22.648683 17.704969 22.586877 17.727308 22.53125 17.753906 C 22.32043 16.863764 22.030541 15.940699 21.654297 15 C 22.028977 14.062913 22.318703 13.142804 22.529297 12.255859 z M 15 13 C 13.895 13 13 13.895 13 15 C 13 16.105 13.895 17 15 17 C 16.105 17 17 16.105 17 15 C 17 13.895 16.105 13 15 13 z M 9.4101562 17.275391 C 9.5388794 17.516948 9.6655262 17.759008 9.8046875 18 C 9.9476585 18.247625 10.104915 18.470608 10.253906 18.708984 C 9.857159 18.613196 9.4757466 18.509791 9.1171875 18.394531 C 9.1984813 18.02725 9.2976676 17.653633 9.4101562 17.275391 z M 20.589844 17.277344 C 20.702364 17.655759 20.803517 18.02905 20.884766 18.396484 C 20.51963 18.51185 20.13917 18.614014 19.748047 18.707031 C 19.896695 18.469224 20.054598 18.247009 20.197266 18 C 20.336044 17.759557 20.461449 17.518344 20.589844 17.277344 z M 8.8496094 20.144531 C 9.7309004 20.408475 10.682331 20.619073 11.691406 20.763672 C 12.313288 21.552345 12.957085 22.261935 13.617188 22.884766 C 12.495042 23.654481 11.461272 24.070312 10.679688 24.070312 C 10.363687 24.070312 10.1 24.006953 9.875 23.876953 C 9.114 23.437953 8.7230781 22.112031 8.8300781 20.332031 C 8.8337424 20.271023 8.8447938 20.206253 8.8496094 20.144531 z M 21.150391 20.144531 C 21.155182 20.206253 21.166285 20.271023 21.169922 20.332031 C 21.276922 22.112031 20.886 23.436953 20.125 23.876953 C 19.9 24.006953 19.637312 24.070313 19.320312 24.070312 C 18.538728 24.070312 17.504958 23.654609 16.382812 22.884766 C 17.042964 22.261863 17.688542 21.552454 18.310547 20.763672 C 19.318921 20.619083 20.269653 20.408309 21.150391 20.144531 z M 14.1875 20.978516 C 14.457282 20.987578 14.725627 21 15 21 C 15.274373 21 15.542718 20.987578 15.8125 20.978516 C 15.540266 21.263964 15.27108 21.524765 15 21.771484 C 14.72892 21.524749 14.459734 21.263966 14.1875 20.978516 z"
        fill={iconColor}/>

    </svg>
  );
});

export const BootstrapIcon 
: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 384 512"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%",
      }}
      {...props}
    >
       <path 

fill={iconColor}/>

    </svg>
  );
});
export const HTMLIcon 
: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 512 512"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%",
      }}
      {...props}
    >
       <path 
d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501
H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213
l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133
h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62
l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32
l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013
v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"
fill={iconColor}/>

    </svg>
  );
});
export const CSSIcon
: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 512 512"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%",
      }}
      {...props}
    >
       <path 
d="M 204.064 46.682 v 22.018 h -56.302 V 0.501 h 56.302 v 24.13 h -32.172 v 22.051 H 204.064 Z M 261.941 24.631 h 22.492 V 0.501 h -56.308 c 0 0 0 12.112 0 24.13 c 7.533 7.533 11.461 11.139 22.356 22.034 c -6.369 0 -22.356 0.022 -22.356 0.021 v 22.014 h 56.308 V 46.682 L 261.941 24.631 Z M 341.746 24.631 h 22.49 V 0.501 H 307.93 c 0 0 0 12.112 0 24.13 c 7.531 7.533 11.461 11.139 22.355 22.034 c -6.365 0 -22.355 0.022 -22.355 0.021 v 22.014 h 56.307 V 46.682 L 341.746 24.631 Z M 438.395 101.112 l -34.203 370.486 l -148.193 39.9 l -148.196 -39.9 L 73.605 101.112 H 438.395 Z M 369.477 176.444 H 255.865 h -115.62 l 5.529 44.739 h 110.091 h 6.184 l -6.184 2.574 l -106.067 44.177 l 3.518 43.73 l 102.549 0.333 l 54.963 0.175 l -3.521 58.311 l -51.442 14.484 v -0.046 l -0.422 0.116 l -49.684 -12.542 l -3.015 -36.195 h -0.164 h -46.085 h -0.162 l 6.032 69.876 l 93.5 27.649 v -0.05 l 0.168 0.05 l 93 -27.146 L 361.1 267.935 H 255.865 h -0.26 l 0.26 -0.112 l 109.086 -46.639 L 369.477 176.444 Z"
fill={iconColor}/>

    </svg>
  );
});
export const JavascriptIcon 
: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "60%",
        height: "60%",
      }}
      {...props}
    >
       <path 
d="M 0 0 H 24 V 24 H 0 V 0 Z M 18.3467 20.1196 C 17.2343 20.1196 16.6053 19.5394 16.1219 18.7501 L 14.2891 19.8149 C 14.9512 21.123 16.3044 22.1211 18.3989 22.1211 C 20.5409 22.1211 22.136 21.0088 22.136 18.9783 C 22.136 17.0949 21.0541 16.2571 19.1379 15.4354 L 18.5741 15.1939 C 17.6065 14.7749 17.1874 14.501 17.1874 13.8244 C 17.1874 13.277 17.6061 12.8579 18.2667 12.8579 C 18.9143 12.8579 19.3314 13.131 19.7181 13.8244 L 21.4743 12.6968 C 20.7314 11.3901 19.7006 10.891 18.2667 10.891 C 16.2526 10.891 14.9638 12.1787 14.9638 13.8701 C 14.9638 15.7063 16.0449 16.5749 17.6724 17.2682 L 18.2362 17.5101 C 19.2648 17.96 19.8781 18.2339 19.8781 19.0072 C 19.8781 19.6526 19.2811 20.1196 18.3467 20.1196 Z M 9.60647 20.1055 C 8.83161 20.1055 8.50933 19.5741 8.15504 18.9455 L 6.31923 20.057 C 6.85104 21.1825 7.89676 22.117 9.70247 22.117 C 11.7009 22.117 13.0701 21.0541 13.0701 18.7189 V 11.0198 H 10.8149 V 18.6884 C 10.8149 19.8156 10.3474 20.1055 9.60647 20.1055 Z"
fill={iconColor}/>

    </svg>
  );
});
export const WEBBackendIcon 
: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 384 512"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%",
      }}
      {...props}
    >
       <path 

fill={iconColor}/>

    </svg>
  );
});
export const FastAPIIcon 
: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%",
      }}
      {...props}
    >
       <path 
d="M 12 0 C 5.375 0 0 5.375 0 12 c 0 6.627 5.375 12 12 12 c 6.626 0 12 -5.373 12 -12 c 0 -6.625 -5.373 -12 -12 -12 Z m -0.624 21.62 v -7.528 H 7.19 L 13.203 2.38 v 7.528 h 4.029 L 11.376 21.62 Z"
fill={iconColor}/>

    </svg>
  );
});
export const PythonIcon 
: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 16 16"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%",
      }}
      {...props}
    >
       <path 
d="M 5.79 1.574 h 3.866 c 0.14 0 0.252 0.11 0.252 0.246 v 5.186 a 0.25 0.25 0 0 1 -0.252 0.246 H 6.344 c -0.975 0 -1.766 0.77 -1.766 1.72 v 1.162 a 0.25 0.25 0 0 1 -0.253 0.243 H 1.867 a 0.25 0.25 0 0 1 -0.253 -0.246 V 6.177 a 0.25 0.25 0 0 1 0.252 -0.246 H 7.98 c 0.418 0 0.757 -0.33 0.757 -0.737 a 0.747 0.747 0 0 0 -0.757 -0.738 H 5.537 V 1.82 a 0.25 0.25 0 0 1 0.253 -0.246 Z m 5.632 2.592 V 1.82 c 0 -0.95 -0.79 -1.72 -1.766 -1.72 H 5.79 c -0.976 0 -1.767 0.77 -1.767 1.72 v 2.636 H 1.867 C 0.89 4.456 0.1 5.226 0.1 6.176 v 3.955 c 0 0.95 0.79 1.72 1.766 1.72 h 2.46 c 0.085 0 0.17 -0.006 0.252 -0.017 v 2.346 c 0 0.95 0.79 1.72 1.766 1.72 h 3.866 c 0.976 0 1.767 -0.77 1.767 -1.72 v -2.636 h 2.156 c 0.976 0 1.767 -0.77 1.767 -1.72 V 5.868 c 0 -0.95 -0.79 -1.72 -1.767 -1.72 h -2.458 c -0.086 0 -0.17 0.005 -0.253 0.017 Z m -5.33 5.974 V 8.994 a 0.25 0.25 0 0 1 0.252 -0.246 h 3.312 c 0.976 0 1.766 -0.77 1.766 -1.72 V 5.866 a 0.25 0.25 0 0 1 0.253 -0.243 h 2.458 c 0.14 0 0.253 0.11 0.253 0.246 v 3.954 a 0.25 0.25 0 0 1 -0.252 0.246 H 8.02 a 0.747 0.747 0 0 0 -0.757 0.737 c 0 0.408 0.339 0.738 0.757 0.738 h 2.442 v 2.636 a 0.25 0.25 0 0 1 -0.253 0.246 H 6.344 a 0.25 0.25 0 0 1 -0.252 -0.246 v -4.04 Z"
fill={iconColor}/>

    </svg>
  );
});
export const SupabaseIcon 
: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 48 48"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%",
      }}
      {...props}
    >
       <path 
d="M23.5,30.5v-24c0-1.9-2.3-2.7-3.4-1.2l-16,21c-1.3,1.7-0.1,4.2,2,4.2H23.5z"
fill={iconColor}/>
<path 
d="M23.5,18.5v24c0,1.9,2.4,2.7,3.6,1.2l16.8-21c1.4-1.7,0.1-4.2-2.1-4.2H23.5z"
fill={iconColor}/>
</svg>
  );
});
export const OpenAIIcon 
: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%",
      }}
      {...props}
    >
       <path 
d="M 22.2819 9.8211 a 5.9847 5.9847 0 0 0 -0.5157 -4.9108 a 6.0462 6.0462 0 0 0 -6.5098 -2.9 A 6.0651 6.0651 0 0 0 4.9807 4.1818 a 5.9847 5.9847 0 0 0 -3.9977 2.9 a 6.0462 6.0462 0 0 0 0.7427 7.0966 a 5.98 5.98 0 0 0 0.511 4.9107 a 6.051 6.051 0 0 0 6.5146 2.9001 A 5.9847 5.9847 0 0 0 13.2599 24 a 6.0557 6.0557 0 0 0 5.7718 -4.2058 a 5.9894 5.9894 0 0 0 3.9977 -2.9001 a 6.0557 6.0557 0 0 0 -0.7475 -7.0729 Z m -9.022 12.6081 a 4.4755 4.4755 0 0 1 -2.8764 -1.0408 l 0.1419 -0.0804 l 4.7783 -2.7582 a 0.7948 0.7948 0 0 0 0.3927 -0.6813 v -6.7369 l 2.02 1.1686 a 0.071 0.071 0 0 1 0.038 0.052 v 5.5826 a 4.504 4.504 0 0 1 -4.4945 4.4944 Z m -9.6607 -4.1254 a 4.4708 4.4708 0 0 1 -0.5346 -3.0137 l 0.142 0.0852 l 4.783 2.7582 a 0.7712 0.7712 0 0 0 0.7806 0 l 5.8428 -3.3685 v 2.3324 a 0.0804 0.0804 0 0 1 -0.0332 0.0615 L 9.74 19.9502 a 4.4992 4.4992 0 0 1 -6.1408 -1.6464 Z M 2.3408 7.8956 a 4.485 4.485 0 0 1 2.3655 -1.9728 V 11.6 a 0.7664 0.7664 0 0 0 0.3879 0.6765 l 5.8144 3.3543 l -2.0201 1.1685 a 0.0757 0.0757 0 0 1 -0.071 0 l -4.8303 -2.7865 A 4.504 4.504 0 0 1 2.3408 7.872 Z m 16.5963 3.8558 L 13.1038 8.364 L 15.1192 7.2 a 0.0757 0.0757 0 0 1 0.071 0 l 4.8303 2.7913 a 4.4944 4.4944 0 0 1 -0.6765 8.1042 v -5.6772 a 0.79 0.79 0 0 0 -0.407 -0.667 Z m 2.0107 -3.0231 l -0.142 -0.0852 l -4.7735 -2.7818 a 0.7759 0.7759 0 0 0 -0.7854 0 L 9.409 9.2297 V 6.8974 a 0.0662 0.0662 0 0 1 0.0284 -0.0615 l 4.8303 -2.7866 a 4.4992 4.4992 0 0 1 6.6802 4.66 Z M 8.3065 12.863 l -2.02 -1.1638 a 0.0804 0.0804 0 0 1 -0.038 -0.0567 V 6.0742 a 4.4992 4.4992 0 0 1 7.3757 -3.4537 l -0.142 0.0805 L 8.704 5.459 a 0.7948 0.7948 0 0 0 -0.3927 0.6813 Z m 1.0976 -2.3654 l 2.602 -1.4998 l 2.6069 1.4998 v 2.9994 l -2.5974 1.4997 l -2.6067 -1.4997 Z"
fill={iconColor}/>

    </svg>
  );
});
export const RaspberryPIIcon 
: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 384 512"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%",
      }}
      {...props}
    >
       <path 

fill={iconColor}/>

    </svg>
  );
});
export const ApplicationIcon
: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 384 512"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%",
      }}
      {...props}
    >
       <path 

fill={iconColor}/>

    </svg>
  );
});
export const NetbeansIcon 
: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 50 50"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%",
      }}
      {...props}
    >
<polygon fill={iconColor} points="4,36.315 13,31.406 13,18.594 4,13.685"></polygon>
<polygon fill={iconColor} points="45.132,38.068 36.178,32.845 26,38.326 26,48.591"></polygon>
<polygon fill={iconColor} points="4.915,38.094 24,48.591 24,38.326 14.183,33.039"></polygon>
<polygon fill={iconColor} points="24,1.409 4.915,11.906 14.183,16.961 24,11.674"></polygon>
<polygon fill={iconColor} points="37,18.594 37,17.598 35.817,16.961 25,22.861 14.183,16.961 13,17.598 13,18.594 24,24.594 24,38.326 25,38.864 26,38.326 26,24.594"></polygon>
<polygon fill={iconColor} points="26,1.409 26,11.674 35.817,16.961 45.085,11.906"></polygon>
<polygon fill={iconColor} points="46,36.258 46,13.685 37,18.594 37,31.008"></polygon>
    </svg>
  );
});
export const JavaIcon 
: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="-2 0 18 18"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%",
      }}
      {...props}
    >
       <path 
d="M 4.45262 0.77086 C 4.71879 0.451461 5.19348 0.408307 5.51288 0.674473 C 6.27367 1.30846 6.56914 2.05693 6.4059 2.79543 C 6.26691 3.42419 5.82892 3.87253 5.4875 4.11099 C 5.27416 4.29388 5.18522 4.43743 5.14847 4.52681 C 5.11339 4.61211 5.11415 4.67467 5.12613 4.72887 C 5.15746 4.87054 5.29291 5.0395 5.44856 5.14327 C 5.7945 5.37389 5.88798 5.84129 5.65735 6.18722 C 5.42673 6.53316 4.95933 6.62664 4.61339 6.39602 C 4.26717 6.1652 3.80036 5.70682 3.65602 5.05387 C 3.49275 4.31537 3.78822 3.56689 4.54901 2.9329 L 4.5799 2.90715 L 4.61336 2.88485 C 4.76901 2.78108 4.90445 2.61213 4.93577 2.47046 C 4.94775 2.41627 4.94851 2.3537 4.91343 2.2684 C 4.87525 2.17555 4.78076 2.02424 4.54901 1.83112 C 4.22961 1.56495 4.18646 1.09026 4.45262 0.77086 Z M 9.1224 2.77835 C 9.38857 3.09775 9.34542 3.57244 9.02602 3.83861 C 8.79427 4.03173 8.69978 4.18303 8.66159 4.27588 C 8.62651 4.36119 8.62728 4.42375 8.63926 4.47794 C 8.67057 4.61962 8.80602 4.78857 8.96166 4.89233 C 9.3076 5.12296 9.40108 5.59035 9.17045 5.93629 C 8.93983 6.28223 8.47243 6.3757 8.1265 6.14508 C 7.78027 5.91426 7.31347 5.45587 7.16913 4.80292 C 7.00588 4.06442 7.30136 3.31595 8.06214 2.68196 C 8.38154 2.41579 8.85624 2.45895 9.1224 2.77835 Z M 0.207849 7.59455 C 0.29163 7.25942 0.59274 7.02432 0.938179 7.02432 H 12.4962 C 12.8417 7.02432 13.1428 7.25942 13.2266 7.59455 C 13.3354 8.03003 13.3631 8.58563 13.3041 9.20747 H 15.1472 C 15.563 9.20747 15.9 9.54451 15.9 9.96027 C 15.9 10.6991 15.8551 11.8958 15.103 12.8984 C 14.3624 13.8856 13.0731 14.5203 11.0103 14.5882 C 10.7408 14.9262 10.444 15.2603 10.1177 15.5866 C 9.97652 15.7278 9.78504 15.8071 9.58538 15.8071 H 3.84904 C 3.64938 15.8071 3.4579 15.7278 3.31672 15.5866 C 1.86788 14.1377 0.999928 12.5367 0.537609 11.1148 C 0.0832301 9.7174 0.000142552 8.42537 0.207849 7.59455 Z M 9.26725 14.3015 C 9.54933 14.0025 9.80359 13.6979 10.0322 13.3914 C 10.965 12.1406 11.4703 10.8584 11.691 9.80577 C 11.7965 9.30267 11.8334 8.87025 11.8284 8.52994 H 1.60604 C 1.59838 9.05604 1.69095 9.79279 1.96944 10.6493 C 2.34144 11.7933 3.02818 13.0942 4.16717 14.3015 H 9.26725 Z M 12.0935 12.9643 C 13.0969 12.7691 13.6142 12.3739 13.8986 11.9949 C 14.1788 11.6214 14.3043 11.176 14.3577 10.7131 H 13.0182 C 12.8197 11.4239 12.5193 12.189 12.0935 12.9643 Z"
fill={iconColor}/>

    </svg>
  );
});
export const JsonIcon: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 128 128"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "70%",
        height: "70%",
      }}
      {...props}
    >
       <path 
d="M 28.5 11.25 C 25.5981 11.5436 23.375 14.0152 23.375 17 L 23.375 111 C 23.375 114.184 25.9099 116.75 29.0938 116.75 L 98.9063 116.75 C 102.09 116.75 104.625 114.184 104.625 111 L 104.625 40.375 L 83.5938 40.375 C 79.2876 40.375 75.5313 37.2339 75.5313 33.0625 L 75.5313 11.25 L 29.0938 11.25 C 28.8948 11.25 28.6935 11.2304 28.5 11.25 Z M 79.5313 11.25 L 79.5313 33.0625 C 79.5313 34.7766 81.1632 36.375 83.5938 36.375 L 104.625 36.375 L 79.5313 11.25 Z M 55.582 54.6563 L 55.582 56.3125 C 53.2326 56.8064 51.5565 57.4715 50.582 58.3125 C 49.701 59.0734 49.1752 60.1879 48.9883 61.6563 C 48.9215 62.2436 48.8945 64.0232 48.8945 67 C 48.8945 70.2439 48.1351 72.4818 46.6133 73.75 C 45.4786 74.7112 43.1869 75.511 39.7695 76.125 C 43.6274 76.5522 46.1798 77.5947 47.3945 79.25 C 48.4491 80.6917 48.9883 83.4419 48.9883 87.5 C 48.9883 90.29 49.4152 92.2403 50.2695 93.375 C 51.2307 94.6432 53.0372 95.4205 55.707 95.6875 L 55.707 97.4375 C 48.7788 97.4375 45.184 94.7592 44.957 89.4063 L 44.957 85.4063 C 44.957 82.4427 44.4807 80.4429 43.5195 79.375 C 42.5717 78.3071 40.6484 77.5567 37.7383 77.1563 L 37.7383 75 C 40.7952 74.5461 42.8263 73.7148 43.8008 72.5 C 44.5617 71.5656 44.9258 69.885 44.9258 67.4688 C 44.9258 67.135 44.9079 66.5689 44.8945 65.7813 C 44.8812 64.9803 44.8945 64.3735 44.8945 63.9063 C 44.8945 60.5156 45.8518 58.1025 47.8008 56.6875 C 49.376 55.5395 51.9778 54.8565 55.582 54.6563 Z M 72.418 54.6563 C 75.5283 54.8298 77.901 55.3735 79.543 56.2813 C 81.7456 57.5227 82.9228 59.518 83.043 62.2813 C 83.043 62.1611 83.043 63.8688 83.043 67.4063 C 83.043 70.036 83.5779 71.8875 84.6992 72.9688 C 85.7004 73.9165 87.5652 74.5995 90.2617 75 L 90.2617 77.1563 C 87.5785 77.5167 85.7495 78.1727 84.7617 79.0938 C 83.627 80.1483 83.043 81.9952 83.043 84.625 C 83.043 85.0388 83.0609 85.6187 83.0742 86.4063 C 83.1009 87.1805 83.1055 87.7825 83.1055 88.1563 C 83.1055 89.9851 82.8943 91.4321 82.4805 92.5 C 81.9198 93.915 80.8997 95.0386 79.418 95.9063 C 77.6959 96.9208 75.3232 97.4375 72.293 97.4375 L 72.293 95.6875 C 75.43 95.3671 77.4207 94.3021 78.2617 92.5 C 78.769 91.4321 79.0117 89.1313 79.0117 85.5938 C 79.0117 82.4167 79.7442 80.1159 81.1992 78.6875 C 82.5742 77.3526 84.9199 76.4988 88.2305 76.125 C 85.2803 75.591 83.1952 74.9663 81.9805 74.2188 C 80.7256 73.4445 79.9167 72.2582 79.543 70.6563 C 79.2626 69.4548 79.1367 67.2351 79.1367 64.0313 C 79.1367 61.4282 78.6424 59.5859 77.668 58.5313 C 76.7869 57.5835 75.0344 56.8598 72.418 56.3125 L 72.418 54.6563 Z"
fill={iconColor}/>
</svg>
  );
});

export const GodotSVG: React.FC<IconSvgProps> = React.memo(({
  size = 24,
  width,
  height,
  color,
  ...props
}) => {

  const iconColor = useIconColor();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <svg
      height={size || height}
      viewBox="0 0 32 32"
      width={size || width}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        width: "100%",
        height: "100%",
      }}
      {...props}
    >
       <path 
d="M 12.745 0.917 c -1.458 0.328 -2.906 0.781 -4.266 1.464 c 0.031 1.198 0.109 2.344 0.266 3.505 c -0.526 0.339 -1.078 0.63 -1.568 1.026 c -0.5 0.38 -1.01 0.75 -1.464 1.198 c -0.906 -0.594 -1.859 -1.156 -2.849 -1.651 c -1.063 1.141 -2.052 2.375 -2.865 3.755 c 0.609 0.99 1.25 1.911 1.938 2.792 h 0.016 v 8.474 c 0.016 0 0.031 0 0.047 0.005 l 5.198 0.5 c 0.271 0.026 0.484 0.245 0.5 0.521 l 0.161 2.292 l 4.531 0.323 l 0.313 -2.115 c 0.042 -0.276 0.276 -0.479 0.552 -0.479 h 5.484 c 0.276 0 0.51 0.203 0.552 0.479 l 0.313 2.115 l 4.531 -0.323 l 0.161 -2.292 c 0.016 -0.276 0.229 -0.495 0.505 -0.521 l 5.193 -0.5 c 0.016 0 0.031 -0.005 0.047 -0.005 v -8.474 h 0.021 c 0.688 -0.875 1.323 -1.802 1.932 -2.792 c -0.807 -1.38 -1.802 -2.615 -2.865 -3.755 c -0.984 0.495 -1.943 1.057 -2.849 1.651 c -0.453 -0.448 -0.958 -0.818 -1.458 -1.198 c -0.495 -0.396 -1.047 -0.688 -1.573 -1.026 c 0.156 -1.161 0.234 -2.307 0.266 -3.505 c -1.354 -0.682 -2.802 -1.135 -4.266 -1.464 c -0.583 0.984 -1.115 2.047 -1.578 3.083 c -0.552 -0.089 -1.109 -0.125 -1.661 -0.13 h -0.026 c -0.552 0.005 -1.109 0.042 -1.661 0.13 c -0.464 -1.036 -0.995 -2.099 -1.583 -3.083 Z M 8.635 13.323 c 1.729 0 3.13 1.406 3.13 3.135 s -1.401 3.13 -3.13 3.13 c -1.729 0 -3.13 -1.401 -3.13 -3.13 s 1.401 -3.135 3.13 -3.135 Z M 23.365 13.323 c 1.729 0 3.13 1.406 3.13 3.135 s -1.401 3.13 -3.13 3.13 c -1.729 0 -3.13 -1.401 -3.13 -3.13 s 1.401 -3.135 3.13 -3.135 Z M 8.932 14.568 c -1.146 0 -2.078 0.927 -2.078 2.078 c 0 1.146 0.932 2.073 2.078 2.073 c 1.151 0 2.083 -0.927 2.083 -2.073 c 0 -1.151 -0.932 -2.078 -2.083 -2.078 Z M 23.063 14.568 c -1.146 0 -2.078 0.927 -2.078 2.078 c 0 1.146 0.932 2.073 2.078 2.073 c 1.151 0 2.078 -0.927 2.078 -2.073 c 0 -1.151 -0.927 -2.078 -2.078 -2.078 Z M 16 15.172 c 0.557 0 1.01 0.406 1.01 0.911 v 2.885 c 0 0.505 -0.453 0.917 -1.01 0.917 s -1.01 -0.411 -1.01 -0.917 v -2.885 c 0 -0.505 0.453 -0.911 1.01 -0.911 Z M 1.948 22.599 c 0 0.505 0.005 1.052 0.005 1.161 c 0 4.938 6.26 7.307 14.036 7.333 h 0.021 c 7.776 -0.026 14.031 -2.396 14.031 -7.333 c 0 -0.109 0.005 -0.656 0.01 -1.161 l -4.672 0.453 l -0.161 2.307 c -0.021 0.276 -0.24 0.5 -0.516 0.516 l -5.578 0.396 c -0.271 0 -0.51 -0.198 -0.552 -0.474 l -0.318 -2.156 h -4.516 l -0.318 2.156 c -0.042 0.286 -0.297 0.495 -0.594 0.474 l -5.531 -0.396 c -0.276 -0.021 -0.5 -0.24 -0.521 -0.516 l -0.156 -2.307 l -4.672 -0.448 Z"
fill={iconColor}/>
</svg>
  );
});

