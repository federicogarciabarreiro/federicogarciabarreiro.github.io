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