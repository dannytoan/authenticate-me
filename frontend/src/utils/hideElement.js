export const hide = (className) => {
    let element = document.querySelector(className);

    if (element.style.display === "none") {
        element.style.display = "flex"
    } else {
        element.style.display = "none"
    }
}
