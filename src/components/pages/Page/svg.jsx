import * as React from "react";
const SVGComponent = (props) => {
    const Path = [
        <path
            id="i0"
            fill="none"
            stroke="#000000"
            d="M79.839,119.27H69.194l-8.07-33.188H60.78l-8.07,33.188H42.065L21.289,34.731h8.929 l16.998,69.886h0.343l8.929-36.821l-8.07-33.064h8.928l16.999,69.886h0.344l16.998-69.886h8.929L79.839,119.27z"
        />,
        <path
            id="i1"
            fill="none"
            stroke="#000000"
            d="M119.845,41.244v32.438h20.776v6.639h-20.776v32.438h29.533v6.512h-38.461V34.731h37.088 v6.513H119.845z"
        />,
        <path
            id="i2"
            fill="none"
            stroke="#000000"
            d="M198.484,112.758v6.512h-36.916V34.731h8.928v78.026H198.484z"
        />,
        <path
            id="i3"
            fill="none"
            stroke="#000000"
            d="M245.013,63.036V49.76c0-5.385-6.011-9.769-13.393-9.769c-7.384,0-13.394,4.383-13.394,9.769 v54.481c0,5.385,6.01,9.77,13.394,9.77c7.382,0,13.393-4.385,13.393-9.77V92.719h8.928v11.522c0,9.018-9.958,16.281-22.32,16.281 c-12.363,0-22.322-7.264-22.322-16.281V49.76c0-9.017,9.959-16.281,22.322-16.281c12.362,0,22.32,7.264,22.32,16.281v12.524 L245.013,63.036z"
        />,
        <path
            id="i4"
            fill="none"
            stroke="#000000"
            d="M267.504,49.76c0-9.017,9.959-16.281,22.321-16.281s22.32,7.264,22.32,16.281v54.481 c0,9.018-9.958,16.281-22.32,16.281s-22.321-7.264-22.321-16.281V49.76z M276.432,104.241c0,5.385,6.01,9.77,13.394,9.77 c7.382,0,13.393-4.385,13.393-9.77V49.76c0-5.385-6.011-9.769-13.393-9.769c-7.384,0-13.394,4.383-13.394,9.769V104.241z"
        />,
        <path
            id="i5"
            fill="none"
            stroke="#000000"
            d="M366.229,119.27h-10.129l-18.373-70.887h-0.344v70.887h-8.928V34.731h13.393l19.059,74.519 h0.344l19.23-74.519h13.564v84.538h-8.93V47.757h-0.342L366.229,119.27z"
        />,
        <path
            id="i6"
            fill="none"
            stroke="#000000"
            d="M420.145,41.244v32.438h20.775v6.639h-20.775v32.438h29.532v6.512h-38.461V34.731h37.087 v6.513H420.145z"
        />
    ]
    var current_frame, total_frames, length, handle;

    var init = function () {
        current_frame = 0;
        total_frames = 60;
        length = [];
        for (var i = 0; i < 7; i++) {
            // Path[i] = document.getElementById('i' + i);
            console.log(Path[i]);
            var l = Path[i].getTotalLength();
            length[i] = l;
            Path[i].style.strokeDasharray = l + ' ' + l;
            Path[i].style.strokeDashoffset = l;
        }
        handle = 0;
    }


    var draw = function () {
        var progress = current_frame / total_frames;
        if (progress > 1) {
            window.cancelAnimationFrame(handle);
        } else {
            current_frame++;
            for (var j = 0; j < Path.length; j++) {
                Path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
            }
            handle = window.requestAnimationFrame(draw);
        }
    };

    init();
    draw();
    return (
        <div id="myobj">
            <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="470.321px"
                height="203.871px"
                viewBox="0 0 470.321 203.871"
                enableBackground="new 0 0 470.321 203.871"
                xmlSpace="preserve"
                {...props}
            >
                <g>
                    <path
                        id="i0"
                        fill="none"
                        stroke="#000000"
                        d="M79.839,119.27H69.194l-8.07-33.188H60.78l-8.07,33.188H42.065L21.289,34.731h8.929 l16.998,69.886h0.343l8.929-36.821l-8.07-33.064h8.928l16.999,69.886h0.344l16.998-69.886h8.929L79.839,119.27z"
                    />
                    <path
                        id="i1"
                        fill="none"
                        stroke="#000000"
                        d="M119.845,41.244v32.438h20.776v6.639h-20.776v32.438h29.533v6.512h-38.461V34.731h37.088 v6.513H119.845z"
                    />
                    <path
                        id="i2"
                        fill="none"
                        stroke="#000000"
                        d="M198.484,112.758v6.512h-36.916V34.731h8.928v78.026H198.484z"
                    />
                    <path
                        id="i3"
                        fill="none"
                        stroke="#000000"
                        d="M245.013,63.036V49.76c0-5.385-6.011-9.769-13.393-9.769c-7.384,0-13.394,4.383-13.394,9.769 v54.481c0,5.385,6.01,9.77,13.394,9.77c7.382,0,13.393-4.385,13.393-9.77V92.719h8.928v11.522c0,9.018-9.958,16.281-22.32,16.281 c-12.363,0-22.322-7.264-22.322-16.281V49.76c0-9.017,9.959-16.281,22.322-16.281c12.362,0,22.32,7.264,22.32,16.281v12.524 L245.013,63.036z"
                    />
                    <path
                        id="i4"
                        fill="none"
                        stroke="#000000"
                        d="M267.504,49.76c0-9.017,9.959-16.281,22.321-16.281s22.32,7.264,22.32,16.281v54.481 c0,9.018-9.958,16.281-22.32,16.281s-22.321-7.264-22.321-16.281V49.76z M276.432,104.241c0,5.385,6.01,9.77,13.394,9.77 c7.382,0,13.393-4.385,13.393-9.77V49.76c0-5.385-6.011-9.769-13.393-9.769c-7.384,0-13.394,4.383-13.394,9.769V104.241z"
                    />
                    <path
                        id="i5"
                        fill="none"
                        stroke="#000000"
                        d="M366.229,119.27h-10.129l-18.373-70.887h-0.344v70.887h-8.928V34.731h13.393l19.059,74.519 h0.344l19.23-74.519h13.564v84.538h-8.93V47.757h-0.342L366.229,119.27z"
                    />
                    <path
                        id="i6"
                        fill="none"
                        stroke="#000000"
                        d="M420.145,41.244v32.438h20.775v6.639h-20.775v32.438h29.532v6.512h-38.461V34.731h37.087 v6.513H420.145z"
                    />
                </g>
            </svg>
        </div>
    )
};
export default SVGComponent;
