import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        screens: {
            sm: "340px",
            md: "540px",
            lg: "768px",
            xl: "1180px"
        },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                sora: ["Noto Sans Sora Sompeng", "sans-serif"],
                archivo: ["Archivo Black", "sans-serif"]
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "12px",
                    md: "32px"
                }
            },
            keyframes: {
                move: {
                    "50%": { transform: "translateY(-1rem)" }
                },
                rotate: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg) "}
                },
                scaleUp: {
                    "0%": { transform: "scale(0.8)" },
                    "50%": { transform: "scale(1.2)" },
                    "100%": { transform: "scale(0.8)" }
                }
            },
            animation: {
                movingY: "move 3s linear infinite",
                rotating: "rotate 15s linear infinite",
                scalingUp: "scaleUp 3s linear infinite"
            }
        }
    },

    plugins: [forms],
};
