"use client";

import React, { useState } from "react";

export default function Home() {
  return (
    <div>
      {" "}
      <div className="w-screen h-screen">
        <iframe
          src="https://productivityapp-six.vercel.app/"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
