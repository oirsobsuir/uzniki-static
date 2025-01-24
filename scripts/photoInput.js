const photoInput = document.getElementById('participant__photo');
const photoPreviews = document.getElementById('photo__previews');

photoInput.addEventListener('change', function () {
    const files = Array.from(this.files);

    files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const previewsPreview = document.createElement('div');
            previewsPreview.className = 'previews__preview';

            const previewImage = document.createElement('img');
            previewImage.className = 'preview__image';
            previewImage.src = e.target.result;

            const previewText = document.createElement('span')
            previewText.className = 'preview__text';
            previewText.innerHTML = file.name;

            const previewDelete = document.createElement('div');
            previewDelete.className = 'preview__delete';
            previewDelete.addEventListener('click', (e) => {
                e.target.parentElement.remove();
            });

            previewsPreview.appendChild(previewImage);
            previewsPreview.appendChild(previewText);
            previewsPreview.appendChild(previewDelete);

            photoPreviews.appendChild(previewsPreview);
        };
        reader.readAsDataURL(file);
    });
});