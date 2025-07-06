// import { Placeholder } from 'react-bootstrap';
import GeneralFrom from '../GeneralForm'

const connectWithUsFormFields = [
    {label: "Your Name", name: "name", type: "text", required: "true", placeholder: "Name", autoComplete: "on"},
    {label: "Your Organization", name:"organization", type: "text", required:"true", palceholder: "nonprofit organization", autoComplete: "on"},
    {label: "Your Email", name:"email", type:"email", required: "true", placeholder: "email", autoComplete: "on" },
    {label: "Your Pnone Number", name: "phone", type: "tel", required: "true", placeholder: "e.g. (555) 123-4567", autoComplete: "tel"},
    {label: "Your Budget", name: "budget", type:"number", min: "0", required:"false", autoComplete:"false"},
    {label: "Additional Notes for The engineers", name:"notes", type: "textarea", required: "false", autoComplete:"off"},
    {label: "What Priority is your technology need", name:"priority", type: "radio", required:"false", options: [{label: "low"}, {label: "medium"}, {label: "high" }] }
]

export default function ConnectWithUsForm({formClass = "Connect-with-us-form"}) {

    return(
        <article>
            <GeneralFrom
                fields={connectWithUsFormFields}
                submitLabel='Submit'
                formClass={formClass}
            >
            </GeneralFrom>
        </article>
    );
};