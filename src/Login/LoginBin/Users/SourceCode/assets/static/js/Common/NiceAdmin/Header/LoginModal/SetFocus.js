const StartFunc = () => {
    const loginModalElement = document.getElementById('LoginModalId');
    loginModalElement.addEventListener('shown.bs.modal', function () {
        document.getElementById('SecretId').focus();
    });

    const myModalAlternative = new bootstrap.Modal(loginModalElement, {
        focus: true
    });
    
    myModalAlternative.show();
};

export { StartFunc };