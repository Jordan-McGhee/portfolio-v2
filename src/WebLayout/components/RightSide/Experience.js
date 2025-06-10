import React from "react";
import experience from "../../../json/experience.json"

const Experience = () => {

    const HIGHLIGHT_PHRASES = [
        "high-impact creatives",
        "to pitch and tailor creative services",
        "ensuring campaign effectiveness and client satisfaction",
        "the expansion of creative offerings",
        "60+",
        "more than 65%"
    ];

    function highlightPhrases(text, phrases) {
        // Sort phrases by length to avoid partial replacements
        const sortedPhrases = [...phrases].sort((a, b) => b.length - a.length);
        // Escape special regex characters in phrases
        const escapeRegExp = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(
            sortedPhrases.map(escapeRegExp).join('|'),
            'gi'
        );
        // Replace matches with <span>
        let lastIndex = 0;
        const elements = [];
        text.replace(regex, (match, offset) => {
            // Push preceding text
            if (offset > lastIndex) {
                elements.push(text.slice(lastIndex, offset));
            }
            // Push highlighted span
            elements.push(
                <span key={offset} className="group-hover:text-accent transition-colors duration-300 ease-in-out" >{match}</span>
            );
            lastIndex = offset + match.length;
            return match;
        });
        // Push any remaining text
        if (lastIndex < text.length) {
            elements.push(text.slice(lastIndex));
        }
        return elements;
    }

    return (
        <div className="mb-12 leading-snug scroll-mt-20" id="experience">

            <p className="text-white font-semibold text-2xl mb-6 px-8">EXPERIENCE</p>

            {
                experience.map((job, index) => (
                    <div key={index} className="text-offWhite flex rounded-lg justify-between px-8 py-6 hover:bg-secondary hover:bg-opacity-50 group">

                        <div>
                            {/* DATE */}
                            <p className="mt-2 text-xs">{job.startDate} — {job.endDate}</p>

                            <p className="text-sm font-medium mt-2 text-accent">{job.location}</p>
                        </div>

                        {/* CONTENT DIV */}
                        <div className="w-3/4">
                            <p className="text-lg font-medium text-white mb-2">
                                {job.position} · <a className="group-hover:text-accent transition-colors duration-300 ease-in-out" href={job.url} target="_blank" rel="noreferrer">{job.company}</a>
                            </p>

                            <p className="font-medium mb-4 opacity-50 italic">{job.notes}</p>

                            <ul>
                                {job.bullets.map((bullet, bulletIndex) => (
                                    <li key={bulletIndex} className="mb-2 font-medium leading-snug">{highlightPhrases(bullet, HIGHLIGHT_PHRASES)}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default Experience