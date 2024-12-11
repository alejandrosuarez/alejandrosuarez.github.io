import { useTransition } from "react-spring";

export const usePageTransitions = (currentPage: React.ReactNode) =>
  useTransition(currentPage, {
    from: { transform: "translateX(-20px)", opacity: 0 },
    enter: { transform: "translateX(0px)", opacity: 1 },
    leave: { transform: "translateY(20px)", opacity: 0 },
    config: {
        mass: 1,
        friction: 20,
        tension: 200,
        duration: 300,
    },
    exitBeforeEnter: true,
});