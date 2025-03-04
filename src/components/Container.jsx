import { cn } from "@/lib/utils";

function Container({ children, className, ...props }) {
  return (
    <div {...props} className={cn("max-w-full mx-auto px-5", className)}>
      {children}
    </div>
  );
}

export default Container;
