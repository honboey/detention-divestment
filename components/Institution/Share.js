import Link from 'next/link'
import React from 'react'

class Share extends React.Component {
    constructor() {
        super()
        this.state = {
            display: false
        }
        this.toggleDisplay = this.toggleDisplay.bind(this)
    }

    toggleDisplay() {
        this.setState(prevState => {
            return {
                display: !prevState.display
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
                    <p className="mb-4">Share this page on social media or copy this link directly into your preferred messaging service</p>
                    <div className="flex">
                        <Link href="#"><svg className="mr-4" width="29" height="24" viewBox="0 0 29 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path d="M9.1 24C20.1 24 26.1 14.8 26.1 6.8 26.1 6.5 26.1 6.2 26 6 27.2 5.1 28.2 4.1 29 2.8 27.9 3.3 26.8 3.7 25.6 3.8 26.8 3 27.8 1.8 28.2 0.4 27 1.1 25.8 1.6 24.4 1.9 23.9 1.3 23.2 0.8 22.4 0.5 21.7 0.2 20.9 0 20.1 0 16.8 0 14.1 2.7 14.1 6.1 14.1 6.5 14.2 7 14.3 7.4 11.9 7.3 9.6 6.7 7.5 5.6 5.4 4.5 3.5 3 2 1.1 0.4 3.9 1.3 7.4 3.9 9.2 2.9 9.2 2 8.9 1.2 8.4V8.5C1.2 9.9 1.6 11.3 2.5 12.3 3.4 13.4 4.6 14.2 5.9 14.4 5.1 14.7 4.1 14.7 3.2 14.6 3.6 15.8 4.4 16.8 5.4 17.6 6.4 18.3 7.6 18.7 8.8 18.8 6.7 20.4 4.1 21.4 1.4 21.4 0.9 21.4 0.5 21.3 0 21.3 2.7 23.1 5.9 24 9.1 24Z" fill="white"/></svg></Link>
                        <Link href="#"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path d="M21.1 0C21.8 0 22.6 0.3 23.1 0.9 23.7 1.4 24 2.2 24 2.9V21.1C24 21.8 23.7 22.6 23.1 23.1 22.6 23.7 21.8 24 21.1 24H16.1V15H19.2L19.8 11.1H16.1V8.6C16.1 7.5 16.6 6.5 18.3 6.5H20V3.2C20 3.2 18.4 2.9 17 2.9 13.9 2.9 11.9 4.8 11.9 8.1V11.1H8.5V15H11.9V24H2.9C2.2 24 1.4 23.7 0.9 23.1 0.3 22.6 0 21.8 0 21.1V2.9C0 2.2 0.3 1.4 0.9 0.9 1.4 0.3 2.2 0 2.9 0L21.1 0Z" fill="white"/></svg></Link>
                    </div>                
                </div>            
            </section>
        )
    }
}

export default Share