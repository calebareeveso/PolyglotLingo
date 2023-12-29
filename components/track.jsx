"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Track() {
  const [play, setplay] = useState(false);
  const [play2, setplay2] = useState(false);
  const [onload, setonload] = useState(false);
  const audioPlayer = useRef(null);
  const audioPlayer2 = useRef(null);
  return (
    <div className="mb-2 w-full bg-white border border-black text-center p-2 text-2xl sm:text-2xl py-16 flex justify-around">
      <div className="space-y-4 scale-150">
        <div className="flex space-x-2">
          <button
            onClick={() => {
              setplay(!play);
              // let audio = new Audio("/assets/audio/audio.MP3");
              if (audioPlayer.current.paused) {
                audioPlayer.current.play();
              } else {
                audioPlayer.current.pause();
              }
            }}
          >
            {play ? (
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.7001 17.4998C34.7001 22.0615 32.8879 26.4364 29.6623 29.662C26.4367 32.8877 22.0618 34.6998 17.5 34.6998C12.9383 34.6998 8.56344 32.8877 5.33781 29.662C2.11219 26.4364 0.300049 22.0615 0.300049 17.4998C0.300049 12.9381 2.11219 8.56319 5.33781 5.33757C8.56344 2.11194 12.9383 0.299805 17.5 0.299805C22.0618 0.299805 26.4367 2.11194 29.6623 5.33757C32.8879 8.56319 34.7001 12.9381 34.7001 17.4998ZM11.05 13.1998C11.05 12.6296 11.2766 12.0827 11.6798 11.6795C12.083 11.2763 12.6298 11.0498 13.2 11.0498C13.7703 11.0498 14.3171 11.2763 14.7203 11.6795C15.1235 12.0827 15.35 12.6296 15.35 13.1998V21.7998C15.35 22.37 15.1235 22.9169 14.7203 23.3201C14.3171 23.7233 13.7703 23.9498 13.2 23.9498C12.6298 23.9498 12.083 23.7233 11.6798 23.3201C11.2766 22.9169 11.05 22.37 11.05 21.7998V13.1998ZM21.8 11.0498C21.2298 11.0498 20.683 11.2763 20.2798 11.6795C19.8766 12.0827 19.65 12.6296 19.65 13.1998V21.7998C19.65 22.37 19.8766 22.9169 20.2798 23.3201C20.683 23.7233 21.2298 23.9498 21.8 23.9498C22.3703 23.9498 22.9171 23.7233 23.3203 23.3201C23.7235 22.9169 23.95 22.37 23.95 21.7998V13.1998C23.95 12.6296 23.7235 12.0827 23.3203 11.6795C22.9171 11.2763 22.3703 11.0498 21.8 11.0498Z"
                  fill="black"
                />
              </svg>
            ) : (
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5 34.6998C22.0618 34.6998 26.4367 32.8877 29.6623 29.662C32.8879 26.4364 34.7001 22.0615 34.7001 17.4998C34.7001 12.9381 32.8879 8.56319 29.6623 5.33757C26.4367 2.11194 22.0618 0.299805 17.5 0.299805C12.9383 0.299805 8.56344 2.11194 5.33781 5.33757C2.11219 8.56319 0.300049 12.9381 0.300049 17.4998C0.300049 22.0615 2.11219 26.4364 5.33781 29.662C8.56344 32.8877 12.9383 34.6998 17.5 34.6998ZM16.5433 11.411C16.2195 11.195 15.8431 11.0709 15.4544 11.052C15.0656 11.0331 14.679 11.1201 14.3358 11.3038C13.9925 11.4874 13.7056 11.7608 13.5056 12.0947C13.3056 12.4286 13.2 12.8106 13.2 13.1998V21.7998C13.2 22.189 13.3056 22.571 13.5056 22.9049C13.7056 23.2388 13.9925 23.5122 14.3358 23.6958C14.679 23.8795 15.0656 23.9665 15.4544 23.9476C15.8431 23.9287 16.2195 23.8046 16.5433 23.5886L22.9933 19.2886C23.2878 19.0923 23.5292 18.8263 23.6962 18.5142C23.8632 18.2022 23.9505 17.8537 23.9505 17.4998C23.9505 17.1459 23.8632 16.7974 23.6962 16.4854C23.5292 16.1733 23.2878 15.9074 22.9933 15.711L16.5433 11.411Z"
                  fill="black"
                />
              </svg>
            )}
          </button>
          <svg
            width="214"
            height="43"
            viewBox="0 0 214 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="12.5" width="6" height="18" rx="3" fill="black" />
            <rect x="8" y="6.5" width="6" height="30" rx="3" fill="black" />
            <rect x="16" width="6" height="43" rx="3" fill="black" />
            <rect x="24" y="6.5" width="6" height="30" rx="3" fill="black" />
            <rect x="32" y="12.5" width="6" height="18" rx="3" fill="black" />
            <rect x="40" y="17.5" width="6" height="8" rx="3" fill="black" />
            <rect x="48" y="18.5" width="6" height="6" rx="3" fill="black" />
            <rect x="56" y="17.5" width="6" height="8" rx="3" fill="black" />
            <rect x="64" y="12.5" width="6" height="18" rx="3" fill="black" />
            <rect x="72" y="6.5" width="6" height="30" rx="3" fill="black" />
            <rect x="80" width="6" height="43" rx="3" fill="black" />
            <rect x="88" y="6.5" width="6" height="30" rx="3" fill="black" />
            <rect x="96" y="12.5" width="6" height="18" rx="3" fill="black" />
            <rect x="104" y="18.5" width="6" height="6" rx="3" fill="black" />
            <rect x="112" y="17.5" width="6" height="8" rx="3" fill="black" />
            <rect x="120" y="12.5" width="6" height="18" rx="3" fill="black" />
            <rect x="128" y="6.5" width="6" height="30" rx="3" fill="black" />
            <rect x="136" width="6" height="43" rx="3" fill="black" />
            <rect x="144" y="6.5" width="6" height="30" rx="3" fill="black" />
            <rect x="152" y="12.5" width="6" height="18" rx="3" fill="black" />
            <rect x="160" y="18.5" width="6" height="6" rx="3" fill="black" />
            <rect x="168" y="17.5" width="6" height="8" rx="3" fill="black" />
            <rect x="176" y="12.5" width="6" height="18" rx="3" fill="black" />
            <rect x="184" y="6.5" width="6" height="30" rx="3" fill="black" />
            <rect x="192" width="6" height="43" rx="3" fill="black" />
            <rect x="200" y="6.5" width="6" height="30" rx="3" fill="black" />
            <rect x="208" y="12.5" width="6" height="18" rx="3" fill="black" />
          </svg>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => {
              setplay2(!play2);
              if (audioPlayer2.current.paused) {
                audioPlayer2.current.play();
              } else {
                audioPlayer2.current.pause();
              }
            }}
          >
            {play2 ? (
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.7001 17.4998C34.7001 22.0615 32.8879 26.4364 29.6623 29.662C26.4367 32.8877 22.0618 34.6998 17.5 34.6998C12.9383 34.6998 8.56344 32.8877 5.33781 29.662C2.11219 26.4364 0.300049 22.0615 0.300049 17.4998C0.300049 12.9381 2.11219 8.56319 5.33781 5.33757C8.56344 2.11194 12.9383 0.299805 17.5 0.299805C22.0618 0.299805 26.4367 2.11194 29.6623 5.33757C32.8879 8.56319 34.7001 12.9381 34.7001 17.4998ZM11.05 13.1998C11.05 12.6296 11.2766 12.0827 11.6798 11.6795C12.083 11.2763 12.6298 11.0498 13.2 11.0498C13.7703 11.0498 14.3171 11.2763 14.7203 11.6795C15.1235 12.0827 15.35 12.6296 15.35 13.1998V21.7998C15.35 22.37 15.1235 22.9169 14.7203 23.3201C14.3171 23.7233 13.7703 23.9498 13.2 23.9498C12.6298 23.9498 12.083 23.7233 11.6798 23.3201C11.2766 22.9169 11.05 22.37 11.05 21.7998V13.1998ZM21.8 11.0498C21.2298 11.0498 20.683 11.2763 20.2798 11.6795C19.8766 12.0827 19.65 12.6296 19.65 13.1998V21.7998C19.65 22.37 19.8766 22.9169 20.2798 23.3201C20.683 23.7233 21.2298 23.9498 21.8 23.9498C22.3703 23.9498 22.9171 23.7233 23.3203 23.3201C23.7235 22.9169 23.95 22.37 23.95 21.7998V13.1998C23.95 12.6296 23.7235 12.0827 23.3203 11.6795C22.9171 11.2763 22.3703 11.0498 21.8 11.0498Z"
                  fill="black"
                />
              </svg>
            ) : (
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5 34.6998C22.0618 34.6998 26.4367 32.8877 29.6623 29.662C32.8879 26.4364 34.7001 22.0615 34.7001 17.4998C34.7001 12.9381 32.8879 8.56319 29.6623 5.33757C26.4367 2.11194 22.0618 0.299805 17.5 0.299805C12.9383 0.299805 8.56344 2.11194 5.33781 5.33757C2.11219 8.56319 0.300049 12.9381 0.300049 17.4998C0.300049 22.0615 2.11219 26.4364 5.33781 29.662C8.56344 32.8877 12.9383 34.6998 17.5 34.6998ZM16.5433 11.411C16.2195 11.195 15.8431 11.0709 15.4544 11.052C15.0656 11.0331 14.679 11.1201 14.3358 11.3038C13.9925 11.4874 13.7056 11.7608 13.5056 12.0947C13.3056 12.4286 13.2 12.8106 13.2 13.1998V21.7998C13.2 22.189 13.3056 22.571 13.5056 22.9049C13.7056 23.2388 13.9925 23.5122 14.3358 23.6958C14.679 23.8795 15.0656 23.9665 15.4544 23.9476C15.8431 23.9287 16.2195 23.8046 16.5433 23.5886L22.9933 19.2886C23.2878 19.0923 23.5292 18.8263 23.6962 18.5142C23.8632 18.2022 23.9505 17.8537 23.9505 17.4998C23.9505 17.1459 23.8632 16.7974 23.6962 16.4854C23.5292 16.1733 23.2878 15.9074 22.9933 15.711L16.5433 11.411Z"
                  fill="black"
                />
              </svg>
            )}
          </button>
          <svg
            width="214"
            height="27"
            viewBox="0 0 214 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="16" width="6" height="11" rx="3" fill="black" />
            <rect x="8" y="8" width="6" height="19" rx="3" fill="black" />
            <rect x="16" width="6" height="27" rx="3" fill="black" />
            <rect x="24" y="8" width="6" height="19" rx="3" fill="black" />
            <rect x="32" y="16" width="6" height="11" rx="3" fill="black" />
            <rect x="40" y="22" width="6" height="5" rx="2.5" fill="black" />
            <rect x="48" y="23" width="6" height="4" rx="2" fill="black" />
            <rect x="56" y="22" width="6" height="5" rx="2.5" fill="black" />
            <rect x="64" y="16" width="6" height="11" rx="3" fill="black" />
            <rect x="72" y="8" width="6" height="19" rx="3" fill="black" />
            <rect x="80" width="6" height="27" rx="3" fill="black" />
            <rect x="88" y="8" width="6" height="19" rx="3" fill="black" />
            <rect x="96" y="16" width="6" height="11" rx="3" fill="black" />
            <rect x="104" y="23" width="6" height="4" rx="2" fill="black" />
            <rect x="112" y="22" width="6" height="5" rx="2.5" fill="black" />
            <rect x="120" y="16" width="6" height="11" rx="3" fill="black" />
            <rect x="128" y="8" width="6" height="19" rx="3" fill="black" />
            <rect x="136" width="6" height="27" rx="3" fill="black" />
            <rect x="144" y="8" width="6" height="19" rx="3" fill="black" />
            <rect x="152" y="16" width="6" height="11" rx="3" fill="black" />
            <rect x="160" y="23" width="6" height="4" rx="2" fill="black" />
            <rect x="168" y="22" width="6" height="5" rx="2.5" fill="black" />
            <rect x="176" y="16" width="6" height="11" rx="3" fill="black" />
            <rect x="184" y="8" width="6" height="19" rx="3" fill="black" />
            <rect x="192" width="6" height="27" rx="3" fill="black" />
            <rect x="200" y="8" width="6" height="19" rx="3" fill="black" />
            <rect x="208" y="16" width="6" height="11" rx="3" fill="black" />
          </svg>
        </div>
      </div>
      <audio
        ref={audioPlayer}
        src="/assets/audio/audio.MP3"
        preload="auto"
      ></audio>
      <audio
        ref={audioPlayer2}
        src="/assets/audio/audio.MP3"
        preload="auto"
      ></audio>
    </div>
  );
}
