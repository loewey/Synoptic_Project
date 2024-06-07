function handleBodyPartClick(event) {
    var bodyPart = event.target.id;
    var targetPage = bodyPart + '.html';
    window.location.href = targetPage;
}

document.querySelectorAll('.body-part').forEach(button => {
    button.addEventListener('click', handleBodyPartClick);
});
