const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY

export async function getOrganisations(sector) {
    const url = new URL('https://api.airtable.com/v0/appN9YxoltuPjVaa0/organisations')
    if (sector) url.search = new URLSearchParams({
        filterByFormula: `AND({sector}='${sector}',{published})`
    })
    const res = await fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + AIRTABLE_API_KEY
        }
    })

    const data = await res.json()

    return data.records;
}

export async function getOrganisationIds(sector) {
    const data = await getOrganisations(sector)

    return data.map(record => {
        return {
            params: {
                key: record.fields.key
            }
        }
    })

}

export async function getOrganisationByKey(key) {
    const url = new URL('https://api.airtable.com/v0/appN9YxoltuPjVaa0/organisations')
    if (key) url.search = new URLSearchParams({
        filterByFormula: `{key}='${key}'`
    })
    const res = await fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + AIRTABLE_API_KEY
        }
    })

    const data = await res.json()
    // console.log(data.records)

    return data.records[0];
}

export async function getRelationshipById(id) {
    const url = new URL(`https://api.airtable.com/v0/appN9YxoltuPjVaa0/relationships/${id}`)
    const res = await fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + AIRTABLE_API_KEY
        }
    })

    const data = await res.json()
    // console.log(data)

    return data;
}

export async function getVendorById(id) {
    const url = new URL(`https://api.airtable.com/v0/appN9YxoltuPjVaa0/vendors/${id}`)
    const res = await fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + AIRTABLE_API_KEY
        }
    })

    const data = await res.json()
    // console.log(data)

    return data;
}

export async function getOrganisationsWithVendors() {

    const orgs = await getOrganisations()

    const getVendorData = async () => {
        return Promise.all(orgs.map(async record => {
            const relationshipData = await getRelationshipById(record.fields.relationships[0]);
            const vendorRecord = await getVendorById(relationshipData.fields.vendor[0]);
            if (vendorRecord.hasOwnProperty('id')) {
                return {
                    id: record.id,
                    fields: record.fields,
                    vendor: vendorRecord
                }
            } else {
                return {
                    id: record.id,
                    fields: record.fields,
                    vendor: { fields: { name: 'n/a'}}
                }
            }
        }))
    }
    
    let data = new Array()
    await getVendorData().then(result => {
        data = result
    })

    return data
}