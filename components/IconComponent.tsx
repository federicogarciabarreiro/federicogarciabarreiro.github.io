import { forwardRef } from "react";

const IconComponent = forwardRef<HTMLDivElement, { icon: any }>(
  (props, ref): any => {
    return (
    <div
        ref={ref}
        {...props}
      >
        {props.icon}
    </div>
    );
  }
);
IconComponent.displayName = "IconComponent";
export default IconComponent;
