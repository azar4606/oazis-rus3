document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});
document.getElementById('openModalBtn1').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
});