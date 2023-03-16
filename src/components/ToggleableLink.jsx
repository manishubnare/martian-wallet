import React from "react";
import { Link } from "react-router-dom";


export default function ToggleableLink(props)  {
    const { disabled, ...rest } = props;
    return disabled ? props.children : <Link {...rest}>{props.children}</Link>;
}