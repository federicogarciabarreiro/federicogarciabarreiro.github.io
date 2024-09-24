import * as React from "react";

import { IconSvgProps } from "@/types/IconSVGProps";
import { useIconColor } from "./useIconColor";

import { useState, useEffect } from "react";

export const Logo: React.FC<IconSvgProps> = React.memo(({
  size = 36,
  height,
  color,
  ...props
}) => 

  {
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
  </svg>)});

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
}: IconSvgProps) => 
  {
    const iconColor = useIconColor();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setVisible(true);
    }, []);

    return(
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
)});

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

  return(
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
)});

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