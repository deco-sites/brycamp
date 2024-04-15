import { scriptAsDataURI } from "apps/utils/dataURI.ts";

export default function MyAnalytics(_props: unknown) {
  return (
    <script
      defer
      src={scriptAsDataURI(() => {
        globalThis.window.DECO.events.subscribe((e) => {
          console.log(e);
        });
      })}
    >
    </script>
  );
}
