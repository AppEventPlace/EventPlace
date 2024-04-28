import * as React from "react";
import Svg, {
  Path,
  Ellipse,
  G,
  Defs,
  ClipPath,
  Mask,
  Rect,
} from "react-native-svg";

function SvgLogo({ theme, progress, color, colEstrella, ancho, alto }) {
  switch (theme) {
    case "LogoSvg":
      return (
        <Svg
          width={218}
          height={64}
          viewBox="0 0 218 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M2.814 44V11.17h10.881c2.267 0 4.385.429 6.355 1.289a16.206 16.206 0 015.23 3.54 16.205 16.205 0 013.54 5.23c.86 1.97 1.29 4.089 1.29 6.356 0 2.266-.43 4.393-1.29 6.378a16.718 16.718 0 01-8.77 8.77C18.08 43.579 15.962 44 13.695 44H2.815zm6.472-6.472h4.41c1.344 0 2.61-.258 3.798-.774a10.29 10.29 0 003.19-2.134 9.816 9.816 0 002.157-3.166 9.47 9.47 0 00.797-3.87c0-1.375-.266-2.657-.797-3.845a9.817 9.817 0 00-2.158-3.166 9.817 9.817 0 00-3.165-2.158 9.49 9.49 0 00-3.823-.773H9.286v19.886zM44.29 44.61c-2.158 0-4.128-.555-5.91-1.665-1.767-1.11-3.181-2.596-4.244-4.456-1.048-1.876-1.572-3.947-1.572-6.214 0-1.72.305-3.322.915-4.808.61-1.5 1.446-2.814 2.51-3.94a11.768 11.768 0 013.751-2.673 10.947 10.947 0 014.55-.961c2.157 0 4.12.555 5.886 1.665 1.782 1.11 3.197 2.603 4.244 4.479 1.064 1.876 1.595 3.955 1.595 6.238 0 1.704-.305 3.298-.915 4.784a12.704 12.704 0 01-2.532 3.94 11.673 11.673 0 01-3.729 2.65c-1.407.64-2.923.96-4.55.96zm0-6.473c1 0 1.9-.265 2.697-.797a5.706 5.706 0 001.876-2.157 6.32 6.32 0 00.68-2.908c0-1.079-.243-2.064-.727-2.955-.47-.907-1.102-1.626-1.9-2.158a4.637 4.637 0 00-2.626-.797c-.985 0-1.876.274-2.674.82a5.901 5.901 0 00-1.9 2.158c-.453.892-.68 1.869-.68 2.932 0 1.11.235 2.11.704 3.001a5.755 5.755 0 001.923 2.087 4.737 4.737 0 002.627.774z"
            fill="#515EC0"
          />
          <Path
            d="M92.783 44.61c-2.158 0-4.128-.555-5.91-1.665-1.766-1.11-3.181-2.596-4.244-4.456-1.048-1.876-1.572-3.947-1.572-6.214 0-1.72.305-3.322.915-4.808.61-1.5 1.446-2.814 2.51-3.94a11.77 11.77 0 013.751-2.673 10.947 10.947 0 014.55-.961c1.735 0 3.33.344 4.784 1.032 1.47.688 2.728 1.649 3.775 2.884 1.063 1.235 1.861 2.681 2.392 4.338.547 1.658.774 3.448.68 5.37H84.528c.188 1.486.657 2.815 1.407 3.987a8.697 8.697 0 002.908 2.79c1.188.673 2.501 1.017 3.94 1.033 1.563 0 2.97-.407 4.22-1.22 1.267-.813 2.283-1.93 3.049-3.353l3.33.774c-.938 2.079-2.352 3.783-4.244 5.112-1.892 1.313-4.01 1.97-6.355 1.97zm-8.349-13.742h16.674a8.358 8.358 0 00-1.337-3.987 8.685 8.685 0 00-2.978-2.908 7.625 7.625 0 00-4.01-1.102c-1.454 0-2.783.36-3.987 1.079a8.546 8.546 0 00-2.955 2.884c-.766 1.204-1.235 2.548-1.407 4.034zM119.222 44h-4.174l-8.559-23.521h3.494l7.152 19.675 7.153-19.675h3.494L119.222 44zm22.316.61c-2.157 0-4.127-.555-5.909-1.665-1.767-1.11-3.182-2.596-4.245-4.456-1.047-1.876-1.571-3.947-1.571-6.214 0-1.72.305-3.322.914-4.808.61-1.5 1.446-2.814 2.51-3.94a11.757 11.757 0 013.752-2.673 10.944 10.944 0 014.549-.961c1.735 0 3.33.344 4.784 1.032a11.02 11.02 0 013.776 2.884c1.063 1.235 1.86 2.681 2.392 4.338.547 1.658.773 3.448.68 5.37h-19.887c.188 1.486.657 2.815 1.408 3.987a8.7 8.7 0 002.907 2.79c1.189.673 2.502 1.017 3.94 1.033 1.563 0 2.971-.407 4.221-1.22 1.267-.813 2.283-1.93 3.049-3.353l3.33.774c-.938 2.079-2.353 3.783-4.245 5.112-1.891 1.313-4.01 1.97-6.355 1.97zm-8.348-13.742h16.673a8.347 8.347 0 00-1.337-3.987 8.68 8.68 0 00-2.978-2.908 7.623 7.623 0 00-4.01-1.102c-1.454 0-2.783.36-3.987 1.079a8.55 8.55 0 00-2.954 2.884c-.766 1.204-1.235 2.548-1.407 4.034zm44.918-1.384V44h-3.284V30.14c0-1.281-.312-2.446-.938-3.494a7.136 7.136 0 00-2.509-2.509c-1.047-.625-2.212-.938-3.494-.938a6.768 6.768 0 00-3.494.938 7.136 7.136 0 00-2.509 2.51c-.626 1.047-.938 2.212-.938 3.494V44h-3.283V20.55h3.283v3.236c.828-1.189 1.907-2.135 3.236-2.838 1.329-.704 2.775-1.055 4.338-1.055 1.767 0 3.377.43 4.831 1.29a9.718 9.718 0 013.471 3.47c.86 1.454 1.29 3.064 1.29 4.831zm17.148-5.652h-5.605L189.628 44h-3.283l.023-20.168h-4.244V20.55h4.244l-.023-7.363h3.283l.023 7.363h5.605v3.284zm11.717 20.614a11.892 11.892 0 01-3.752-.704c-1.219-.438-2.283-1.032-3.189-1.782-.907-.75-1.556-1.603-1.947-2.556l2.838-1.22c.25.61.711 1.173 1.383 1.689.688.5 1.47.906 2.345 1.22a8.069 8.069 0 002.603.445c.954 0 1.845-.157 2.674-.47.828-.312 1.501-.758 2.017-1.336.531-.594.797-1.29.797-2.087 0-.86-.281-1.532-.844-2.017-.563-.5-1.274-.891-2.134-1.172a58.358 58.358 0 00-2.65-.845c-1.657-.453-3.119-.953-4.385-1.5-1.267-.548-2.26-1.243-2.979-2.088-.703-.86-1.055-1.962-1.055-3.306 0-1.423.399-2.65 1.196-3.682.813-1.047 1.868-1.852 3.166-2.415a10.295 10.295 0 014.197-.868c1.908 0 3.643.414 5.207 1.243 1.579.828 2.72 1.93 3.423 3.306l-2.65 1.572c-.281-.641-.727-1.196-1.336-1.665a7.2 7.2 0 00-2.087-1.102 7.564 7.564 0 00-2.345-.423 7.747 7.747 0 00-2.791.446c-.86.297-1.556.742-2.087 1.337-.516.594-.774 1.32-.774 2.18 0 .86.258 1.517.774 1.97.516.438 1.211.798 2.087 1.08.891.265 1.892.578 3.002.937 1.422.454 2.759.97 4.01 1.548 1.25.578 2.259 1.297 3.025 2.157.766.86 1.141 1.947 1.125 3.26 0 1.407-.422 2.634-1.266 3.682-.844 1.047-1.939 1.852-3.283 2.415-1.345.547-2.783.797-4.315.75z"
            fill="#000"
          />
          <Ellipse
            cx={69.0235}
            cy={31.6785}
            rx={3.2698}
            ry={3.67853}
            fill="#000"
          />
          <Path
            stroke="#01131E"
            strokeLinecap="round"
            d="M67.5 63.5L217.5 63.5"
          />
        </Svg>
      );

    case "Google":
      return (
        <Svg
          width={25}
          height={24}
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <G clipPath="url(#clip0_2586_9314)">
            <Path
              d="M24.266 12.277c0-.816-.066-1.636-.207-2.439H12.74v4.621h6.482a5.554 5.554 0 01-2.399 3.647v2.998h3.867c2.27-2.09 3.576-5.177 3.576-8.827z"
              fill="#4285F4"
            />
            <Path
              d="M12.74 24c3.236 0 5.966-1.062 7.954-2.896l-3.867-2.998c-1.075.731-2.464 1.146-4.083 1.146-3.13 0-5.785-2.112-6.737-4.952h-3.99v3.091a12.002 12.002 0 0010.723 6.61z"
              fill="#34A853"
            />
            <Path
              d="M6.003 14.3a7.188 7.188 0 010-4.594V6.615H2.016a12.01 12.01 0 000 10.776l3.987-3.09z"
              fill="#FBBC04"
            />
            <Path
              d="M12.74 4.75a6.52 6.52 0 014.603 1.799l3.426-3.426A11.533 11.533 0 0012.74 0 11.998 11.998 0 002.016 6.615l3.987 3.09C6.95 6.863 9.609 4.75 12.74 4.75z"
              fill="#EA4335"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_2586_9314">
              <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      );

    case "Facebook":
      return (
        <Svg
          width={25}
          height={24}
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <G clipPath="url(#clip0_2586_9320)">
            <Path
              d="M24.5 12c0-6.627-5.373-12-12-12S.5 5.373.5 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.578V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H16.33c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C20.112 22.954 24.5 17.99 24.5 12z"
              fill="#fff"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_2586_9320">
              <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      );

    case "IOS":
      return (
        <Svg
          width={25}
          height={24}
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M21.51 17.145a11.957 11.957 0 01-1.184 2.127c-.621.886-1.13 1.5-1.523 1.841-.608.56-1.26.846-1.958.862-.501 0-1.106-.142-1.81-.432-.705-.287-1.354-.43-1.947-.43-.621 0-1.288.143-2.002.43-.715.29-1.29.44-1.73.455-.67.029-1.337-.266-2.003-.885-.425-.37-.957-1.006-1.593-1.907-.684-.961-1.246-2.076-1.686-3.347-.471-1.373-.707-2.703-.707-3.99 0-1.474.318-2.746.956-3.811A5.612 5.612 0 016.327 6.03a5.39 5.39 0 012.709-.764c.532 0 1.229.164 2.095.487.864.325 1.419.489 1.662.489.182 0 .798-.192 1.843-.576.988-.355 1.822-.502 2.505-.444 1.85.149 3.241.879 4.166 2.193-1.655 1.003-2.474 2.408-2.458 4.21.015 1.404.524 2.572 1.525 3.5.454.43.96.763 1.524 1a16.43 16.43 0 01-.389 1.019zM17.263.44c0 1.1-.402 2.128-1.203 3.079-.967 1.13-2.136 1.783-3.405 1.68a3.417 3.417 0 01-.025-.417c0-1.056.46-2.186 1.276-3.11.408-.468.927-.858 1.555-1.168C16.09.198 16.683.03 17.242 0c.015.147.022.294.022.44z"
            fill="#fff"
          />
        </Svg>
      );

    case "BackCheckron":
      return (
        <Svg
          width={12}
          height={13}
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Mask
            id="a"
            style={{
              maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={12}
            height={13}
          >
            <Path fill="#D9D9D9" d="M0 0.5H12V12.5H0z" />
          </Mask>
          <G mask="url(#a)">
            <Path
              d="M4.775 6.5l3.675 3.675c.125.125.185.27.181.438a.623.623 0 01-.193.437.6.6 0 01-.438.188.6.6 0 01-.437-.188l-3.85-3.837a.999.999 0 010-1.425l3.85-3.85a.585.585 0 01.443-.182.63.63 0 01.444.194.6.6 0 01.188.438.6.6 0 01-.188.437L4.775 6.5z"
              fill={color}
            />
          </G>
        </Svg>
      );

    case "ProgressBar":
      return (
        <Svg
          width={"100%"}
          height={15}
          viewBox="0 0 400 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Rect width={400} height={4} rx={2} fill="#E9EAFE" />

          <Rect width={progress * 3.56} height={4} rx={2} fill="#515EC0" />
        </Svg>
      );

    case "FotoGenerica":
      return (
        <Svg
          width={ancho}
          height={alto}
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34 68C52.7777 68 68 52.7777 68 34C68 15.2223 52.7777 0 34 0C15.2223 0 0 15.2223 0 34C0 52.7777 15.2223 68 34 68Z"
            fill="#A6A6A6"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.5 33.2754C37.09 33.2754 39.1896 31.199 39.1896 28.6377C39.1896 26.0764 37.09 24 34.5 24C31.9099 24 29.8103 26.0764 29.8103 28.6377C29.8103 31.199 31.9099 33.2754 34.5 33.2754Z"
            fill="#5A5B5F"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.5 35.5942C29.8056 35.5942 26 39.3576 26 44H43C43 39.3576 39.1944 35.5942 34.5 35.5942Z"
            fill="#5A5B5F"
          />
        </Svg>
      );

    case "Editar":
      return (
        <Svg
          width="20"
          height="20"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 16H3.425L13.2 6.225L11.775 4.8L2 14.575V16ZM0 18V13.75L13.2 0.575C13.4 0.391667 13.6208 0.25 13.8625 0.15C14.1042 0.05 14.3583 0 14.625 0C14.8917 0 15.15 0.05 15.4 0.15C15.65 0.25 15.8667 0.4 16.05 0.6L17.425 2C17.625 2.18333 17.7708 2.4 17.8625 2.65C17.9542 2.9 18 3.15 18 3.4C18 3.66667 17.9542 3.92083 17.8625 4.1625C17.7708 4.40417 17.625 4.625 17.425 4.825L4.25 18H0ZM12.475 5.525L11.775 4.8L13.2 6.225L12.475 5.525Z"
            fill="#0F172A"
          />
        </Svg>
      );

    case "PerfilLogo":
      return (
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Mask
            id="mask0_2175_7146"
            style={{
              maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <Rect width="24" height="24" fill="#D9D9D9" />
          </Mask>
          <G mask="url(#mask0_2175_7146)">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.85 17.1C6.7 16.45 7.65 15.9375 8.7 15.5625C9.75 15.1875 10.85 15 12 15C13.15 15 14.25 15.1875 15.3 15.5625C16.35 15.9375 17.3 16.45 18.15 17.1C18.7333 16.4167 19.1875 15.6417 19.5125 14.775C19.8375 13.9083 20 12.9833 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 12.9833 4.1625 13.9083 4.4875 14.775C4.8125 15.6417 5.26667 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1875 12.6625 9.5125 11.9875C8.8375 11.3125 8.5 10.4833 8.5 9.5C8.5 8.51667 8.8375 7.6875 9.5125 7.0125C10.1875 6.3375 11.0167 6 12 6C12.9833 6 13.8125 6.3375 14.4875 7.0125C15.1625 7.6875 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1625 11.3125 14.4875 11.9875C13.8125 12.6625 12.9833 13 12 13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C12.8833 20 13.7167 19.8708 14.5 19.6125C15.2833 19.3542 16 18.9833 16.65 18.5C16 18.0167 15.2833 17.6458 14.5 17.3875C13.7167 17.1292 12.8833 17 12 17C11.1167 17 10.2833 17.1292 9.5 17.3875C8.71667 17.6458 8 18.0167 7.35 18.5C8 18.9833 8.71667 19.3542 9.5 19.6125C10.2833 19.8708 11.1167 20 12 20ZM12 11C12.4333 11 12.7917 10.8583 13.075 10.575C13.3583 10.2917 13.5 9.93333 13.5 9.5C13.5 9.06667 13.3583 8.70833 13.075 8.425C12.7917 8.14167 12.4333 8 12 8C11.5667 8 11.2083 8.14167 10.925 8.425C10.6417 8.70833 10.5 9.06667 10.5 9.5C10.5 9.93333 10.6417 10.2917 10.925 10.575C11.2083 10.8583 11.5667 11 12 11Z"
              fill={color}
            />
          </G>
        </Svg>
      );

    case "WallLogo":
      return (
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z"
            fill={color}
          />
        </Svg>
      );

    case "NotificacionesLogo":
      return (
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Mask
            id="mask0_2175_7149"
            style={{
              maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <Rect width="24" height="24" fill="#D9D9D9" />
          </Mask>
          <G mask="url(#mask0_2175_7149)">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 19V17H6V10C6 8.61667 6.41667 7.3875 7.25 6.3125C8.08333 5.2375 9.16667 4.53333 10.5 4.2V3.5C10.5 3.08333 10.6458 2.72917 10.9375 2.4375C11.2292 2.14583 11.5833 2 12 2C12.4167 2 12.7708 2.14583 13.0625 2.4375C13.3542 2.72917 13.5 3.08333 13.5 3.5V4.2C14.8333 4.53333 15.9167 5.2375 16.75 6.3125C17.5833 7.3875 18 8.61667 18 10V17H20V19H4ZM12 22C11.45 22 10.9792 21.8042 10.5875 21.4125C10.1958 21.0208 10 20.55 10 20H14C14 20.55 13.8042 21.0208 13.4125 21.4125C13.0208 21.8042 12.55 22 12 22ZM8 17H16V10C16 8.9 15.6083 7.95833 14.825 7.175C14.0417 6.39167 13.1 6 12 6C10.9 6 9.95833 6.39167 9.175 7.175C8.39167 7.95833 8 8.9 8 10V17Z"
              fill={color}
            />
          </G>
        </Svg>
      );

    case "ChatLogo":
      return (
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Mask
            id="mask0_2175_7150"
            style={{
              maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <Rect width="24" height="24" fill="#D9D9D9" />
          </Mask>
          <G mask="url(#mask0_2175_7150)">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 22V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H6L2 22ZM5.15 16H20V4H4V17.125L5.15 16Z"
              fill={color}
            />
          </G>
        </Svg>
      );

    case "BoletasLogo":
      return (
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Mask
            id="mask0_2175_7148"
            style={{
              maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <Rect width="24" height="24" fill="#D9D9D9" />
          </Mask>
          <G mask="url(#mask0_2175_7148)">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 17C12.2833 17 12.5208 16.9042 12.7125 16.7125C12.9042 16.5208 13 16.2833 13 16C13 15.7167 12.9042 15.4792 12.7125 15.2875C12.5208 15.0958 12.2833 15 12 15C11.7167 15 11.4792 15.0958 11.2875 15.2875C11.0958 15.4792 11 15.7167 11 16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17ZM12 13C12.2833 13 12.5208 12.9042 12.7125 12.7125C12.9042 12.5208 13 12.2833 13 12C13 11.7167 12.9042 11.4792 12.7125 11.2875C12.5208 11.0958 12.2833 11 12 11C11.7167 11 11.4792 11.0958 11.2875 11.2875C11.0958 11.4792 11 11.7167 11 12C11 12.2833 11.0958 12.5208 11.2875 12.7125C11.4792 12.9042 11.7167 13 12 13ZM12 9C12.2833 9 12.5208 8.90417 12.7125 8.7125C12.9042 8.52083 13 8.28333 13 8C13 7.71667 12.9042 7.47917 12.7125 7.2875C12.5208 7.09583 12.2833 7 12 7C11.7167 7 11.4792 7.09583 11.2875 7.2875C11.0958 7.47917 11 7.71667 11 8C11 8.28333 11.0958 8.52083 11.2875 8.7125C11.4792 8.90417 11.7167 9 12 9ZM20 20H4C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V14C2.55 14 3.02083 13.8042 3.4125 13.4125C3.80417 13.0208 4 12.55 4 12C4 11.45 3.80417 10.9792 3.4125 10.5875C3.02083 10.1958 2.55 10 2 10V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V10C21.45 10 20.9792 10.1958 20.5875 10.5875C20.1958 10.9792 20 11.45 20 12C20 12.55 20.1958 13.0208 20.5875 13.4125C20.9792 13.8042 21.45 14 22 14V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20ZM20 18V15.45C19.3833 15.0833 18.8958 14.5958 18.5375 13.9875C18.1792 13.3792 18 12.7167 18 12C18 11.2833 18.1792 10.6208 18.5375 10.0125C18.8958 9.40417 19.3833 8.91667 20 8.55V6H4V8.55C4.61667 8.91667 5.10417 9.40417 5.4625 10.0125C5.82083 10.6208 6 11.2833 6 12C6 12.7167 5.82083 13.3792 5.4625 13.9875C5.10417 14.5958 4.61667 15.0833 4 15.45V18H20Z"
              fill={color}
            />
          </G>
        </Svg>
      );

    case "Calificación":
      return (
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Mask
            id="mask0_3348_2181"
            style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <Rect width="24" height="24" fill="#D9D9D9" />
          </Mask>
          <G mask="url(#mask0_3348_2181)">
            <Path
              d="M12 17.275L7.85002 19.775C7.66668 19.8916 7.47501 19.9416 7.27501 19.9249C7.07501 19.9083 6.90002 19.8416 6.75002 19.725C6.60001 19.6083 6.48335 19.4625 6.40002 19.2874C6.31668 19.1124 6.30002 18.9166 6.35002 18.7L7.45002 13.975L3.77502 10.8C3.60835 10.65 3.50418 10.4791 3.46252 10.2875C3.42085 10.0958 3.43335 9.90828 3.50002 9.72495C3.56668 9.54162 3.66668 9.39162 3.80002 9.27495C3.93335 9.15828 4.11668 9.08328 4.35002 9.04995L9.20002 8.62495L11.075 4.17495C11.1583 3.97495 11.2875 3.82495 11.4625 3.72495C11.6375 3.62495 11.8167 3.57495 12 3.57495C12.1833 3.57495 12.3625 3.62495 12.5375 3.72495C12.7125 3.82495 12.8417 3.97495 12.925 4.17495L14.8 8.62495L19.65 9.04995C19.8833 9.08328 20.0667 9.15828 20.2 9.27495C20.3333 9.39162 20.4333 9.54162 20.5 9.72495C20.5667 9.90828 20.5792 10.0958 20.5375 10.2875C20.4958 10.4791 20.3917 10.65 20.225 10.8L16.55 13.975L17.65 18.7C17.7 18.9166 17.6833 19.1124 17.6 19.2874C17.5167 19.4625 17.4 19.6083 17.25 19.725C17.1 19.8416 16.925 19.9083 16.725 19.9249C16.525 19.9416 16.3333 19.8916 16.15 19.775L12 17.275Z"
              fill="#6979F8"
            />
          </G>
        </Svg>
      );
      break;
    case "EstrellaVacia":
      return (
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Mask
            id="mask0_3348_2184"
            style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <Rect width="24" height="24" fill="#D9D9D9" />
          </Mask>
          <G mask="url(#mask0_3348_2184)">
            <Path
              d="M7.59201 19.3467L7.59193 19.3465L7.58158 19.3531C7.48233 19.4163 7.39844 19.4335 7.31654 19.4267C7.20749 19.4176 7.12603 19.384 7.05699 19.3303C6.96974 19.2624 6.90198 19.1786 6.85145 19.0725C6.82371 19.0142 6.80872 18.9362 6.83709 18.8129C6.83713 18.8127 6.83717 18.8125 6.83721 18.8124L7.93699 14.0883C7.97911 13.9074 7.91746 13.718 7.77689 13.5966L4.10618 10.4253C4.00824 10.3362 3.96722 10.2554 3.9511 10.1812C3.92938 10.0813 3.9357 9.9899 3.96991 9.89582C4.01074 9.78353 4.06564 9.70692 4.12927 9.65124C4.1683 9.61708 4.24819 9.57132 4.4084 9.54675L9.24366 9.12304C9.42829 9.10686 9.58882 8.98989 9.66078 8.8191L11.5358 4.3691L11.5366 4.36726C11.5808 4.26108 11.6389 4.20004 11.7106 4.15907C11.8177 4.09784 11.9122 4.07495 12 4.07495C12.0879 4.07495 12.1823 4.09784 12.2894 4.15907C12.3611 4.20004 12.4192 4.26108 12.4635 4.36726L12.4642 4.3691L14.3392 8.8191C14.4112 8.98989 14.5717 9.10686 14.7564 9.12304L19.5916 9.54675C19.7518 9.57132 19.8317 9.61708 19.8708 9.65124C19.9344 9.70692 19.9893 9.78353 20.0301 9.89582C20.0643 9.9899 20.0707 10.0813 20.0489 10.1812C20.0328 10.2554 19.9918 10.3362 19.8938 10.4253L16.2231 13.5966C16.0826 13.718 16.0209 13.9074 16.063 14.0883L17.1628 18.8124C17.1629 18.8126 17.1629 18.8128 17.163 18.813C17.1913 18.9363 17.1763 19.0143 17.1486 19.0725C17.0981 19.1786 17.0303 19.2624 16.943 19.3303C16.874 19.384 16.7925 19.4176 16.6835 19.4267C16.6016 19.4335 16.5177 19.4163 16.4185 19.3531L16.4185 19.353L16.408 19.3467L12.258 16.8467C12.0993 16.751 11.9007 16.751 11.742 16.8467L7.59201 19.3467Z"
              fill="#FBFBFE"
              stroke="#6979F8"
            />
          </G>
        </Svg>
      );

    case "Calendario":
      return (
        <Svg
          width={18}
          height={20}
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M2 20c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 010 18V4c0-.55.196-1.02.588-1.413A1.926 1.926 0 012 2h1V1c0-.283.096-.52.288-.713A.968.968 0 014 0c.283 0 .52.096.713.287C4.904.48 5 .718 5 1v1h8V1c0-.283.096-.52.287-.713A.968.968 0 0114 0c.283 0 .52.096.713.287.191.192.287.43.287.713v1h1c.55 0 1.02.196 1.413.587C17.803 2.98 18 3.45 18 4v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0116 20H2zm0-2h14V8H2v10zM2 6h14V4H2v2zm7 6a.967.967 0 01-.713-.287A.968.968 0 018 11c0-.283.096-.52.287-.713A.967.967 0 019 10c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713A.967.967 0 019 12zm-4 0a.967.967 0 01-.713-.287A.968.968 0 014 11c0-.283.096-.52.287-.713A.967.967 0 015 10c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713A.967.967 0 015 12zm8 0a.968.968 0 01-.713-.287A.968.968 0 0112 11c0-.283.096-.52.287-.713A.968.968 0 0113 10c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713A.968.968 0 0113 12zm-4 4a.967.967 0 01-.713-.287A.968.968 0 018 15c0-.283.096-.52.287-.713A.967.967 0 019 14c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713A.967.967 0 019 16zm-4 0a.967.967 0 01-.713-.287A.968.968 0 014 15c0-.283.096-.52.287-.713A.967.967 0 015 14c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713A.967.967 0 015 16zm8 0a.968.968 0 01-.713-.287A.968.968 0 0112 15c0-.283.096-.52.287-.713A.968.968 0 0113 14c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713A.968.968 0 0113 16z"
            fill={color}
          />
        </Svg>
      );

    case "successful":
      return (
        <Svg
          width={96}
          height={96}
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Mask
            id="a"
            style={{
              maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={96}
            height={96}
          >
            <Path fill="#D9D9D9" d="M0 0H96V96H0z" />
          </Mask>
          <G mask="url(#a)">
            <Path
              d="M42.4 66.4l28.2-28.2-5.6-5.6-22.6 22.6L31 43.8l-5.6 5.6 17 17zM48 88c-5.533 0-10.733-1.05-15.6-3.15-4.867-2.1-9.1-4.95-12.7-8.55-3.6-3.6-6.45-7.833-8.55-12.7C9.05 58.733 8 53.533 8 48c0-5.533 1.05-10.733 3.15-15.6 2.1-4.867 4.95-9.1 8.55-12.7 3.6-3.6 7.833-6.45 12.7-8.55C37.267 9.05 42.467 8 48 8c5.533 0 10.733 1.05 15.6 3.15 4.867 2.1 9.1 4.95 12.7 8.55 3.6 3.6 6.45 7.833 8.55 12.7C86.95 37.267 88 42.467 88 48c0 5.533-1.05 10.733-3.15 15.6-2.1 4.867-4.95 9.1-8.55 12.7-3.6 3.6-7.833 6.45-12.7 8.55C58.733 86.95 53.533 88 48 88zm0-8c8.933 0 16.5-3.1 22.7-9.3C76.9 64.5 80 56.933 80 48s-3.1-16.5-9.3-22.7C64.5 19.1 56.933 16 48 16s-16.5 3.1-22.7 9.3C19.1 31.5 16 39.067 16 48s3.1 16.5 9.3 22.7C31.5 76.9 39.067 80 48 80z"
              fill="#6979F8"
            />
          </G>
        </Svg>
      );
  }
}

export default SvgLogo;
