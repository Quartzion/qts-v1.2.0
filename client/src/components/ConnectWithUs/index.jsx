import ConnectWithUsForm from "../ConnectWithUsForm";

export default function ConnectWithUs() {
    return (
        <section className="Connect-with-us-section" role="region" aria-label="Connect With Us today for more information">
            <header className="connect-with-us-header">
                <h2>Connect with Quartzion Today!</h2>
                <p>Click here to submit your request for a follow-up with Quartzion's Team</p>
            </header>
            <ConnectWithUsForm />
        </section>
    );
};