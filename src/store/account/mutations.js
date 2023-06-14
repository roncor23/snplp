export default {
    setUser(state, status) {
      state.user = status;
    },
    set(state, [variable, value]) {
      state[variable] = value;
    },
  
    setAuthentication(state, status) {
      state.isAuthenticated = status;
    },
  
    logout(state, status) {
      state.isAuthenticated = status;
      state.user = {};
    },
  
    setDocumentTrackingSidebarBadge(state, status) {
      state.hasIncomingDocuments = status;
    },
  
    setSerialNumberRequestsSidebarBadge(state, status) {
      state.hasSerialNumberRequests = status;
    },
  };
  