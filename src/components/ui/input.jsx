import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, type, showPassword, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);

    const handleIconVisibility = () => {
      setIsVisible((visible) => !visible);
    };

    const PasswordIcon = ({ onClick }) => {
      return <div onClick={onClick}>{!isVisible ? <Eye /> : <EyeOff />}</div>;
    };

    const Circle = ({ children }) => (
      <div className="w-10 h-10 rounded-full absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer flex items-center justify-center hover:bg-slate-300/20">
        {children}
      </div>
    );

    return (
      <div className="flex relative">
        <input
          onChange={props.onChange}
          type={type === "password" ? (isVisible ? "text" : "password") : type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <Circle>
            <PasswordIcon
              onClick={handleIconVisibility}
              isVisible={isVisible}
            />
          </Circle>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
