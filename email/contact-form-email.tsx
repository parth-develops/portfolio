import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactFormEmailProps = {
    message: string,
    email: string
}

export default function ContactFormEmail({ message, email }: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from my portfolio</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">Message from the contact form</Heading>
                            <Text>{message}</Text>
                            <Hr/>
                            <Text>The sender&apos;s email: {email}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
