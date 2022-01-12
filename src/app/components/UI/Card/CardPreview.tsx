import * as React from "react";

interface CardPreviewProps {
    title: string;
    desc: string;
    styleType: string;
    content: string;
    value: string;
}

const CardPreview: React.FC<CardPreviewProps> = (props: CardPreviewProps) => {
    const { title, desc, styleType, content, value } = props;

    return (
        <div className={`${styleType} d-flex align-items-center rounded p-5 mb-5`}>
            <span className="svg-icon svg-icon-warning mr-5">
                <span className="svg-icon svg-icon-lg" ng-reflect-cache-s-v-g="true" ng-reflect-inline-s-v-g="./assets/media/svg/icons/Home/">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>{title}</title>
                        <desc>{desc}</desc>
                        <defs></defs>
                        <g id="Stockholm-icons-/-Home-/-Library" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                            <path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" id="Combined-Shape" fill="#000000"></path>
                            <rect id="Rectangle-Copy-2" fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) " x="16.3255682" y="2.94551858" width="3" height="18" rx="1"></rect>
                        </g>
                    </svg>
                </span>
            </span>
            <div className="d-flex flex-column flex-grow-1 mr-2">
                <a href="#" className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1">
                    {content}
                </a>
                {/* <span className="text-muted font-size-sm">Due in 2 Days</span> */}
            </div>
            <span className="font-weight-bolder text-warning py-1 font-size-lg">{value}</span>
        </div>
    );
}

export default CardPreview;