import Link from 'next/link'
import React from 'react'
import IconCopy from '../icon-copy'
import IconTwitter from '../icon-twitter'
import IconFacebook from '../icon-facebook'
import { CopyToClipboard } from 'react-copy-to-clipboard'


class Share extends React.Component {
    constructor() {
        super()
        this.state = {
            display: false,
            currentPage: '',
            shareLinkMessage: false
        }
        this.toggleDisplay = this.toggleDisplay.bind(this)
        this.setShareLinkMessage = this.setShareLinkMessage.bind(this)
    }

    toggleDisplay() {
        this.setState(prevState => {
            return {
                display: !prevState.display
            }
        })
    }

    setShareLinkMessage(msg) {
        this.setState(prevState => {
            return {
                shareLinkMessage:msg
            }
        })
    }

    componentDidMount() {
        this.setState(prevState => {
            return {
                currentPage: window.location.href
            }
        })
    }

    render() {
        return (
            <section className="border-b pb-4 mb-4">
                <button onClick={this.toggleDisplay}>
                    <h3 className="font-display text-3xl sm:text-5xl mb-4 hover:text-red-200">+ Share</h3>
                </button>
                <div className={this.state.display ? "max-h-full opacity-100 transition-all duration-1000" : "max-h-0 overflow-hidden opacity-0 transition-all duration-500"}>

                    <p>Share this page with your peers and network</p>
                    <p className="my-6">
                        <input
                            className="w-full text-black p-4"
                            type="text"
                            value={this.state.currentPage}
                            readOnly
                        />
                    </p>
                    <div className="flex space-x-6">
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${this.state.currentPage}`}
                            target="_blank"
                            className="bg-risered text-riseblack inline-block w-11 h-11 p-1"
                        >
                            <IconFacebook />
                        </a>
                        <a
                            href={`http://twitter.com/share?text=${this.state.shareText}&url=${this.state.currentPage}`}
                            target="_blank"
                            className="bg-risered text-riseblack inline-block w-11 h-11 p-1"
                        >
                            <IconTwitter />
                        </a>
                        <CopyToClipboard
                            text={this.state.currentPage}
                            onCopy={() =>
                                this.setShareLinkMessage("Link copied to clipboard")
                            }
                        >
                            <button className="bg-risered text-riseblack inline-block w-11 h-11 p-1">
                                <IconCopy />
                            </button>
                        </CopyToClipboard>
                    </div>
                    {this.state.shareLinkMessage && <div>{this.state.shareLinkMessage}</div>}

                </div>
            </section>
        )
    }
}

export default Share