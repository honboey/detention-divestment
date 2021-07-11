import React from 'react'

class Phone extends React.Component {
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
        return(            
            <section className="border-b pb-4 mb-4">
                <button onClick={this.toggleDisplay}>
                    <h3 className="font-display text-3xl sm:text-5xl mb-4 hover:text-red-200 cursor-pointer">+ Phone</h3>
                </button>
                <div className={this.state.display ? "max-h-full opacity-100 transition-all duration-1000" : "max-h-0 overflow-hidden opacity-0 transition-all duration-500"}> 
                    <p className="mb-4">Phone the {this.props.Position} on {this.props.PhoneNumber}</p>
                    <p className="mb-4">Use this script:
                        <blockquote className="rounded-md border p-4 mt-4">
                            Why does {this.props.InstitutionName} employ the services of {this.props.Provider} who profit from detention centres operating in Australia both offshore and onshore?
                        </blockquote>
                    </p>
                </div>

            </section> 
            
        )
    }
}

export default Phone