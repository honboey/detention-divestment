export default function InstitutionLede(props) {
    return (
        <section>
            <h2>{props.InstitutionName} is financially tied to the detention industry</h2>
            <p>{props.InstitutionName} is using the following providers:<br/>
            • {props.Provider}</p>
        </section>   
    )
}