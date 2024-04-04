import { ToastContainer } from "toastify";

function Island() {
  // deno-lint-ignore no-explicit-any
  const ToastContainerComponent = ToastContainer as any;
  return <ToastContainerComponent />;
}

export default Island;
