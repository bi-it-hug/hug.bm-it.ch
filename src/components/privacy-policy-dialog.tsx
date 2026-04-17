import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"

export function PrivacyPolicyDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" size="sm">
                    Privacy Policy
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="text-left">
                    <DialogTitle>Privacy Policy</DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                        {" "}
                        This policy applies to hug.bm-it.ch.
                    </DialogDescription>
                </DialogHeader>
                <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4 text-sm [&>section]:mb-4 [&>section:last-child]:mb-0">
                    <section>
                        <h3 className="mb-1 font-semibold">Data we collect</h3>
                        <p className="text-">
                            This site does not use forms, cookies, or analytics.
                            We do not intentionally collect any personal data
                            from you.
                        </p>
                    </section>

                    <section>
                        <h3 className="mb-1 font-semibold">
                            Hosting and access logs
                        </h3>
                        <p>
                            The hosting provider for this website may collect
                            technical access data (such as IP address, date and
                            time of access, and browser type) in accordance with
                            their own policies. We do not control or have access
                            to that data. For details, please refer to your
                            hosting provider's privacy policy.
                        </p>
                    </section>

                    <section>
                        <h3 className="mb-1 font-semibold">External links</h3>
                        <p>
                            This site links to GitHub. When you follow that
                            link, GitHub's privacy practices apply. See{" "}
                            <Button
                                variant="link"
                                size="sm"
                                className="px-0"
                                asChild
                            >
                                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">
                                    GitHub's Privacy Statement
                                </a>
                            </Button>
                            .
                        </p>
                    </section>

                    <section>
                        <h3 className="mb-1 font-semibold">Your rights</h3>
                        <p>
                            Under Swiss (FADP) and EU (GDPR) law, you may have
                            rights to access, correct, or delete personal data.
                            Because we do not collect or process your data
                            through this site, any such requests relating to
                            access logs would need to be directed to the hosting
                            provider.
                        </p>
                    </section>

                    <section>
                        <h3 className="mb-1 font-semibold">
                            Questions and changes
                        </h3>
                        <p>
                            For questions about this privacy policy, please
                            contact us via the domain bm-it.ch. We may update
                            this policy from time to time; the “Last updated”
                            date at the top will be revised accordingly.
                        </p>
                    </section>
                </div>
                <DialogFooter>
                    <p className="text-xs font-light text-muted-foreground">
                        Last updated: January 2025.
                    </p>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
