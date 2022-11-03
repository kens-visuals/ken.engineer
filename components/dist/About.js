"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var framer_motion_1 = require("framer-motion");
// Components
var Socials_1 = require("./Socials");
var Section_1 = require("./Section");
// Assets
var image_preview_png_1 = require("../public/assets/image-preview.png");
// Animations
var animations_1 = require("../utils/animations");
function About() {
    var titleVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.2
            }
        }
    };
    var letterVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95]
            }
        }
    };
    return (React.createElement(Section_1["default"], { id: "about" },
        React.createElement("h2", { className: "text-heading-lg lg:text-8xl" },
            "Hi, I\u2019m",
            ' ',
            React.createElement(framer_motion_1.motion.span, { initial: "initial", whileInView: "animate", viewport: { once: true, amount: 'all' }, variants: titleVariants }, 'Ken'.split('').map(function (letter) { return (React.createElement(framer_motion_1.motion.span, { key: letter, variants: letterVariants, className: "inline-block text-js-yellow" }, letter)); }))),
        React.createElement(framer_motion_1.motion.div, { initial: "initial", whileInView: "animate", variants: titleVariants, viewport: { once: true, amount: 'all' }, className: "mt-10 md:flex md:items-center md:gap-8" },
            React.createElement(image_1["default"], { alt: "Ken Nersisyan", src: image_preview_png_1["default"], height: 300, width: 300, className: "my-10 lg:mb-0 lg:basis-1/2 lg:p-6" }),
            React.createElement(framer_motion_1.motion.div, { initial: "initial", whileInView: "animate", variants: animations_1.fadeIn, viewport: { once: true, amount: 0.2 }, className: "lg:basis-1/2" },
                React.createElement("h3", { className: "text-heading-sm lg:text-heading-md" }, "...and I\u2019d love to work on your next project"),
                React.createElement("p", { className: "mt-4 mb-8 text-sm text-accent-grey-light dark:text-accent-grey-dark lg:text-body" },
                    "With over 5 years of experience in various front-end projects, I\u2019m your one-stop shop for your next million dollar idea. I\u2019m a front-end developer who\u2019s madly in love with JavaScript and interactive web development. I will help you and your team to achive the best possible results for your project.",
                    ' '),
                React.createElement("div", { className: "lg:flex lg:items-center lg:justify-between lg:gap-4" },
                    React.createElement(Socials_1["default"], null),
                    React.createElement("a", { href: "mailto:karapet.nersisyan@yahoo.com", target: "_blank", rel: "noopener noreferrer", className: "my-4 inline-block w-full rounded-full bg-js-yellow p-4 text-center text-2xl font-bold uppercase tracking-widest text-primary-dark md:basis-1/2 lg:p-2.5" }, "Hire Me!"))))));
}
exports["default"] = About;
