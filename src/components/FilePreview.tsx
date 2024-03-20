import { Dispatch, SetStateAction } from "react";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { FileUpload } from "./FileUpload";


export default function FilePreview({
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
  return (
    <Card className="w-[40rem] h-[30rem] relative select-none">
      <CardHeader className="h-[98%]">
        <div className="relative h-full w-full border-2 border-dashed border-muted-foreground rounded-xl overflow-hidden flex items-center justify-center">
          <FileUpload {...{ files, setFiles, isImage, setIsImage }} />
        </div>
      </CardHeader>
      <CardFooter className="absolute bottom-0 w-full justify-center text-xs pb-2">
        <p className="text-muted-foreground">
          Only image files supported preview, the preview image quality may be
          lower
        </p>
      </CardFooter>
    </Card>
  );
}
