// import { Placeholder } from 'react-bootstrap';
import GeneralForm from '../GeneralForm'

const connectWithUsFormFields = [
    {label: "Your Name", name: "name", type: "text", required: true, placeholder: "Name", autoComplete: "on"},
    {label: "Your Organization", name:"organization", type: "text", required:true, placeholder: "nonprofit organization", autoComplete: "on"},
    {label: "Organization Size", name:"organization-size", type: "radio", required:true, options: [{label: "small (1-10 members)"}, {label: "medium (10-50 members)"}, {label: "Large (50+ members)" }] },
    {label: "Your Email", name:"email", type:"email", required: true, placeholder: "email", autoComplete: "on" },
    {label: "Your Phone Number", name: "phone", type: "tel", required: true, placeholder: "e.g. (555) 123-4567", autoComplete: "tel"},
    {label: "Your Budget", name:"budget", type: "radio", required: true, options: [{label: "small: (<$500)"}, {label: "medium: ($500 - $1000)"}, {label: "large: (>$1000)" }, {label: "extra large (>$5000)"}] },
    {label: "Additional Notes for The engineers", name:"notes", type: "textarea", required: false, autoComplete:"off"},
    {label: "What Priority is your technology need", name:"priority", type: "radio", required:false, options: [{label: "low"}, {label: "medium"}, {label: "high" }] }
]

export default function ConnectWithUsForm({formClass = "Connect-with-us-form"}) {

    return(
        <article>
            <GeneralForm
                fields={connectWithUsFormFields}
                submitLabel='Submit'
                formClass={formClass}
            >
            </GeneralForm>
        </article>
    );
};