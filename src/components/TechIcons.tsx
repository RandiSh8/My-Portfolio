import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function TailwindIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.287 1.624 1.177 1.194 2.538 2.576 5.513 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function FlutterIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M14.314 0L2.3 12l3.69 3.69 15.7-15.69h-7.376z" fill="#42A5F5" />
      <path d="M14.286 11.086l-6.17 6.171 3.714 3.715 2.457-2.457 7.4-7.429h-7.401z" fill="#0D47A1" />
      <path d="M8.114 17.257l3.715 3.714 3.029-3.028-3.715-3.715-3.029 3.029z" fill="#01579B" />
      <path d="M11.829 20.971l3.028 3.029h7.429l-6.743-6.743-3.714 3.714z" fill="#29B6F6" />
    </svg>
  );
}

export function HTML5Icon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M2.5 1.5l1.728 19.349L12 23l7.772-2.151L21.5 1.5H2.5z" fill="#E44D26" />
      <path d="M12 21.08l6.3-1.745 1.4-15.835H12v17.58z" fill="#F16529" />
      <path d="M12 9.5H8.3l-.2-2.5H12V4.5H5.7l.6 7.5H12V9.5zm0 6.5l-3.3-.8-.2-2.2H6l.4 4.5 5.6 1.6v-3.1z" fill="#EBEBEB" />
      <path d="M12 9.5h3.7l-.4 3.9-3.3.9V17.5l5.6-1.5.8-9H12V9.5zm0-5v2.5h5.8l.2-2.5H12z" fill="#FFFFFF" />
    </svg>
  );
}

export function CSS3Icon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M2.5 1.5l1.728 19.349L12 23l7.772-2.151L21.5 1.5H2.5z" fill="#1572B6" />
      <path d="M12 21.08l6.3-1.745 1.4-15.835H12v17.58z" fill="#33A9DC" />
      <path d="M12 9.5H8.3l-.2-2.5H12V4.5H5.7l.6 7.5H12V9.5zm0 6.5l-3.3-.8-.2-2.2H6l.4 4.5 5.6 1.6v-3.1z" fill="#EBEBEB" />
      <path d="M12 9.5h3.7l-.4 3.9-3.3.9V17.5l5.6-1.5.8-9H12V9.5zm0-5v2.5h5.8l.2-2.5H12z" fill="#FFFFFF" />
    </svg>
  );
}

export function NodeIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M12 1.5l9.5 5.5v10l-9.5 5.5-9.5-5.5v-10L12 1.5z"
        fill="#339933"
      />
      <path
        d="M12 3.8l7.5 4.3v8.6L12 21l-7.5-4.3V8.1L12 3.8z"
        fill="#43853D"
      />
      <path
        d="M12 6.5a2.5 2.5 0 012.5 2.5v1.2a1 1 0 01-.6.9l-1.9 1a1 1 0 00-.5.9v2a1 1 0 01-2 0v-2a3 3 0 011.5-2.6l1.5-.8V9a.5.5 0 00-.5-.5H10a1 1 0 010-2h2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function ExpressIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <text
        x="2"
        y="17"
        fill="#E2E8F0"
        fontSize="16"
        fontWeight="700"
        fontFamily="sans-serif"
        letterSpacing="-0.5"
      >
        ex
      </text>
    </svg>
  );
}

export function PostgreSQLIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M12.02 2C6.5 2 2.5 6.2 2.5 11.5c0 3.2 1.5 5.8 3.8 7.5-.1-.8-.2-1.6-.2-2.3 0-2.2 1.1-4.2 3-5.2-.2-.5-.3-1-.3-1.6 0-2.3 1.9-4.2 4.2-4.2s4.2 1.9 4.2 4.2c0 .6-.1 1.1-.3 1.6 1.9 1 3 3 3 5.2 0 .7-.1 1.5-.2 2.3 2.3-1.7 3.8-4.3 3.8-7.5C23.5 6.2 17.5 2 12.02 2z"
        fill="#336791"
      />
      <path
        d="M12 7.7a2.1 2.1 0 100 4.2 2.1 2.1 0 000-4.2zM9.3 16.5c-.3 1.8-.4 3.7-.4 5.5h6.2c0-1.8-.1-3.7-.4-5.5H9.3z"
        fill="#4A8CC7"
      />
    </svg>
  );
}

export function MSSQLIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <ellipse cx="12" cy="5.5" rx="8.5" ry="3.5" fill="#E83535" />
      <path
        d="M3.5 5.5v5c0 1.9 3.8 3.5 8.5 3.5s8.5-1.6 8.5-3.5v-5"
        stroke="#CC292B"
        strokeWidth="1.5"
        fill="#CC292B"
      />
      <ellipse cx="12" cy="10.5" rx="8.5" ry="3.5" fill="#E83535" />
      <path
        d="M3.5 10.5v5c0 1.9 3.8 3.5 8.5 3.5s8.5-1.6 8.5-3.5v-5"
        stroke="#A81B1D"
        strokeWidth="1.5"
        fill="#A81B1D"
      />
      <ellipse cx="12" cy="15.5" rx="8.5" ry="3.5" fill="#E83535" />
    </svg>
  );
}

export function PythonIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M11.91 2c-5.32 0-4.99 2.3-4.99 2.3l.01 2.39h5.08v.72H4.94S2 7.07 2 12.37c0 5.31 2.57 5.13 2.57 5.13h1.53v-2.15s-.08-2.57 2.52-2.57h4.34s2.43.04 2.43-2.39V4.43S15.82 2 11.91 2zm-1.42 1.48a.95.95 0 110 1.9.95.95 0 010-1.9z"
        fill="#3776AB"
      />
      <path
        d="M12.09 22c5.32 0 4.99-2.3 4.99-2.3l-.01-2.39h-5.08v-.72h7.07S22 16.93 22 11.63c0-5.31-2.57-5.13-2.57-5.13h-1.53v2.15s.08 2.57-2.52 2.57h-4.34s-2.43-.04-2.43 2.39v8.28S8.18 22 12.09 22zm1.42-1.48a.95.95 0 110-1.9.95.95 0 010 1.9z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function ReactIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-11.5 -10.23 23 20.46"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10.5" fill="#000000" stroke="#334155" strokeWidth="1" />
      <path
        d="M15.5 7.5L8.7 16.3V7.5H7v9h1.7l6.8-8.8v8.8h1.7v-9h-1.7z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function TypeScriptIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M11.5 10H5.5V8.2h7.6V10H10v7.5H7.5V10h4zm2.1 4.8c.8.7 1.9 1.1 3 1.1 1.2 0 1.9-.5 1.9-1.3 0-.8-.6-1.2-2.1-1.7-2.1-.7-3.4-1.6-3.4-3.3 0-2 1.6-3.3 3.9-3.3 1.4 0 2.5.4 3.3 1l-.9 1.7c-.7-.5-1.5-.8-2.4-.8-1.1 0-1.7.5-1.7 1.2 0 .7.6 1.1 2.2 1.6 2.2.8 3.3 1.7 3.3 3.4 0 2.2-1.7 3.4-4.2 3.4-1.6 0-3-.5-4-1.3l1.1-1.9z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function JavaScriptIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M7 17.5c1 .6 2.2.9 3.2.9 1.8 0 2.8-.8 2.8-2.5V8.5H10.5v7.2c0 .9-.5 1.2-1.2 1.2-.7 0-1.4-.2-2-.6L7 17.5zm7.5-.2c1.1.7 2.4 1.1 3.8 1.1 2.6 0 4.2-1.3 4.2-3.4 0-1.9-1.2-2.8-3.4-3.6-1.5-.6-2.1-1-2.1-1.8 0-.7.6-1.2 1.7-1.2 1 0 1.9.4 2.6.9l.9-1.8c-.9-.6-2.1-1-3.5-1-2.5 0-4 1.4-4 3.3 0 1.8 1.1 2.8 3.3 3.6 1.6.6 2.2 1.1 2.2 1.9 0 .8-.7 1.4-2 1.4-1.3 0-2.4-.5-3.3-1.1l-.4 1.8z"
        fill="#000000"
      />
    </svg>
  );
}

export function GitIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0l-2 2 2.6 2.6c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.5 2.5c.6-.2 1.3-.1 1.8.4.7.7.7 1.9 0 2.6s-1.9.7-2.6 0c-.5-.5-.6-1.3-.4-1.8L12.7 10v4.8c.2.2.4.4.4.7 0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6c0-.8.5-1.4 1.3-1.6V9.8c-.7-.2-1.3-.8-1.3-1.6 0-.3.1-.6.2-.8L6.9 4.8 2.4 9.3c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.1v-.3z"
        fill="#F05032"
      />
    </svg>
  );
}

export function VSCodeIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M17.4 2.2l-9.8 8.8L3.2 7.7 1.5 8.7l5.2 4.9-5.2 4.9 1.7 1 4.4-3.3 9.8 8.8 5.1-2.4V4.6L17.4 2.2z" fill="#007ACC" />
      <path d="M17.4 2.2L7.6 11l9.8 8.8 3.5-1.7V3.9l-3.5-1.7z" fill="#1F9CF0" opacity="0.8" />
    </svg>
  );
}

export function FigmaIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M7 2a3.5 3.5 0 000 7h3.5V2H7z" fill="#F24E1E" />
      <path d="M10.5 2h3.5a3.5 3.5 0 110 7h-3.5V2z" fill="#FF7262" />
      <path d="M7 9a3.5 3.5 0 000 7h3.5V9H7z" fill="#A259FF" />
      <path d="M14 9a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill="#1ABCFE" />
      <path d="M7 16a3.5 3.5 0 003.5 3.5V23A3.5 3.5 0 017 16z" fill="#0ACF83" />
    </svg>
  );
}

export function JavaIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M8.8 19.3s-1.2.2-.6.7c.8.6 2.3.8 3.8.8 2.2 0 4-.4 4-.4s.8-.2.4-.6c-.5-.5-2.6-.7-4.4-.7-1.4 0-3.2.2-3.2.2zm-.6 2.2s-1.4.3-.8 1c.8.8 2.5 1 4.5 1 2.6 0 4.8-.5 4.8-.5s1-.3.5-.8c-.7-.7-3.1-.9-5.4-.9-1.7 0-3.6.2-3.6.2zm7.1-7.2c.4 1.4-1.3 2.5-3.3 2.6-2.3.1-4.2-.8-4.2-2 0-.2.1-.4.3-.6-.6.6-.8 1.4-.4 2.1.8 1.4 3 1.8 5.1 1.7 2.4-.1 4.1-1.3 3.6-2.9-.3-.9-1.1-.9-1.1-.9z"
        fill="#5382A1"
      />
      <path
        d="M13.8 2s2 2-1.9 5.2c-4 3.2-1 4.9-1 4.9s-1.5-1.5.5-3.5c2.3-2.3 2.4-6.6 2.4-6.6zm3.3 3.7s1.3 1.3-1.2 3.6c-2.7 2.4-.6 3.6-.6 3.6s-1.1-.9.3-2.3c1.7-1.6 1.5-4.9 1.5-4.9z"
        fill="#E76F00"
      />
    </svg>
  );
}

export function PostmanIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10.5" fill="#FF6C37" />
      <path
        d="M15.8 7.5L8.2 11.2l2.8 1.5.8 3.8 1.4-2.1 2.8 1.5.8-8.4zm-4.4 4.5l3.2-1.8-2.6 2.6-.6-.8z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function NeonIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="#00E599" />
      <path
        d="M6 18V6l12 12V6"
        stroke="#05131D"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10.5" fill="#00599C" />
      <path
        d="M15.5 8.5c-.8-.9-1.9-1.4-3.2-1.4-2.7 0-4.6 1.9-4.6 4.9 0 2.9 1.9 4.9 4.6 4.9 1.4 0 2.5-.5 3.3-1.4l1.2 1.4c-1.1 1.2-2.7 1.9-4.5 1.9-3.9 0-6.7-2.8-6.7-6.8 0-4 2.8-6.8 6.7-6.8 1.8 0 3.3.7 4.4 1.9l-1.2 1.4z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
