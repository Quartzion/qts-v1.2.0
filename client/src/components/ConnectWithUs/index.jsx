import { useState } from "react";
import { Button } from "react-bootstrap";
import ConnectWithUsForm from "../ConnectWithUsForm";

export default function ConnectWithUs() {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = async () => {
        const willExpand = !expanded;
        setExpanded(willExpand);

        // If user is expanding the form, send the wakeup ping
        if (willExpand) {
            const isProd = import.meta.env.MODE === 'production';
            const VITE_PORT = import.meta.env.VITE_PORT;
            const API_BASE_URL = isProd
                ? import.meta.env.VITE_PROD_API_BASE_URL
                : `${import.meta.env.VITE_DEV_API_BASE_URL}${VITE_PORT}`;

            try {
                await fetch(`${API_BASE_URL}/api/ping`);
                console.log("📡 Ping sent from ConnectWithUs expansion");
            } catch (err) {
                console.error("❌ Ping failed from ConnectWithUs:", err);
            }
        }
    };


    return (
        <section className="Connect-with-us-section" role="region" aria-label="Connect With Us today for more information">
            <header className="connect-with-us-header">
                <h2>Connect with Quartzion Today!</h2>
                <p>Click here to submit your request for a follow-up with Quartzion's Team</p>
            </header>
            <article>
                <Button
                    aria-label={expanded ? "Hide Connect with Us Form" : "Show Connect with Us Form"}
                    className="show-connect-with-us-form-button"
                    onClick={handleToggle}
                    aria-expanded={expanded}
                    aria-controls="connect-with-us-form"
                >
                    {expanded ? "Hide follow up request form" : "Click here to submit your follow up request!"}
                </Button>
                {expanded && (
                    <div className="connect-with-us-form" id="connect-with-us-form">
                        <ConnectWithUsForm />
                    </div>
                )}
            </article>
        </section>
    );
};