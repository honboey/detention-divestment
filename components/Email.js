export default function Email(props) {
    return (
        <section>
            <h4>+ Email</h4>
            <p>Send an email to {props.InstitutionName} at {props.Email}. Click the link below to automatically create a draft email using the text below on your computer or device’s email software.</p>
            <button>Send an email to {props.Email}</button>

            <p>Subject:
                <blockquote>
                <p>The role of {props.Provider} in Australian run detention centres and it’s relationship with {props.InstitutionName}.</p>
                </blockquote>
            </p>

            <p>Body:
                <blockquote>
                <p>I urge {props.InstitutionName} to divest immediately from {props.Provider} for their role within the Australian government’s abusive, human rights-violating detention supply chain in Manus and Nauru as well as its role in onshore refugee detention centres.</p>

                <p>{props.Provider} have actively chosen to participate in and enforce our communities’ torture and abuse in detention. {props.Provider} should be held accountable and not allowed to continue to profit from organisations like {props.InstitutionName}, who have made commitments in policy to anti-discrimination and equal opportunity.</p>

                <p>There have been numerous reports and inquiries regarding the deaths, torture and sexual abuse of refugees who have been incarcerated within Australia’s mandatory detention centres. Australia has been a world leader in refugee detention torture for over 30 years and this has been made possible by companies such as {props.Provider} being allowed to operate with impunity, bring in enormous profits and escape accountability.</p>

                <p>The lack of transparency and accountability in Australian run detention centres is something that has been widely reported and acknowledged by International human rights groups including the UN. There have been many inquiries and many reports of deaths and sexual abuse within these camps yet nothing has changed because the Australian government is not being held accountable. Refugees challenging the mandatory detention policy in the courts have seen their cases mishandled, unfairly dismissed and processed without proper adherence to refugee rights protocol.</p>

                <p>People who are fleeing harm in their country of origin, experience a compounding of their trauma under Australian government policies that are designed to punish people who are exercising their human right to seek asylum in Australia. Depression, suicide ideation and other mental illness is pervasive and often a direct result of the experience of detention itself. The detainees’ treatment within the camps, along with the indefinite detention they experience, meets the definition of torture and cruel, inhumane and degrading treatment under International law.</p>

                <p>The Australian response to refugees, particularly those arriving by boat, is one of the most punitive in the world, and this means contracting with detention security companies such as {props.Provider} will tarnish {props.InstitutionName} in the future. We should all be against human rights violations in offshore and onshore camps in any case, most particularly if we otherwise make corporate commitments to human rights and equal opportunity. It is the right thing to do.</p>

                <p>Looking forward to hearing back from you. We should not affiliate with a security companies such as {props.Provider} that violate the human rights of refugees who are seeking protection from persecution and torture. It reflects badly on {props.InstitutionName} and the values {props.InstitutionName} esposes, as well as the decision makers within {props.InstitutionName} and their legacies.</p>

                <p>Seeking asylum is not a crime. Being a refugee is not a crime. But the continued contravention of international law should attract the sanction of the international human rights community and its supporters, like {props.InstitutionName}.</p>

                <p>Please take immediate action and divest from {props.Provider} for their role in the Australian run abusive detention regime. We cannot wait for one more refugee to be tortured or die in Australian run detention camps.</p>

                <p>Looking forward to hearing back from you.</p>
                </blockquote>
            </p>
        </section>
    )
}

