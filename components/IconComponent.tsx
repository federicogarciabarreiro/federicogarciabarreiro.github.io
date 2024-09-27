import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
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
