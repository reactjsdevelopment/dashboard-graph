
import * as React from 'react';

// You are building a photo hosting app in React. Your browser is running very slowly and sometimes freezes when running the code below. What should you do to fix this problem?
function PhotoAlbum() {
const [photos, setPhotos] = React.useState([]);
React.useEffect(() => {
async function fetchData() {
const photos
=
await fetch("/photos");
}
setPhotos (photos);
fetchData();
});
return (
<ul>
{photos.map((photo) => (
<li key={photo.id}>
<img src={photo.url} />
</li>
))}
</ul>
);
}
// Select the best option:
// A. Pass as a second argument into React.useEffect
// B. Pass [photos] as a second argument into React.useEffect
// C.
// Pass [setPhotos] as a second argument into React.useEffect
// D. Pass [setPhotos, photos] as a second argument into React.useEffect
