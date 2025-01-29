import ConfigJson from '../../../../../Config.json' with {type: 'json'};
const CommonKeyName = "BranchName";

let StartFunc = () => {
    let LocalUserName = jFLocalyourUsername();
    //added new BranOrders for all orders tables

    localStorage.setItem(CommonKeyName, `BranOrders${LocalUserName}`);

    window.location.href = ConfigJson.RedirectToUrl;
};

let jFLocalyourUsername = () => {
    let jVarLocalyourUsername = 'yourUsername'
    let jVarLocalHtmlId = document.getElementById(jVarLocalyourUsername);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };