import { ContactSection, ContactInfo } from "../styles/ContactStyles"

const Contact = () => {

    return (
        <ContactSection>
            <h1>Get in Contact with Bryan</h1>
            <p>Got a project or collaboration idea? Lets get it done.</p>
            <ContactInfo>
                <p>Email: <a href="mailto:davidcruz420420@gmail.com">davidcruz420420@gmail.com</a></p>
                <p>Phone: 514-771-2134</p>
                <a href='https://github.com/bryan-315' target="_blank">Github</a>
            </ContactInfo>
        </ContactSection>
    )
}

export default Contact