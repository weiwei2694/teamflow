"use client"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { emailSchema } from "@/validations/email.validations";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const Email = () => {
    const form = useForm<z.infer<typeof emailSchema>>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof emailSchema>) {
        form.reset();
    }

    const isLoading = form.formState.isSubmitting;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center w-full">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormControl>
                                <Input disabled={isLoading} type="email" required className="bg-opacity-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-none outline-none" placeholder="Your Email" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-blue-300 hover:bg-blue-300/90 rounded-xl"
                >
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                </Button>
            </form>
        </Form>
    )
}

export default Email