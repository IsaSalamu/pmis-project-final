const auth = 'Basic '+btoa('admin:district')

const headers = new Headers({
    'Authorization': auth,
    'Content-type': 'application/json',
    Accept: 'application/json',
});

const visualisations = "visualizations.json"
const kol = "visualizations/UiDkTfS1qCL.json"
const visualisationsUrl = "?fields=id,displayName~rename(name),type,displayDescription~rename(description),columns[dimension,legendSet[id],filter[*],programStage,items[dimensionItem~rename(id),displayName~rename(name),dimensionItemType]],rows[dimension,legendSet[id],filter,programStage,items[dimensionItem~rename(id),displayName~rename(name),dimensionItemType]],filters[dimension,legendSet[id],filter,programStage,items[dimensionItem~rename(id),displayName~rename(name),dimensionItemType]]"
const programIndicatorGroup = "programIndicatorGroups/Xo43W6xJk5j.json?fields=programIndicators[id,name,program[id,name]]"
const kk = "https://covmw.com/dhis2demo/api/37/dashboards.json"
const lol = "https://covmw.com/dhis2demo/api/37/dashboards/EfsnvKoR63F.json?fields=id,displayName,displayDescription,favorite~rename(starred),layout,itemConfig,dashboardItems[id,type,shape,x,y,width~rename(w),height~rename(h),messages,text,appKey,reports[type,id,displayName~rename(name)],resources[id,displayName~rename(name)],users[id,displayName~rename(name)],visualization[id,displayName~rename(name),type,displayDescription~rename(description)],map[id,displayName~rename(name),type,displayDescription~rename(description)],eventReport[id,displayName~rename(name),type,displayDescription~rename(description)],eventChart[id,displayName~rename(name),type,displayDescription~rename(description)]]"
const gg = "https://covmw.com/dhis2demo/api/37/analytics?dimension=dx:if89r3EMn1N,pe:LAST_12_WEEKS&filter=ou:npZluUGJNV6&includeNumDen=false&skipMeta=true&skipData=false"
const analyUrl = "analytics?dimension=dx:if89r3EMn1N,pe:LAST_12_WEEKS&filter=ou:npZluUGJNV6&includeNumDen=false&skipMeta=true&skipData=false"

const eventsUrl = "events.json"
const url = "/optionSets/KooURD3UkQb.json?fields=displayName,options[id,name]"
const options_url = "/optionSets/yjWGG3ncKUp.json?fields=displayName,options[id,name]"
const pStageUrl = "/programs/xWB78Xl4SV0.json?fields=id,name,organisationUnits[id,name],programStages[id,name,programStageDataElements[dataElement[id,name,valueType]]]"
const pStageUrl2 = "?fields=id,name,organisationUnits[id,name],programStages[id,name,programStageDataElements[dataElement[id,name,valueType]]]"
const teiValues_url = "trackedEntityInstances.json?ou=wKFFg76w4Wf&program=xWB78Xl4SV0&fields=enrollments[events[programStage,dataValues[*]]]"
const tei_url1 = "/trackedEntityInstances/query.json?ou=wKFFg76w4Wf&program="
const tei_url2 = "/trackedEntityInstances"
const analyticsUrl = "/analytics?dimension=dx:VJzfSzWh9Jx,pe:LAST_12_WEEKS&filter=ou:wKFFg76w4Wf&includeNumDen=false&skipMeta=true&skipData=false"
const pivot = "analytics?dimension=dx:xWB78Xl4SV0.Bs0watr8aaw;xWB78Xl4SV0.WtNDsFF2EuK;xWB78Xl4SV0.tONh7CAj2TK;xWB78Xl4SV0.dJ4uzmQxh6O;xWB78Xl4SV0.gS2XBcAoCSL;xWB78Xl4SV0.wKOALZGAhDE,pe:LAST_3_MONTHS&filter=ou:npZluUGJNV6&includeNumDen=true"
class Api{
    config = {
        baseUrl: 'https://covmw.com/dhis2demo/api/37',
    };

    setConfig = config => {
        this.config = config;
    };

    getAnalytics = () => {
       
        return fetch(`${this.config.baseUrl}/${analyticsUrl}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })  .catch(error => error)
            .then(response => response.json());
    };

    // get all events inorder to find program stage and program an event belong 
    getAllEvents = () => {
       
        return fetch(`${this.config.baseUrl}/events.json`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })  .catch(error => error)
            .then(response => response.json());
    };

    getEventByStageProgram = (id) => {
       
        return fetch(`${this.config.baseUrl}/events/${id}.json`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })  .catch(error => error)
            .then(response => response.json());
    };
    getAllEvents = () => {
       
        return fetch(`${this.config.baseUrl}/events.json`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })  .catch(error => error)
            .then(response => response.json());
    };

    getAnalyticsData = (pe, indicator, ou) => {
       
        return fetch(`${this.config.baseUrl}/analytics.json?dimension=dx:${indicator},pe:${pe}&filter=ou:${ou}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })  .catch(error => error)
            .then(response => response.json());
    };

    getAnalyticsPivot = () => {
       
        return fetch(`${this.config.baseUrl}/${pivot}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })  .catch(error => error)
            .then(response => response.json());
    };
    getProgramIndicatorGroup = () => {
       
        return fetch(`${this.config.baseUrl}/${programIndicatorGroup}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })  .catch(error => error)
            .then(response => response.json());
    };
    getVisualisations = () => {
       
        return fetch(`${this.config.baseUrl}/${visualisations}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })  .catch(error => error)
            .then(response => response.json());
    };
    getVisualisationById = (id) => {
       
        return fetch(`${this.config.baseUrl}/visualizations/${id}.json${visualisationsUrl}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })  .catch(error => error)
            .then(response => response.json());
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

    getTheTrackedEIDataValues = ()=>{
        return fetch(`${this.config.baseUrl}/${teiValues_url}`, {
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