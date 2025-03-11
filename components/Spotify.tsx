import React from "react";

const Spotify: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-between m-6 max-w-screen-xl lg:mx-auto">
      <a
        className="inline-flex items-center justify-left w-full my-12"
        href="#spotify"
        id="spotify"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>

        <h1 className="text-3xl ml-2">Activity</h1>
      </a>
      <div className="flex flex-wrap items-center justify-around mx-6 w-full">
        <div className="mockup-window bg-base-300 lg:max-w-screen-xl w-full">
          <p className="p-4">
            My favorite songs that ive always listened to while coding. i love
            jazz and some classical music.
          </p>
          <div className="flex justify-center p-4 border-t border-base-300 bg-transparent">
            <iframe
              title="Spotify On Repeat"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/5V5EGp0nk9sdaiWtZbSYRN?utm_source=generator&theme=0"
              width="100%"
              height="500"
              className="rounded-xl bg-transparent"
              allow="encrypted-media"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
