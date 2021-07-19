
import enTranslation from "./translations/en.json"

export const AppName = "xpostudy";

export const secondsToMilliSeconds = (seconds) => seconds * 1000;

export const projectTexts = (true ? enTranslation : enTranslation);

export const buildSlider = (intervalInSeconds, slides, reporter) => {
    let currentIndex = 1;
    let slidesSize = slides.length;
    if (slidesSize <= 1) {
        return null;
    }
    return setInterval(function() {
        reporter(slides[currentIndex]);
        currentIndex = (currentIndex >= slidesSize-1 ? 0 : currentIndex+1);
    }, secondsToMilliSeconds(intervalInSeconds));
}