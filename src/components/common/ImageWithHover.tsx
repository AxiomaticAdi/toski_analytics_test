import { Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Image with hover effect: image is dimmed and white text appears
 */
export const ImageWithHover = React.memo(function ImageWithHover({
    label,
    width = 40,
    image,
    alt,
}: {
    /**
     * Text to be displayed when this image is hovered
     */
    label: string;
    width?: number;
    image: string;
    alt?: string;
}) {
    // Set hover effect to false
    const [hovered, setHovered] = useState(false);

    return (
        <div
            style={{
                position: "relative",
                cursor: "pointer",
                width: "auto",
                height: "auto",
                borderRadius: "8px",
                overflow: "hidden",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image
                alt={alt}
                src={image}
                width={width}
                borderRadius={8}
                style={{
                    filter: hovered ? "brightness(50%)" : "none",
                    transition: "filter 0.3s",
                }}
            />
            <div
                style={{
                    // The following properties help with responsively layering the text and darkening effect
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",

                    // The following control text and opacity
                    opacity: hovered ? 1 : 0,
                    transition: "opacity 0.3s",
                    color: "white",
                    textAlign: "center",
                    fontSize: "12px",
                    width: "100%",
                    textOverflow: "ellipsis",
                }}
            >
                {label}
            </div>
        </div>
    );
});
