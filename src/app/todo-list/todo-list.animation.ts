import { trigger, style, animate, transition } from "@angular/animations";

export const todoListAnimation = trigger("insertRemoveTrigger", [
    transition(":enter", [
        style({ transform: "scale(0)" }),
        animate("0.3s", style({ transform: "scaleX(1)" }))
    ]),
    transition(":leave", [
        animate(
            "0.2s",
            style({
                transform: "rotateX(90deg)",
                height: "0"
            })
        )
    ])
]);
