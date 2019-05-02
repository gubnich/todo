import {
    trigger,
    style,
    animate,
    transition,
    state,
    keyframes
} from "@angular/animations";

export const todoInputAnimationStart = "start";
export const todoInputAnimationEnd = "end";

export const todoInputAnimation = trigger("alertFrame", [
    state(todoInputAnimationStart, style({})),
    state(todoInputAnimationEnd, style({})),
    transition(
        `${todoInputAnimationStart} => ${todoInputAnimationEnd}`,
        animate(
            "200ms ease-in",
            keyframes([
                style({
                    opacity: 0
                }),
                style({
                    opacity: 1,
                    transform: "translateY(-5px)"
                }),
                style({
                    boxShadow: "0 0 2px 0 #e5edee",
                    transform: "translateY(3px)"
                }),
                style({
                    transform: "translateY(0)"
                })
            ])
        )
    )
]);
