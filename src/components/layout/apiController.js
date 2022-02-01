const auth = 'Basic '+btoa('admin:district')

const headers = new Headers({
    'Authorization': auth,
    'Content-type': 'application/json',
    Accept: 'application/json',
});
const url = "/optionSets/KooURD3UkQb.json?fields=displayName,options[id,name]"
class Api{
    config = {
        baseUrl: 'https://176.57.184.192/demo/api/29',
    };

    setConfig = config => {
        this.config = config;
    };

    getTheTrackedEntityAttributesPrograms = (programId) => {
       
        return fetch(`${this.config.baseUrl}/programs/${programId}.json?fields=programTrackedEntityAttributes[id, displayName,displayShortName, valueType, program, trackedEntityAttribute[id]]`, {
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

    getTheDataElementsGroup = () => {
       
        return fetch(`${this.config.baseUrl}/dataElementGroups/BM3U6ZvyJoz.json?fields=dataElements[id,name,formName, valueType]`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    };

}
export default new Api();