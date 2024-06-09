/* eslint-disable tailwindcss/no-custom-classname */
import { CheckIcon, ClockIcon } from "@heroicons/react/24/solid";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Career() {
    return (
        <div className="flex flex-col items-center justify-center bg-sky-900 text-sky-50">
            <div className="p-8 lg:py-12">
                <h2 className="mb-6 text-center text-3xl font-bold">
                    My Career
                </h2>
                <div
                    className="w-full lg:flex lg:justify-center"
                    style={{ width: "83vw" }}
                >
                    <div className="w-full lg:w-11/12">
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: "#0284c7",
                                    color: "#f0f9ff",
                                }}
                                contentArrowStyle={{
                                    borderRight: "7px solid  #0284c7",
                                }}
                                date="2023-2024"
                                dateClassName="lg:mx-2"
                                iconStyle={{
                                    background: "#0284c7",
                                    color: "#f0f9ff",
                                }}
                                icon={<ClockIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    OpenClassrooms training: Web integrator
                                </h3>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: "#0284c7",
                                    color: "#f0f9ff",
                                }}
                                contentArrowStyle={{
                                    borderRight: "7px solid  #0284c7",
                                }}
                                date="2021-2023"
                                dateClassName="lg:mx-2"
                                iconStyle={{
                                    background: "#0284c7",
                                    color: "#f0f9ff",
                                }}
                                icon={<CheckIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    BTS SIO (IT services for organisations)
                                </h3>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: "#0284c7",
                                    color: "#f0f9ff",
                                }}
                                contentArrowStyle={{
                                    borderRight: "7px solid  #0284c7",
                                }}
                                date="2018-2021"
                                dateClassName="lg:mx-2"
                                iconStyle={{
                                    background: "#0284c7",
                                    color: "#f0f9ff",
                                }}
                                icon={<CheckIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    BAC STMG (marketing option)
                                </h3>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
            <div className="w-11/12 border-b-2 border-sky-50 md:w-10/12 lg:mt-14 lg:w-8/12"></div>
        </div>
    );
}

export default Career;
