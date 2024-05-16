import {Form, useLoaderData, redirect, useNavigate} from "react-router-dom"
import { updateContact } from "../contacts.js";

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
}

export default function EditContact(){

    const {contact} = useLoaderData()
    const navigate = useNavigate();

    return(
        <Form method="post" id="contact-form">
            <p>
                <span>Name</span>
                <input
                    placeholder="First"
                    aria-label="First Name"
                    type="text"
                    name="first"
                    defaultValue={contact?.first}
                />
                <input
                    placeholder="Last"
                    aria-label="Last Name"
                    name="last"
                    type="text"
                    defaultValue={contact?.last}
                />
            </p>
            <label>
                <span>Twitter</span>
                <input
                    type="text" 
                    name="twitter"
                    placeholder="@jack"
                    defaultValue={contact?.twitter}
                />
            </label>
            <label>
                <span>Avatar url</span>
                <input
                    placeholder="https://Tuve-fe.com"
                    aria-label="AVATAR_URL"
                    type="text" 
                    name="avatar"
                    defaultValue={contact?.avatar}
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea
                name="notes"
                defaultValue={contact?.notes}
                rows={6}
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button 
                    type="button"
                    onClick={() => {
                        navigate(-1);
                    }}
                >Cancel</button>
            </p>
        </Form>
    )
}

