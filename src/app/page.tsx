"use client";

import { useState } from "react";

import FilePreview from "@/components/FilePreview";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";

import "@/styles/clerk-theme.css";


export default function HomePage() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [isImage, setIsImage] = useState(false);

  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center gap-8">
        <FilePreview {...{ files, setFiles, isImage, setIsImage }} />
        <div className="w-[40rem] select-none flex justify-evenly gap-4">
          <Button
            className={`text-primary-foreground p-5 text-lg flex items-center gap-1 ${
              files?.length
                ? ""
                : "cursor-not-allowed text-muted-foreground bg-muted hover:bg-muted"
            }`}
            onClick={() => {
              if (files?.length) {
                // eslint-disable-next-line no-console
                console.log(files);
              }
            }}
          >
            Upload
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
              className="w-5 h-5"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <path d="M7 9l5 -5l5 5" />
              <path d="M12 4l0 12" />
            </svg>
          </Button>
          <Button
            className={`text-primary-foreground p-5 text-lg bg-red-700 flex items-center gap-1 hover:bg-red-800 ${
              files?.length
                ? ""
                : "cursor-not-allowed text-muted-foreground bg-muted hover:bg-muted"
            }`}
            onClick={() => {
              if (files?.length) {
                setFiles(null);
              }
            }}
          >
            Cancel
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
              className="w-5 h-5"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </Button>
        </div>
      </main>
    </div>
  );
}
