import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export function FileUpload() {
  return (
    <button className="bg-primary rounded-lg flex items-center justify-center">
      <Label className="text-primary-foreground p-5 cursor-pointer" htmlFor="picture">
        Select Picture To Upload
      </Label>
      <Input className="hidden" id="picture" type="file" aria-label="a" />
    </button>
  );
}
