const toNavigatePage = (pageId, windowLocationUrl ) => {
    document.getElementById(pageId).addEventListener('click', function() {
    window.location.href = windowLocationUrl;
    });
};

export default toNavigatePage;