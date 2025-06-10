import React from "react";
import link from "../../icons/link.png"
import experience from "../../json/experience.json";

const MobileExperience = () => {

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
                <span key={offset} className="text-accent" >{match}</span>
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
        <div className="my-8 text-offWhite text-sm leading-snug">


            <p className="font-black text-xl mb-6">EXPERIENCE</p>

            {
                experience.map((job, index) => (
                    <div key={index}>
                        <p className="font-semibold text-lg text-accent">{job.position}</p>
                        <a
                            className="flex items-baseline"
                            href={job.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={link} alt="link icon" className="h-3 invert mr-2" />
                            <p className="mb-2 text-base">{job.company}</p>
                        </a>
                        <p className="opacity-50 text-xs">{job.startDate} — {job.endDate}</p>

                        <ul className="mt-2">
                            {job.bullets.map((bullet, bulletIndex) => (
                                <li key={bulletIndex} className="mb-3 text-sm leading-snug">{highlightPhrases(bullet, HIGHLIGHT_PHRASES)}</li>
                            ))}
                        </ul>
                    </div>
                ))
            }

        </div>
    )
}

export default MobileExperience