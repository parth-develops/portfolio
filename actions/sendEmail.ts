"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

const getErrorMessage = (error: unknown): string => {
    let message: string;
    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === 'object' && 'message' in error) {
        message = String(error.message);
    } else if (typeof error === 'string') {
        message = error;
    } else {
        message = "Something went wrong";
    }

    return message;
}

export const sendEmail = async (formData: FormData) => {
    const email = formData.get("email");
    const message = formData.get("message");

    if (!validateString(email, 500)) {
        return {
            error: "Invalid Email!"
        }
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid Message!"
        }
    }

    let data;
    try {
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: "pumrania9@gmail.com",
            subject: "Hey there",
            reply_to: email as string,
            react: React.createElement(ContactFormEmail, { message: message as string, email: email as string })
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data
    }
}