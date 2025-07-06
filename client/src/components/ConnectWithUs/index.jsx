import { useState } from "react";
import ConnectWithUsForm from "../ConnectWithUsForm";

export default function ConnectWithUs() {

    const [expanded, setExpanded] = useState(false);
    const handleToggle = () => setExpanded((prev) => !prev);

    return (
        <section className="Connect-with-us-section" role="region" aria-label="Connect With Us today for more information">
            <header className="connect-with-us-header">
                <h2>Connect with Quartzion Today!</h2>
                <p>Click here to submit your request for a follow-up with Quartzion's Team</p>
            </header>
            <article>
                <button
                    aria-label={expanded ? "Hide Connect with Us Form" : "Show Connect with Us Form"}
                    className="show-connect-with-us-form-button"
                    onClick={handleToggle}
                    aria-expanded={expanded}
                    aria-controls="connect-with-us-form"
                >
                    {expanded ? "Hide follow up request form" : "Click here to submit your follow up request!"}
                </button>
                {expanded && (
                    <div id="connect-with-us-form">
                        <ConnectWithUsForm />
                    </div>
                )}
            </article>
        </section>
    );
};