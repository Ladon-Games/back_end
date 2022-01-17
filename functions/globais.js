var globalFunctions = {
    init() {
        this.createGlobalVariables();
    },

    createGlobalVariables() {
        global.userAccounts = {};
    },
}

module.exports = globalFunctions;