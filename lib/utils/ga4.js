import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-9LQVYNLY3X";


export const SELECT_CONTENT_BUTTON = "button";
export const SELECT_CONTENT_CHIP = "chip";

export const BUTTON_PREFIX = "BTN_";
export const CHIP_PREFIX = "CP_";


export const ga4Initialize = () => {
    ReactGA.initialize(MEASUREMENT_ID);
};

export const ga4SendPageView = () => {
    ReactGA.send("pageview");
};

export const ga4SendSelectContent = (type, params) => {
    ReactGA.event("select_content", {
        content_type: type,
        ...params
    });
};
