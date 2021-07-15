import Link from 'next/link'
import Share from '/components/Institution/Share'
import Phone from '/components/Institution/Phone'
import Email from '/components/Institution/Email'

export default function InstitutionInformation(props) {
    return (
        <article className="max-w-3xl m-2 sm:m-4 md:ml-auto md:mr-auto">
            <section className="pb-4 mb-4 border-b">
                <h2 className="font-display text-3xl sm:text-5xl mb-4">{props.InstitutionName} is financially tied to the detention industry</h2>
                <p>{props.InstitutionName} is using the following providers:<br />
                    • {props.Provider}</p>
            </section>

            <Share />
            <Phone {...props} />
            {props.Email &&
                <Email {...props} />
            }

        </article>
    )
}