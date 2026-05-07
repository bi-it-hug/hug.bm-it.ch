import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import emailjs from "@emailjs/browser"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { toast } from "sonner"
import * as z from "zod"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Field,
    // FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "@/components/ui/field"

const formSchema = z.object({
    firstName: z.string().min(1, "First name is required."),
    lastName: z.string().min(1, "Last name is required."),
    email: z
        .string()
        .min(1, "Email is required.")
        .pipe(
            z.email({
                error: "Please enter a valid email address.",
            })
        ),
    subject: z
        .string()
        .min(1, "Subject is required.")
        .min(5, "Subject must be at least 5 characters."),
    message: z
        .string()
        .min(1, "Message is required.")
        .min(20, "Message must be at least 20 characters."),
})

type MailFormData = z.infer<typeof formSchema>

/** EmailJS template variables: {{from_name}}, {{from_email}}, {{reply_to}}, {{subject}}, {{message}} */
function buildTemplateParams(data: MailFormData) {
    return {
        from_name: `${data.firstName} ${data.lastName}`.trim(),
        from_email: data.email,
        reply_to: data.email,
        subject: data.subject,
        message: data.message,
    }
}

export function MailForm({
    buttonText,
    inline = false,
}: {
    buttonText: string
    inline?: boolean
}) {
    const [open, setOpen] = useState(false)

    const {
        control,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm<MailFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
        },
        mode: "onSubmit",
    })

    async function onSubmit(data: MailFormData) {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        if (!serviceId || !templateId || !publicKey) {
            toast.error("Email is not configured.", {
                description:
                    "Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY (see .env.example).",
            })
            return
        }

        try {
            await emailjs.send(
                serviceId,
                templateId,
                buildTemplateParams(data),
                { publicKey }
            )
            toast.success("Message sent.")
            reset()
            setOpen(false)
        } catch (err) {
            console.error(err)
            toast.error("Could not send message.", {
                description: "Please try again later.",
            })
        }
    }

    return (
        <Dialog
            open={open}
            onOpenChange={(next) => {
                setOpen(next)
                if (!next) reset()
            }}
        >
            <DialogTrigger asChild>
                <Button
                    size="sm"
                    variant="link"
                    className={cn(
                        inline &&
                            "h-fit px-0 text-sm transition-[colors,opacity,shadow,transform]"
                    )}
                >
                    {buttonText}
                </Button>
            </DialogTrigger>
            <DialogContent className="min-w-sm lg:min-w-lg">
                <DialogHeader>
                    <DialogTitle>Contact me</DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                        Reach out about roles, collaborations, or anything you
                        want to discuss.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <FieldGroup>
                        <FieldSet className="w-full">
                            <FieldGroup>
                                <div className="grid grid-cols-2 gap-4">
                                    <Controller
                                        name="firstName"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <Field
                                                data-invalid={
                                                    fieldState.invalid
                                                }
                                            >
                                                <FieldLabel
                                                    htmlFor={field.name}
                                                >
                                                    First Name
                                                </FieldLabel>
                                                <Input
                                                    {...field}
                                                    id={field.name}
                                                    placeholder="John"
                                                    autoComplete="given-name"
                                                    aria-invalid={
                                                        fieldState.invalid
                                                    }
                                                />
                                                {fieldState.invalid && (
                                                    <FieldError
                                                        errors={[
                                                            fieldState.error,
                                                        ]}
                                                    />
                                                )}
                                            </Field>
                                        )}
                                    />
                                    <Controller
                                        name="lastName"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <Field
                                                data-invalid={
                                                    fieldState.invalid
                                                }
                                            >
                                                <FieldLabel
                                                    htmlFor={field.name}
                                                >
                                                    Last Name
                                                </FieldLabel>
                                                <Input
                                                    {...field}
                                                    id={field.name}
                                                    placeholder="Doe"
                                                    autoComplete="family-name"
                                                    aria-invalid={
                                                        fieldState.invalid
                                                    }
                                                />
                                                {fieldState.invalid && (
                                                    <FieldError
                                                        errors={[
                                                            fieldState.error,
                                                        ]}
                                                    />
                                                )}
                                            </Field>
                                        )}
                                    />
                                </div>

                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field
                                            data-invalid={fieldState.invalid}
                                        >
                                            <FieldLabel htmlFor={field.name}>
                                                Email
                                            </FieldLabel>
                                            <Input
                                                {...field}
                                                id={field.name}
                                                type="email"
                                                placeholder="john.doe@example.com"
                                                autoComplete="email"
                                                aria-invalid={
                                                    fieldState.invalid
                                                }
                                            />
                                            {/* <FieldDescription>
                                                For replies only.
                                            </FieldDescription> */}
                                            {fieldState.invalid && (
                                                <FieldError
                                                    errors={[fieldState.error]}
                                                />
                                            )}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name="subject"
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field
                                            data-invalid={fieldState.invalid}
                                        >
                                            <FieldLabel htmlFor={field.name}>
                                                Subject
                                            </FieldLabel>
                                            <Input
                                                {...field}
                                                id={field.name}
                                                type="text"
                                                placeholder="Hiring: junior engineer (remote)"
                                                aria-invalid={
                                                    fieldState.invalid
                                                }
                                            />
                                            {/* <FieldDescription>
                                                One line is enough.
                                            </FieldDescription> */}
                                            {fieldState.invalid && (
                                                <FieldError
                                                    errors={[fieldState.error]}
                                                />
                                            )}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    name="message"
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field
                                            data-invalid={fieldState.invalid}
                                        >
                                            <FieldLabel htmlFor={field.name}>
                                                Message
                                            </FieldLabel>
                                            <Textarea
                                                {...field}
                                                id={field.name}
                                                placeholder="We're hiring for a product team and your work stood out. Would you be open to a short intro call next week?"
                                                rows={8}
                                                aria-invalid={
                                                    fieldState.invalid
                                                }
                                                className="min-h-48"
                                            />
                                            {/* <FieldDescription>
                                                Enough detail that I can reply.
                                            </FieldDescription> */}
                                            {fieldState.invalid && (
                                                <FieldError
                                                    errors={[fieldState.error]}
                                                />
                                            )}
                                        </Field>
                                    )}
                                />
                            </FieldGroup>
                        </FieldSet>
                        <Field orientation="horizontal">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Spinner data-icon="inline-start" />{" "}
                                        Sending
                                    </>
                                ) : (
                                    "Submit"
                                )}
                            </Button>
                        </Field>
                    </FieldGroup>
                </form>
            </DialogContent>
        </Dialog>
    )
}
