const toNavigatePage = (id, windowLocationUrl ) => {
    document.getElementById(id).addEventListener('click', function() {
    window.location.href = windowLocationUrl;
    });
};

export default toNavigatePage;