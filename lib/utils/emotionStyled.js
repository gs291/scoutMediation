
export const globalOptions = {
    shouldForwardProp: prop =>
        prop !== "data-m" && prop !== "data-w" && prop !== "data-s" && prop !== "data-a" && prop !== "data-bc"
};
