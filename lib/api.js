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

export async function getRelationships(rels) {
    const url = new URL('https://api.airtable.com/v0/appN9YxoltuPjVaa0/relationships')
    if (rels) {
        let allRels = rels.map(rel => (`RECORD_ID()='${rel}'`)).join(',')
        url.search = new URLSearchParams({
            filterByFormula: `OR(${allRels})`
        })
    }
    const res = await fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + AIRTABLE_API_KEY
        }
    })
    const data = await res.json()
    return data.records;
}

export async function getVendorsByIds(ids) {
    const url = new URL('https://api.airtable.com/v0/appN9YxoltuPjVaa0/vendors')
    if (ids) {
        let vendorList = ids.map(vendor => (`RECORD_ID()='${vendor}'`)).join(',')
        url.search = new URLSearchParams({
            filterByFormula: `OR(${vendorList})`
        })
    }
    const res = await fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + AIRTABLE_API_KEY
        }
    })
    const data = await res.json()
    return data.records;
}

export async function getOrganisationsWithVendors(sector) {
    const orgs = await getOrganisations(sector)

    // extract relationships from org list
    const orgRelationships = orgs.map(obj => (obj.fields.relationships))
    const rels = await getRelationships(orgRelationships)

    // extract vendors from relationships
    const vendorIds = rels.map(obj => (obj.fields.vendor[0]))
    const vendors = await getVendorsByIds(vendorIds)

    const orgsWithVendors = orgs.map(org => {
        const orgVendorIds = org.fields.relationships.map(relId => {
            // filter relationships relevant to this org
            const relObjVendorIds = rels.filter(relObj => relObj.id == relId).map(rel => (rel.fields.vendor)).flat()
            return relObjVendorIds
        })
        const orgVendorNames = orgVendorIds.map(venId => {
            // filter vendors from relationship list
            const vendorNames = vendors.filter(venOjb => venOjb.id == venId).map(ven => (ven.fields.name)).flat()
            return vendorNames
        }).flat()
        return Object.assign(org, {vendors: orgVendorNames})
    })

    return orgsWithVendors

}