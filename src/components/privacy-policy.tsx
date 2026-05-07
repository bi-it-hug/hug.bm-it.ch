import { InlineLink } from "@/components/inline-link"
import { MailForm } from "@/components/mail-form"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RefreshCcw } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function PrivacyPolicy() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" size="sm">
                    Privacy Policy
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader className="text-left">
                    <DialogTitle>Privacy Policy</DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                        This policy applies to hug.bm-it.ch.
                    </DialogDescription>
                </DialogHeader>
                {/*[&>section>p]:text-slightly-muted-foreground*/}
                <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4 text-sm [&_h3]:mb-1 [&_h3]:font-semibold [&>section]:mb-4 [&>section:last-child]:mb-0">
                    <section>
                        <h3>Data I collect</h3>
                        <p>
                            This site does not use forms, cookies, or analytics.
                            I do not intentionally collect any personal data
                            from you.
                        </p>
                    </section>
                    <section>
                        <h3>Hosting and access logs</h3>
                        <p>
                            The hosting provider for this website may collect
                            technical access data (such as IP address, date and
                            time of access, and browser type) in accordance with
                            their own policies. I do not control or have access
                            to that data. For details, please refer to your
                            hosting provider's privacy policy.
                        </p>
                    </section>
                    <section>
                        <h3>External links</h3>
                        <p>
                            This site links to GitHub. When you follow that
                            link,
                            <InlineLink href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">
                                GitHub's privacy practices
                            </InlineLink>{" "}
                            apply.
                        </p>
                    </section>
                    <section>
                        <h3>Your rights</h3>
                        <p>
                            Under Swiss (FADP) and EU (GDPR) law, you may have
                            rights to access, correct, or delete personal data.
                            Because I do not collect or process your data
                            through this site, any such requests relating to
                            access logs would need to be directed to the hosting
                            provider.
                        </p>
                    </section>
                    <section>
                        <h3>Questions and changes</h3>
                        <p>
                            For questions about this privacy policy, please
                            contact me via{" "}
                            <MailForm
                                buttonText="lorenzo.hug@icloud.com"
                                inline
                            />
                            . I may update this policy from time to time; the
                            date at the bottom will be revised accordingly.
                        </p>
                    </section>
                </div>
                <DialogFooter>
                    <Badge variant="outline" className="font-light">
                        <RefreshCcw data-icon="inline-start" />
                        May 2025
                    </Badge>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
