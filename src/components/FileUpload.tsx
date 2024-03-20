import { Dispatch, FormEvent, SetStateAction, useRef } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileUploadList } from "./FileUploadList";


export function FileUpload({
  files,
  setFiles,
  isImage,
  setIsImage
}: {
  files: FileList | null;
  setFiles: Dispatch<SetStateAction<FileList | null>>;
  isImage: boolean;
  setIsImage: Dispatch<SetStateAction<boolean>>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function handleFile(event: FormEvent<HTMLInputElement>) {
    try {
      event.preventDefault();
      const selectedFiles = event.currentTarget.files;
      if (selectedFiles?.length) {
        setFiles(selectedFiles);

        const selectedFile = selectedFiles[0];
        if (selectedFile.type.startsWith("image")) {
          const canvas = canvasRef.current;
          if (!canvas) {
            throw new Error("Cannot find canvas ref");
          }

          const reader = new FileReader();
          reader.readAsDataURL(selectedFile);
          reader.onload = () => {
            const image = new Image();
            if (reader.result !== null) {
              image.src = reader.result as string;
            }
            else {
              throw new Error("Failed to load image");
            }

            setIsImage(true);
            drawContain(canvas, image);
          };
        }
        else {
          setIsImage(false);
        }
      }
      else {
        throw new Error("Cannot get file");
      }
    }
    catch (error: any) {
      setIsImage(false);
      console.error(error.message);
    }
  }

  return (
    <>
      <canvas
        className={`absolute h-full w-full ${
          isImage && files?.length === 1 ? "" : "hidden"
        }`}
        ref={canvasRef}
      />
      <FileUploadList files={files} />
      <button className={`h-full w-full ${files?.length ? "hidden" : ""}`}>
        <Label
          className="h-full w-full text-muted-foreground cursor-pointer flex items-center justify-center"
          htmlFor="file"
        >
          No file selected
        </Label>
        <Input
          className="hidden"
          id="file"
          type="file"
          multiple
          onInput={handleFile}
        />
      </button>
    </>
  );
}

function drawContain(canvas: HTMLCanvasElement, image: HTMLImageElement) {
  image.onload = () => {
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = image.width / image.height;

    let dx, dy, dw, dh;
    if (imgRatio <= canvasRatio) {
      dw = imgRatio * canvas.width;
      dh = canvas.height;
      dx = (canvas.width - dw) / 2;
      dy = 0;
    }
    else {
      dw = canvas.width;
      dh = dw / imgRatio;
      dx = 0;
      dy = (canvas.height - dh) / 2;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      console.error("Failed to get context");
      return;
    }
    context.drawImage(image, dx, dy, dw, dh);
  };
}

// function drawCover(canvas: HTMLCanvasElement, image: HTMLImageElement) {
//   image.onload = () => {
//     const canvasRatio = canvas.width / canvas.height;
//     const imgRatio = image.width / image.height;

//     let sx, sy, sw, sh;
//     if (imgRatio <= canvasRatio) {
//       sw = image.width;
//       sh = sw / canvasRatio;
//       sx = 0;
//       sy = (image.height - sh) / 2;
//     }
//     else {
//       sh = image.height;
//       sw = sh * canvasRatio;
//       sx = (image.width - sw) / 2;
//       sy = 0;
//     }

//     const context = canvas.getContext("2d");
//     if (!context) {
//       console.error("Failed to get context");
//       return;
//     }
//     context.drawImage(image, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
//   };
// }
