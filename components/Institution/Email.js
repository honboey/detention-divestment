import React from 'react'
import MailToLink from '../mailto-link'

class Email extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: false
        }
        this.toggleDisplay = this.toggleDisplay.bind(this)
    }

    // boolean -> boolean
    toggleDisplay() {
        this.setState(prevState => {
            return {
                display: !prevState.display
            }
        })
    }

    render() {
        const mailto = !this.props.Email.startsWith("http");
        let emailCallToAction, emailMessage;

        if (mailto) {
            emailMessage = `Send an email to ${this.props.InstitutionName} at ${this.props.Email}  Click the link below to automatically create a draft email using the text below on your computers' email software.`;
            emailCallToAction = (
                <MailToLink
                    organisation={this.props.InstitutionName}
                    vendor={this.props.Provider}
                    text={`Send email to ${this.props.Email}`}
                    email={this.props.Email}
                    classes="inline-block rounded-md bg-white hover:opacity-80 p-4 mx-8 mb-4 text-red-600"
                />
            );

        } else {
            emailMessage = `Click the link below to visit a contact page at ${this.props.InstitutionName} and urge them to divest from ${this.props.Provider} immediately.`;
            emailCallToAction = (
                <a
                    href={this.props.Email}
                    className="inline-block rounded-md bg-white hover:opacity-80 p-4 mx-8 mb-4 text-red-600"
                    target="_blank"
                >
                    Contact {this.props.InstitutionName}
                </a>
            );
        }

        return (
            <section className="border-b pb-4 mb-4">
                <button onClick={this.toggleDisplay}>
                    <h3 className="font-display text-3xl sm:text-5xl mb-4 hover:text-red-200 cursor-pointer">+ Email</h3>
                </button>
                <div className={this.state.display ? "max-h-full opacity-100 transition-all duration-1000" : "max-h-0 overflow-hidden opacity-0 transition-all duration-500"}>
                    <p className="mb-4">{emailMessage}</p>
                    <p className="mb-4">{emailCallToAction}</p>

                    {mailto &&
                        <div>
                            <div className="mb-4">Subject:
                                <blockquote className="rounded-md border p-4 mt-4">
                                    <p>The role of {this.props.Provider} in Australian-run detention centres and it’s relationship with {this.props.InstitutionName}.</p>
                                </blockquote>
                            </div>
                            <div>Body:
                                <blockquote className="rounded-md border p-4 mt-4">
                                    <p className="mb-4">I urge {this.props.InstitutionName} to divest immediately from {this.props.Provider} for their role within the Australian government’s abusive, human rights-violating detention supply chain in Manus and Nauru as well as its role in onshore refugee detention centres.</p>

                                    <p className="mb-4">{this.props.Provider} have actively chosen to participate in and enforce our communities’ torture and abuse in detention. {this.props.Provider} should be held accountable and not allowed to continue to profit from organisations like {this.props.InstitutionName}, who have made commitments in policy to anti-discrimination and equal opportunity.</p>

                                    <p className="mb-4">There have been numerous reports and inquiries regarding the deaths, torture and sexual abuse of refugees who have been incarcerated within Australia’s mandatory detention centres. Australia has been a world leader in refugee detention torture for over 30 years and this has been made possible by companies such as {this.props.Provider} being allowed to operate with impunity, bring in enormous profits and escape accountability.</p>

                                    <p className="mb-4">The lack of transparency and accountability in Australian run detention centres is something that has been widely reported and acknowledged by international human rights groups including the UN. There have been many inquiries and many reports of deaths and sexual abuse within these camps yet nothing has changed because the Australian government is not being held accountable. Refugees challenging the mandatory detention policy in the courts have seen their cases mishandled, unfairly dismissed and processed without proper adherence to refugee rights protocol.</p>

                                    <p className="mb-4">People who are fleeing harm in their country of origin, experience a compounding of their trauma under Australian government policies that are designed to punish people who are exercising their human right to seek asylum in Australia. Depression, suicide ideation and other mental illness is pervasive and often a direct result of the experience of detention itself. The detainees’ treatment within the camps, along with the indefinite detention they experience, meets the definition of torture and cruel, inhumane and degrading treatment under International law.</p>

                                    <p className="mb-4">The Australian response to refugees, particularly those arriving by boat, is one of the most punitive in the world, and this means contracting with detention security companies such as {this.props.Provider} will tarnish {this.props.InstitutionName} in the future. We should all be against human rights violations in offshore and onshore camps in any case, most particularly if we otherwise make corporate commitments to human rights and equal opportunity. It is the right thing to do.</p>

                                    <p className="mb-4">We should not affiliate with security companies such as {this.props.Provider} that violate the human rights of refugees who are seeking protection from persecution and torture. It reflects badly on {this.props.InstitutionName} and the values {this.props.InstitutionName} esposes, as well as the decision makers within {this.props.InstitutionName} and their legacies.</p>

                                    <p className="mb-4">Seeking asylum is not a crime. Being a refugee is not a crime. But the continued contravention of international law should attract the sanction of the international human rights community and its supporters, like {this.props.InstitutionName}.</p>

                                    <p className="mb-4">Please take immediate action and divest from {this.props.Provider} for their role in the Australian-run abusive detention regime. We cannot wait for one more refugee to be tortured or die in Australian-run detention camps.</p>

                                    <p className="mb-4">Looking forward to hearing back from you.</p>
                                </blockquote>
                            </div>
                        </div>
                    }
                </div>
            </section>

        )
    }
}

export default Email