import api from './index'
import axios from 'axios'

let queryInProgress

export default {
  getAlert(alertId: string) {
    return api.get(`/alert/${alertId}`)
  },
  setStatus(alertId: string, data: object) {
    return api.put(`/alert/${alertId}/status`, data)
  },
  actionAlert(alertId: string, data: object) {
    return api.put(`/alert/${alertId}/action`, data)
  },
  tagAlert(alertId: string, data: object) {
    return api.put(`/alert/${alertId}/tag`, data)
  },
  untagAlert(alertId: string, data: object) {
    return api.put(`/alert/${alertId}/untag`, data)
  },
  updateAttributes(alertId: string, attributes: object) {
    let data = {
      attributes: attributes
    }
    return api.put(`/alert/${alertId}/attributes`, data)
  },
  addNote(alertId: string, data: object) {
    return api.put(`/alert/${alertId}/note`, data)
  },
  getNotes(alertId: string) {
    return api.get(`/alert/${alertId}/notes`)
  },
  updateNote(alertId: string, noteId: string, data: object) {
    return api.put(`/alert/${alertId}/note/${noteId}`, data)
  },
  deleteNote(alertId: string, noteId: string) {
    return api.delete(`/alert/${alertId}/note/${noteId}`)
  },
  getAlerts(query: object) {
    if (query && queryInProgress) {
      queryInProgress.cancel('Too many search requests. Cancelling current query.')
    }
    queryInProgress = axios.CancelToken.source()
    let config = {
      params: query,
      cancelToken: queryInProgress.token
    }
    return api.get('/alerts', config)
  },
  getAlertHistory(query: object) {
    let config = {
      params: query
    }
    return api.get('/alerts/history', config)
  },
  getCounts(query: object) {
    let config = {
      params: query
    }
    return api.get('/alerts/count', config)
  },
  getTop10Count(query: object) {
    let config = {
      params: query
    }
    return api.get('/alerts/top10/count', config)
  },
  getTop10Flapping(query: object) {
    let config = {
      params: query
    }
    return api.get('/alerts/top10/flapping', config)
  },
  getTop10Standing(query: object) {
    let config = {
      params: query
    }
    return api.get('/alerts/top10/standing', config)
  },
  deleteAlert(alertId: string) {
    return api.delete(`/alert/${alertId}`)
  },
  getProjects(query: object) {
    let config = {
      params: query
    }
    return api.get('/projects', config)
  },
  getEnvironments(query: object) {
    let config = {
      params: query
    }
    return api.get('/environments', config)
  },
  getServices(query: object) {
    let config = {
      params: query
    }
    return api.get('/services', config)
  },
  getGroups(query: object) {
    let config = {
      params: query
    }
    return api.get('/alerts/groups', config)
  },
  getTags(query: object) {
    let config = {
      params: query
    }
    return api.get('/alerts/tags', config)
  }
}
