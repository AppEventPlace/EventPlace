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

interface IconSvgProps {
  theme?: string;
  IconColor?: string;
  progress?: number;
  Icon_Height?: string;
  Icon_width?: string;
}

const IconSvg: React.FC<IconSvgProps> = ({
  theme,
  IconColor,
  progress,
  Icon_Height,
  Icon_width,
}) => {
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
          width={6}
          height={10}
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M1.775 5L5.45 8.675c.125.125.185.27.181.438a.623.623 0 01-.194.437.6.6 0 01-.437.188.6.6 0 01-.438-.188L.712 5.713a.999.999 0 010-1.425l3.85-3.85a.585.585 0 01.444-.182.63.63 0 01.444.194.6.6 0 01.188.438.6.6 0 01-.188.437L1.775 5z"
            fill={IconColor}
          />
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

          <Rect width={progress! * 3.56} height={4} rx={2} fill="#515EC0" />
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
            fill="#6979F8"
          />
        </Svg>
      );

    case "Check":
      return (
        <Svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M8.6 14.6l7.05-7.05-1.4-1.4L8.6 11.8 5.75 8.95l-1.4 1.4L8.6 14.6zM10 20a9.738 9.738 0 01-3.9-.788 10.099 10.099 0 01-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 010 10c0-1.383.263-2.683.787-3.9a10.099 10.099 0 012.138-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0110 0c1.383 0 2.683.263 3.9.787a10.098 10.098 0 013.175 2.138c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0120 10a9.738 9.738 0 01-.788 3.9 10.098 10.098 0 01-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137A9.738 9.738 0 0110 20zm0-2c2.233 0 4.125-.775 5.675-2.325C17.225 14.125 18 12.233 18 10c0-2.233-.775-4.125-2.325-5.675C14.125 2.775 12.233 2 10 2c-2.233 0-4.125.775-5.675 2.325C2.775 5.875 2 7.767 2 10c0 2.233.775 4.125 2.325 5.675C5.875 17.225 7.767 18 10 18z"
            fill="#6979F8"
          />
        </Svg>
      );

    case "Well_done":
      return (
        <Svg
          width={80}
          height={80}
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M40 64c4.4 0 8.167-1.567 11.3-4.7C54.433 56.167 56 52.4 56 48v-4c0-1.133-.383-2.083-1.15-2.85C54.083 40.383 53.133 40 52 40H28c-1.133 0-2.083.383-2.85 1.15-.767.767-1.15 1.717-1.15 2.85v4c0 4.4 1.567 8.167 4.7 11.3C31.833 62.433 35.6 64 40 64zm0-6c-2.8 0-5.167-.967-7.1-2.9-1.933-1.933-2.9-4.3-2.9-7.1v-2h20v2c0 2.8-.967 5.167-2.9 7.1-1.933 1.933-4.3 2.9-7.1 2.9zM26 20c-2.267 0-4.267.733-6 2.2-1.733 1.467-3.067 3.267-4 5.4-.333.733-.283 1.433.15 2.1.433.667 1.05 1.1 1.85 1.3.733.2 1.467.117 2.2-.25a3.348 3.348 0 001.6-1.65 7.62 7.62 0 011.75-2.2c.7-.6 1.517-.9 2.45-.9.933 0 1.75.317 2.45.95a8.331 8.331 0 011.75 2.25 3.123 3.123 0 001.6 1.6c.733.333 1.467.4 2.2.2.8-.2 1.417-.633 1.85-1.3.433-.667.483-1.367.15-2.1-.933-2.133-2.267-3.933-4-5.4-1.733-1.467-3.733-2.2-6-2.2zm28 0c-2.267 0-4.267.733-6 2.2-1.733 1.467-3.067 3.267-4 5.4-.333.733-.283 1.433.15 2.1.433.667 1.05 1.1 1.85 1.3.733.2 1.467.117 2.2-.25a3.348 3.348 0 001.6-1.65 7.62 7.62 0 011.75-2.2c.7-.6 1.517-.9 2.45-.9.933 0 1.75.317 2.45.95a8.331 8.331 0 011.75 2.25 3.123 3.123 0 001.6 1.6c.733.333 1.467.4 2.2.2.8-.2 1.417-.633 1.85-1.3.433-.667.483-1.367.15-2.1-.933-2.133-2.267-3.933-4-5.4-1.733-1.467-3.733-2.2-6-2.2zM40 80c-5.533 0-10.733-1.05-15.6-3.15-4.867-2.1-9.1-4.95-12.7-8.55-3.6-3.6-6.45-7.833-8.55-12.7C1.05 50.733 0 45.533 0 40c0-5.533 1.05-10.733 3.15-15.6 2.1-4.867 4.95-9.1 8.55-12.7 3.6-3.6 7.833-6.45 12.7-8.55C29.267 1.05 34.467 0 40 0c5.533 0 10.733 1.05 15.6 3.15 4.867 2.1 9.1 4.95 12.7 8.55 3.6 3.6 6.45 7.833 8.55 12.7C78.95 29.267 80 34.467 80 40c0 5.533-1.05 10.733-3.15 15.6-2.1 4.867-4.95 9.1-8.55 12.7-3.6 3.6-7.833 6.45-12.7 8.55C50.733 78.95 45.533 80 40 80zm0-8c8.933 0 16.5-3.1 22.7-9.3C68.9 56.5 72 48.933 72 40s-3.1-16.5-9.3-22.7C56.5 11.1 48.933 8 40 8s-16.5 3.1-22.7 9.3C11.1 23.5 8 31.067 8 40s3.1 16.5 9.3 22.7C23.5 68.9 31.067 72 40 72z"
            fill="#00C48C"
          />
        </Svg>
      );

    case "Icon_Wall":
      return (
        <Svg
          width={18}
          height={19}
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M16 2.5v2h-4v-2h4zm-10 0v6H2v-6h4zm10 8v6h-4v-6h4zm-10 4v2H2v-2h4zm12-14h-8v6h8v-6zM8 .5H0v10h8V.5zm10 8h-8v10h8v-10zm-10 4H0v6h8v-6z"
            fill={IconColor}
          />
        </Svg>
      );

    case "Icon_Perfil":
      return (
        <Svg
          width={20}
          height={21}
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M3.85 15.6c.85-.65 1.8-1.162 2.85-1.537A9.737 9.737 0 0110 13.5c1.15 0 2.25.188 3.3.563 1.05.374 2 .887 2.85 1.537a7.73 7.73 0 001.363-2.325A7.838 7.838 0 0018 10.5c0-2.217-.78-4.104-2.338-5.662C14.104 3.279 12.217 2.5 10 2.5s-4.104.78-5.662 2.338C2.779 6.396 2 8.283 2 10.5c0 .983.163 1.908.487 2.775.325.867.78 1.642 1.363 2.325zM10 11.5c-.983 0-1.813-.338-2.487-1.012C6.838 9.813 6.5 8.983 6.5 8c0-.983.338-1.813 1.013-2.487C8.188 4.838 9.017 4.5 10 4.5c.983 0 1.813.338 2.488 1.013C13.163 6.188 13.5 7.017 13.5 8c0 .983-.338 1.813-1.012 2.488-.675.675-1.505 1.012-2.488 1.012zm0 9a9.738 9.738 0 01-3.9-.788 10.099 10.099 0 01-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 010 10.5c0-1.383.263-2.683.787-3.9a10.099 10.099 0 012.138-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0110 .5c1.383 0 2.683.262 3.9.788a10.098 10.098 0 013.175 2.137c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0120 10.5a9.738 9.738 0 01-.788 3.9 10.098 10.098 0 01-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137a9.738 9.738 0 01-3.9.788zm0-2c.883 0 1.717-.13 2.5-.387A7.53 7.53 0 0014.65 17a7.53 7.53 0 00-2.15-1.113A7.933 7.933 0 0010 15.5c-.883 0-1.717.13-2.5.387A7.53 7.53 0 005.35 17a7.53 7.53 0 002.15 1.113 7.933 7.933 0 002.5.387zm0-9c.433 0 .792-.142 1.075-.425.283-.283.425-.642.425-1.075 0-.433-.142-.792-.425-1.075-.283-.283-.642-.425-1.075-.425-.433 0-.792.142-1.075.425C8.642 7.208 8.5 7.567 8.5 8c0 .433.142.792.425 1.075.283.283.642.425 1.075.425z"
            fill={IconColor}
          />
        </Svg>
      );

    case "Icon_Chat":
      return (
        <Svg
          width={20}
          height={21}
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M0 20.5v-18c0-.55.196-1.02.588-1.413A1.926 1.926 0 012 .5h16c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413v12c0 .55-.196 1.02-.587 1.412A1.926 1.926 0 0118 16.5H4l-4 4zm3.15-6H18v-12H2v13.125L3.15 14.5z"
            fill={IconColor}
          />
        </Svg>
      );

    case "Icon_Notificación":
      return (
        <Svg
          width={16}
          height={21}
          viewBox="0 0 16 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M0 17.5v-2h2v-7c0-1.383.417-2.612 1.25-3.688C4.083 3.737 5.167 3.034 6.5 2.7V2c0-.417.146-.77.438-1.063A1.447 1.447 0 018 .5c.417 0 .77.146 1.063.438.291.291.437.645.437 1.062v.7c1.333.333 2.417 1.037 3.25 2.112C13.583 5.888 14 7.117 14 8.5v7h2v2H0zm8 3c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 016 18.5h4c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 018 20.5zm-4-5h8v-7c0-1.1-.392-2.042-1.175-2.825C10.042 4.892 9.1 4.5 8 4.5s-2.042.392-2.825 1.175C4.392 6.458 4 7.4 4 8.5v7z"
            fill={IconColor}
          />
        </Svg>
      );

    case "Icon_Tickets":
      return (
        <Svg
          width={20}
          height={17}
          viewBox="0 0 20 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M10 13.5c.283 0 .52-.096.713-.287A.968.968 0 0011 12.5a.968.968 0 00-.287-.713A.968.968 0 0010 11.5a.967.967 0 00-.713.287A.968.968 0 009 12.5c0 .283.096.52.287.713.192.191.43.287.713.287zm0-4c.283 0 .52-.096.713-.287A.967.967 0 0011 8.5a.967.967 0 00-.287-.713A.968.968 0 0010 7.5a.968.968 0 00-.713.287A.968.968 0 009 8.5c0 .283.096.52.287.713.192.191.43.287.713.287zm0-4c.283 0 .52-.096.713-.287A.967.967 0 0011 4.5a.967.967 0 00-.287-.712A.968.968 0 0010 3.5a.968.968 0 00-.713.288A.968.968 0 009 4.5c0 .283.096.52.287.713.192.191.43.287.713.287zm8 11H2c-.55 0-1.02-.196-1.413-.588A1.926 1.926 0 010 14.5v-4c.55 0 1.02-.196 1.413-.588C1.804 9.521 2 9.05 2 8.5c0-.55-.196-1.02-.587-1.412A1.926 1.926 0 000 6.5v-4c0-.55.196-1.02.588-1.413A1.926 1.926 0 012 .5h16c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413v4c-.55 0-1.02.196-1.413.588A1.926 1.926 0 0018 8.5c0 .55.196 1.02.587 1.412.392.392.863.588 1.413.588v4c0 .55-.196 1.02-.587 1.412A1.926 1.926 0 0118 16.5zm0-2v-2.55a4.1 4.1 0 01-1.462-1.462A3.847 3.847 0 0116 8.5c0-.717.18-1.38.538-1.987A4.099 4.099 0 0118 5.05V2.5H2v2.55a4.1 4.1 0 011.462 1.463C3.821 7.12 4 7.783 4 8.5c0 .717-.18 1.38-.538 1.988A4.1 4.1 0 012 11.95v2.55h16z"
            fill={IconColor}
          />
        </Svg>
      );
    case "Send":
      return (
        <Svg
          width={Icon_width}
          height={Icon_Height}
          viewBox="0 0 70 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M67.2 34.2L5.6 60.2C4.26667 60.7333 3 60.6167 1.8 59.85C0.6 59.0833 0 57.9667 0 56.5V4.50001C0 3.03334 0.6 1.91667 1.8 1.15001C3 0.38334 4.26667 0.266674 5.6 0.800007L67.2 26.8C68.8667 27.5333 69.7 28.7667 69.7 30.5C69.7 32.2333 68.8667 33.4667 67.2 34.2ZM8 50.5L55.4 30.5L8 10.5V24.5L32 30.5L8 36.5V50.5Z"
            fill="#008B63"
          />
        </Svg>
      );
  }
};

export default IconSvg;
