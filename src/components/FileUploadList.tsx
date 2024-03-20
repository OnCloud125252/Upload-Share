import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";


export function FileUploadList({ files }: { files: FileList | null }) {
  return (
    <Table
      className={`h-full w-full select-text ${
        files?.length && files?.length !== 1 ? "" : "hidden"
      }`}
    >
      <TableHeader>
        <TableRow>
          <TableHead className="max-w-[8rem]">Type</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="max-w-[6rem] text-right">Size</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {(() => {
          if (!files) return null;
          const output = [];
          for (const file of files) {
            output.push(
              <TableRow key={file.name}>
                <TableCell className="max-w-[8rem] truncate">
                  {file.type.split("/")[1] || <i>unknown</i>}
                </TableCell>
                <TableCell className="max-w-[21rem] truncate">
                  {file.name}
                </TableCell>
                <TableCell className="max-w-[6rem] truncate text-right">
                  {prettyFileSize(file.size)}
                </TableCell>
              </TableRow>
            );
          }
          return output;
        })()}
      </TableBody>
    </Table>
  );
}

/**
 * Format bytes as human-readable text.
 *
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 *
 * @return Formatted string.
 */
function prettyFileSize(bytes: number, si = true, dp = 1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }

  const units = si
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return bytes.toFixed(dp) + " " + units[u];
}
