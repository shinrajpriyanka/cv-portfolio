import confetti from 'canvas-confetti';

export const triggerSprinkler = (duration = 2000) => {
    const end = Date.now() + duration;

    // go Buckeyes!
    const colors = ['#bb0000', '#ffffff', '#52aeff', '#f5c842'];

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.8 },
            colors: colors
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.8 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
};
