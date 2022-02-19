const auth = 'Basic '+btoa('admin:district')

const headers = new Headers({
    'Authorization': auth,
    'Content-type': 'application/json',
    Accept: 'application/json',
});
const url = "/optionSets/KooURD3UkQb.json?fields=displayName,options[id,name]"
const options_url = "/optionSets/yjWGG3ncKUp.json?fields=displayName,options[id,name]"
const pStageUrl = "/programs/xWB78Xl4SV0.json?fields=id,name,organisationUnits[id,name],programStages[id,name,programStageDataElements[dataElement[id,name,valueType]]]"
const pStageUrl2 = "?fields=id,name,organisationUnits[id,name],programStages[id,name,programStageDataElements[dataElement[id,name,valueType]]]"
const tei_url = "/trackedEntityInstances/query.json?ou=wKFFg76w4Wf&program=xWB78Xl4SV0"
const tei_url1 = "/trackedEntityInstances/query.json?ou=wKFFg76w4Wf&program="
const tei_url2 = "/trackedEntityInstances"
class Api{
    config = {
        baseUrl: 'https://covmw.com/dhis2demo/api/29',
    };

    setConfig = config => {
        this.config = config;
    };

    getTheTrackedEntityAttributesPrograms = (programId) => {
       
        return fetch(`${this.config.baseUrl}/programs/${programId}.json?fields=trackedEntityType[id],organisationUnits[id],programTrackedEntityAttributes[id, displayName,displayShortName, valueType, program, trackedEntityAttribute[id]],programStages[id]`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })  .catch(error => error)
            .then(response => response.json());
    };

    getTheTrackedEntityPrograms = () => {
       
        return fetch(`${this.config.baseUrl}/programs.json`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    };
    
    getOptionSets = ()=>{
        return fetch(`${this.config.baseUrl}/${url}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    }

    getOptionSetsIncubators = ()=>{
        return fetch(`${this.config.baseUrl}/${options_url}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    }

    postTrackerEntity = (data) => {
       
        return fetch(`${this.config.baseUrl}/trackedEntityInstances`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers,
            body: JSON.stringify(data)
           
        })
            .catch(error => error)
            .then(response => response.json());
    };

    getTrackerEntityInstance = (tei_id, program_id, orgUnit_id) => {
       
        return fetch(`${this.config.baseUrl}/${tei_url2}/${tei_id}.json?program=${program_id}&ou=${orgUnit_id}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
          
        })
            .catch(error => error)
            .then(response => response.json());
    };

    getProgramStagesAndDataElements = ()=>{
        return fetch(`${this.config.baseUrl}/${pStageUrl}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    }

    getProgramStagesAndDataElementsAndProgram = (programId)=>{
        return fetch(`${this.config.baseUrl}/programs/${programId}.json${pStageUrl2}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    }

    postTrackerEntityDataElements = (data) => {
       
        return fetch(`${this.config.baseUrl}/events`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers,
            body: JSON.stringify(data)
        })
            .catch(error => error)
            .then(response => response.json());
    };

    getTheTrackedEI = (pId)=>{
        return fetch(`${this.config.baseUrl}/${tei_url1}${pId}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    }
}
export default new Api();